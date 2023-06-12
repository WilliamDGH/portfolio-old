#!/bin/bash
# Navigate to your application directory
cd /var/www/guanhua-ding-portfolio

# Start your application with PM2
#!/bin/bash
echo "$(date) - Running install_dependencies.sh" >> /var/log/deploy.log
cd /var/www/guanhua-ding-portfolio
yarn install --verbose >> /var/log/deploy.log
echo "$(date) - Finished running install_dependencies.sh" >> /var/log/deploy.log

pm2 start yarn --name "guanhua-ding-portfolio" -- start
