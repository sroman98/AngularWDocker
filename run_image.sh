#!/bin/bash

sudo docker run --name myContainer --interactive --tty --rm --publish 8080:4200 --volume "${PWD}/my-angular-site:/usr/src/app" angular-docker-image
