 #!/bin/bash
  cd ~/portfolio || exit
  rm -rf node_modules/
  rm -rf .next
  yarn install