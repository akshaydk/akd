---
name: 'rails_push-to-artifactory'
title:  "Pushing rails artifacts to Artifactory"
date:   2020-03-20 13:08:42 +0530
categories: Rails, Artifactory
description: |
  How to push rails artifacts to artifactory?
---

Unlike Java and .Net, Rails projects do not have artifacts. A simple copy-paste of the new code base would work after
restarting the web server. As a guideline, we had to push the artifacts to Artifactory at end of a every build.
JPaC was being used to build our pipleline. API's exposed by artifactory came to our rescue.

We did something like this in one of our build stages:

```shell
#zip the artifacts
tar --exclude='./doc' --exclude='./.git/*' --exclude='./tmp/*' --exclude='./spec/*' -cvzf artifact.tar.gz -C . .

#Use the Artifactory api to push the artifact
curl -u {user-id}:{api-key} -X PUT "https://example.com/{repo_path}/{repo_name}" -T artifact.tar.gz

```








