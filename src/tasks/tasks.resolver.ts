import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { execSync } from 'node:child_process';
import { sep } from 'path';
@Injectable()
export class TasksResolver {
  constructor(private Environment: ConfigService) {}
  private readonly logger = new Logger(TasksResolver.name);

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT,{name:"TASK: Postgres Backup"})
  handleCron() {    
    execSync(`sh ${process.cwd()}${sep}scripts${sep}pgdata_backup.sh`)
  }
}