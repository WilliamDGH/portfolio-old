#!/bin/bash
cd /root/portfolio || exit
rm -rf node_modules/
rm -rf .next
yarn install
