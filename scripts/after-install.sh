#!/bin/bash
cd ~/portfolio || exit
git pull origin main
rm -rf node_modules/
rm -rf .next
yarn install
