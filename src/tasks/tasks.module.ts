import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksResolver } from './tasks.resolver';

@Module({
  providers: [TasksResolver],
  exports: [TasksResolver],
  imports:[ConfigModule]
})
export class TasksModule {}
