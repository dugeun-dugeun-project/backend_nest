import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RecordModule } from './record/record.module';
import configuration from './config/configuration';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env/.env.${process.env.NODE_ENV || "development"}`,
    isGlobal: true, 
    load:[configuration]
  }), 
  AuthModule, UserModule, RecordModule, DatabaseModule,CacheModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
