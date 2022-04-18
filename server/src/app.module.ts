import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PlaceModule } from './place/place.module';
import { ReviewModule } from './review/review.module';
import { ReportModule } from './report/report.module';
import {RecommenderModule} from "./recommender/recommender.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    PrismaModule,
    PlaceModule,
    ReviewModule,
    ReportModule,
    RecommenderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
