import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PostsResolvers } from './posts.resolver';
import { PostsService } from './posts.service';

@Module({
  providers: [PostsResolvers, PostsService],
  imports: [PrismaModule],
})
export class PostsModule {}
