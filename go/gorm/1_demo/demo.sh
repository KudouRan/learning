sudo docker run \
--env BILI_COOKIE=123 -i --rm --user root  -v $(pwd):/usr/src/app --cap-add=SYS_ADMIN \
catlair/bilitaskpuppeteer node ./dist/index.js
