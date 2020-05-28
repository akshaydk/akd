---
name: 'rearranging-passenger-instances'
title:  "Rearranging application instances in Passenger."
date:   2019-01-20 13:08:42 +0530
categories: Rails, Ruby, Passenger
description: |
 What are passenger_max_instances, passenger_min_instances and how to configure them correctly.
---

**Problem:**
We had three internal rails applications running in one physical serve. During some of the deployments,
one of the applications was not booting up. Though occurrence of such an event was very low I looked
into the issue as it stimulated me.

We had a master `passenger.conf` and each application had their own `application.conf`,
which looked something like this:

Master
```shell
...
PassengerRoot /usr/local/rvm/gems/ruby-2.6.0/gems/passenger-6.0.2
PassengerDefaultRuby /usr/local/rvm/gems/ruby-2.6.0/wrappers/ruby
PassengerMaxPoolSize 18
PassengerPoolIdleTime 300
...
```

Application specific configs
```shell
...
PassengerAppEnv qa
PassengerRuby /usr/local/rvm/gems/gemset/wrappers/ruby
PassengerMinInstances 9
PassengerPreStart http://localhost:81/
...
```

If we carefully look at the [PassengerMaxPoolSize](https://www.phusionpassenger.com/library/config/nginx/reference/#passenger_max_instances) and [PassengerMinInstances](https://www.phusionpassenger.com/library/config/nginx/reference/#passenger_min_instances)
for three applications, they didn't add up. Forget request load balancing, passenger didn't even 
have space for booting the application because Max was set to 18 and each application's 
min was 9. This meant, at any given time there could be only two applications running.

Fortunately, that wasn't the case. The deployment sequence decided the number of instances
of each application that will occupy the 18 available slots. If all the three were deployed
simultaneously then each occupied x,y,z number of instances based on the application's booting time.

Some of the examples of numbers were:
```
x | y | z
6 | 9 | 3
9 | 5 | 4
9 | 9 | 0
```
**Solution:**
We had to change `PassengerMinInstances` to a number that was suitable for the application.
It was also made sure that passenger get a couple of free instances for [Request load balancing](https://www.phusionpassenger.com/library/indepth/ruby/request_load_balancing.html).



