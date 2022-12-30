export default () => ({
    app_port: Number(process.env.APP_PORT||0) || 3000,
    database: {
        name:process.env.PG_DATABASE,
        port:process.env.PG_PORT,
        username:process.env.PG_USERNAME,
        password:process.env.PG_PASSWORD,
        host:process.env.PG_HOST,
    },
    container:{
        postgres_container_name:process.env.DK_PG_CONTAINER_NAME
    },
    aws:{
        bucket_name:process.env.AWS_BUCKET_NAME
    },
    prisma:{
        database_url:process.env.DATABASE_URL
    }
  });
  