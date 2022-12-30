# POSTGRESQL-BACKUP-ROUTINE
  PostgreSQL-Backup-Routine is a API developed with NestJS-Typescript-Graphql-Apollo-Prisma. <br/>
  This API contains an automatizated routine integrated with AWS S3 that every 00:00 <br/>
  execute a task to generate dump in PostgreSQL and save in your AWS S3 Bucket.  


  Developed by: <a href="https://www.github.com/gabrielAlonsoCabral">@GabrielAlonsoCabral</a>  
  <br/>

## Installation

```
# clone this repository
$ git clone https://github.com/GabrielAlonsoCabral/POSTGRESQL_BACKUP_ROUTINE.git
$ cd POSTGRESQL_BACKUP_ROUTINE
$ yarn
```

<br/>

## Configure Your Environment

### AWS CLI
```
# Click on the link below to install aws cli.
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

# check it on AWS IAM if your has enough permissions to PutObject in S3:BUCKET
```

## Environment Variables

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Defaul Value</th>
        <th>Description</th>
        <th>Required</th>        
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>APP_PORT</td>
            <td>3000</td>
            <td>Application server port</td>
            <td><code>true</code></td>        
        </tr>
        <tr>
            <td>PG_DATABASE</td>
            <td><code>null</code></td>
            <td>Database name</td>        
            <td><code>true</code></td>    
        </tr>
        <tr>
            <td>PG_USERNAME</td>
            <td><code>null</code></td>
            <td>Database user</td>        
            <td><code>true</code></td>    
        </tr>
        <tr>
            <td>PG_PASSWORD</td>
            <td><code>null</code></td>
            <td>Database password</td>        
            <td><code>true</code></td>    
        </tr>
        <tr>
            <td>PG_HOST</td>
            <td><code>null</code></td>
            <td>Database HOST</td>        
            <td><code>true</code></td>    
        </tr>
        <tr>
            <td>PG_PORT</td>
            <td><code>null</code></td>
            <td>Database port</td>        
            <td><code>true</code></td>    
        </tr>
        <tr>
            <td>DK_PG_CONTAINER_NAME</td>
            <td><code>null</code></td>
            <td>Postgres Docker container name</td>        
            <td><code>true</code></td>    
        </tr>
        <tr>
            <td>DATABASE_URL</td>
            <td><code>null</code></td>
            <td>Database port</td>        
            <td><code>true</code></td>    
        </tr>
        <tr>
            <td>AWS_BUCKET_NAME</td>
            <td><code>null</code></td>
            <td>AWS S3 Bucket name</td>        
            <td><code>true</code></td>    
        </tr>
    </tbody>
  </table>
  

### Usage
```
# Start Docker
$ yarn docker:up

# Stop Docker
$ yarn docker:down

# Start Apollo Server
$ yarn start:dev

# PostgreSQL Manual Backup
$ sh scripts/pgdata_backup.sh

# PostgreSQL Manual Restore
$ sh scripts/pgdata_restore.sh add_path_dump_sql_file
```
