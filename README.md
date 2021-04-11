docker-compose run --rm app npx create-react-app react-app --use-npm

docker rmi $(docker images -a -q) -f

docker-compose up

docker-compose down

