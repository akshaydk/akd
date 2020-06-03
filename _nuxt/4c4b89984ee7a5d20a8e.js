(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{215:function(e,n){const t={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"dynamicMarkdown"},[t("p",[t("strong",[e._v("Problem:")]),e._v("\nWe had three internal rails applications running in one physical serve. During some of the deployments,\none of the applications was not booting up. Though occurrence of such an event was very low I looked\ninto the issue as it stimulated me.")]),e._v(" "),t("p",[e._v("We had a master "),t("code",{pre:!0},[e._v("passenger.conf")]),e._v(" and each application had their own "),t("code",{pre:!0},[e._v("application.conf")]),e._v(",\nwhich looked something like this:")]),e._v(" "),t("p",[e._v("Master")]),e._v(" "),t("pre",{staticClass:"language-shell"},[t("code",{pre:!0,attrs:{class:"language-shell"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nPassengerRoot /usr/local/rvm/gems/ruby-2.6.0/gems/passenger-6.0.2\nPassengerDefaultRuby /usr/local/rvm/gems/ruby-2.6.0/wrappers/ruby\nPassengerMaxPoolSize "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("18")]),e._v("\nPassengerPoolIdleTime "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("300")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),t("p",[e._v("Application specific configs")]),e._v(" "),t("pre",{staticClass:"language-shell"},[t("code",{pre:!0,attrs:{class:"language-shell"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\nPassengerAppEnv qa\nPassengerRuby /usr/local/rvm/gems/gemset/wrappers/ruby\nPassengerMinInstances "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("9")]),e._v("\nPassengerPreStart http://localhost:81/\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),t("p",[e._v("If we carefully look at the "),t("a",{attrs:{href:"https://www.phusionpassenger.com/library/config/nginx/reference/#passenger_max_instances"}},[e._v("PassengerMaxPoolSize")]),e._v(" and "),t("a",{attrs:{href:"https://www.phusionpassenger.com/library/config/nginx/reference/#passenger_min_instances"}},[e._v("PassengerMinInstances")]),e._v("\nfor three applications, they didn’t add up. Forget request load balancing, passenger didn’t even\nhave space for booting the application because Max was set to 18 and each application’s\nmin was 9. This meant, at any given time there could be only two applications running.")]),e._v(" "),t("p",[e._v("Fortunately, that wasn’t the case. The deployment sequence decided the number of instances\nof each application that will occupy the 18 available slots. If all the three were deployed\nsimultaneously then each occupied x,y,z number of instances based on the application’s booting time.")]),e._v(" "),t("p",[e._v("Some of the examples of numbers were:")]),e._v(" "),t("pre",[t("code",{pre:!0},[e._v("x | y | z\n6 | 9 | 3\n9 | 5 | 4\n9 | 9 | 0\n")])]),e._v(" "),t("p",[t("strong",[e._v("Solution:")]),e._v("\nWe had to change "),t("code",{pre:!0},[e._v("PassengerMinInstances")]),e._v(" to a number that was suitable for the application.\nIt was also made sure that passenger get a couple of free instances for "),t("a",{attrs:{href:"https://www.phusionpassenger.com/library/indepth/ruby/request_load_balancing.html"}},[e._v("Request load balancing")]),e._v(".")])])}]};e.exports={attributes:{name:"rearranging-passenger-instances",title:"Rearranging application instances in Passenger.",date:"2019-01-20 13:08:42 +0530",categories:"Rails, Ruby, Passenger",description:"What are passenger_max_instances, passenger_min_instances and how to configure them correctly.\n"},vue:{render:t.render,staticRenderFns:t.staticRenderFns,component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=t.render,this.$options.staticRenderFns=t.staticRenderFns}}}}}}]);