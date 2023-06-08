#!/bin/bash
cd ~/portfolio
git pull origin main
npm install &&
npm run build &&
pm2 restart [name]
