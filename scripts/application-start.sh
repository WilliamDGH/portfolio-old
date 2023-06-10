#!/bin/bash
pm2 describe portfolio > /dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
  pm2 start yarn --name portfolio -- start
else
  pm2 reload portfolio
fi;
