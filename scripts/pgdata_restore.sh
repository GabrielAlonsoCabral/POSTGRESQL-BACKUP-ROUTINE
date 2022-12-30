
if [ -f .env ]; then
  export $(echo $(cat .env | sed 's/#.*//g'| xargs) | envsubst)
fi

readonly FILE_PATH=${1:?"Dump file path must be specified in args[1]."}


docker exec -i ${DK_PG_CONTAINER_NAME} /bin/bash -c "PGPASSWORD=${PG_PASSWORD} psql --username ${PG_USERNAME} ${PG_DATABASE}" < $FILE_PATH