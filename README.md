# POSTGRESQL-BACKUP-ROUTINE
  PostgreSQL-Backup-Routine is a API developed with NESTJS-TYPESCRIPT-GRAPHQL-PRISMA. <br/>
  This API contains an automatizated routine integrated with AWS S3 that every end of day (00:00) <br/>
  execute a dump in PostgreSQL and save in your AWS S3 Bucket.  


  Developed by: @GabrielAlonsoCabral
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


### Environment Variables

* VARS

  <table>
    <thead>
      <tr>
        <th>words</th>
        <th>transform to</th>
        <th>keepUpperCase is false</th>
        <th>keepUpperCase is true</th>
      </tr>
    </thead>
    <tbody>
        <tr>
            <td>"XML HTTP request"</td>
            <td>pascalCase</td>
            <td><code>XmlHttpRequest</code></td>
            <td><code>XMLHTTPRequest</code></td>
        </tr>
        <tr>
            <td>"new customer ID"</td>
            <td>camelCase</td>
            <td><code>newCustomerId</code></td>
            <td><code>newCustomerID</code></td>
        </tr>
    </tbody>
  </table>