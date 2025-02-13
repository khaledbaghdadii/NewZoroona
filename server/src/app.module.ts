import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PlaceModule } from './place/place.module';
import { ReviewModule } from './review/review.module';
import { ReportModule } from './report/report.module';
import { RecommenderModule } from './recommender/recommender.module';
import { PackageModule } from './package/package.module';
import { ReservationModule } from './reservation/reservation.module';
import { RequestModule } from './request/request.module';
import { CategoryModule } from './category/category.module';
import { OrientationModule } from './orientation/orientation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UserModule,
    PrismaModule,
    PlaceModule,
    ReviewModule,
    ReportModule,
    RecommenderModule,
    PackageModule,
    ReservationModule,
    RequestModule,
    CategoryModule,
    OrientationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
