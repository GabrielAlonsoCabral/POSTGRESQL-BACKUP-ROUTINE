import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';
import Environment from './config/Environment';
import { PostsModule } from './posts/posts.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal:true,
      load:[Environment]

    }),
    TasksModule,
    PostsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
