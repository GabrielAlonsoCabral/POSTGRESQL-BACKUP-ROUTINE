
if [ -f .env ]; then
  export $(echo $(cat .env | sed 's/#.*//g'| xargs) | envsubst)
fi


echo "INFO:  SH SCRIPT $PWD/scripts/pgdata_backup.sh STARTED..."

readonly DUMP_NAME="$PG_DATABASE-$(date +%m-%d-%YT%H:%M:%S)"

echo "\n"
echo "INFO: EXECUTING BACKUP ON DATABASE $PG_DATABASE ... \n"
docker exec -i $DK_PG_CONTAINER_NAME /bin/bash -c "PGPASSWORD=$PG_PASSWORD pg_dump --username $PG_USERNAME ${PG_DATABASE}" > $DUMP_NAME.sql;
echo "INFO: DUMP $DUMP_NAME.sql generated. \n"

echo "INFO: UPLOADING DUMP TO S3 $DUMP_NAME.sql ...\n"
aws s3 mv "$DUMP_NAME".sql s3://$AWS_BUCKET_NAME/pgdata_dumpies/$DUMP_NAME.sql > ./.logs/$DUMP_NAME.txt
echo "INFO:  LOGS CREATED ON $PWD/.logs/$DUMP_NAME.txt"
echo "INFO:  BACKUP FINISHED!\n"
