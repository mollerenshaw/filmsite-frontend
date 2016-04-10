#! /bin/sh

docker rm -f fs-ui

docker build -t mollerenshaw/filmsite-frontend .

docker run -d \
    -p 80:8080 \
    --net=filmsite-network \
    --name fs-ui \
    mollerenshaw/filmsite-frontend
