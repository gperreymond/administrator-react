#!/bin/bash
# Script to run viadeo-partners-api in development

sudo true

cd "`dirname $(readlink -f ${0})`"

/usr/local/bin/docker-compose --project-name xxxxxx.com.local up -d
