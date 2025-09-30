docker stop $(docker ps -aq)
docker rm $(docker ps -aq)

docker run --name my-mongo -p 27017:27017 -d mongo
