---
name: 'multiple_jenkinsfiles'
title:  "Multiple Jenkins files in a single git repository"
date:   2020-03-26 13:08:42 +0530
categories: Jenkins
description: |
  Wonder how to configure Jenkins when you have multiple projects under one repo? Checkout what I did.
---

We have a single git repository under which 2 applications run. To build a 
separate pipeline for both the projects using Jenkinsfile, under the
application folders I created a Jenkinsfile and did the following in the UI

Job configuration -> Build Configuration -> Script -> {ApplicationName}/Jenkinsfiles