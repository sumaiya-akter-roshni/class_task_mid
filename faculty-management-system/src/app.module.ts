import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FacultiesModule } from './faculties/faculties.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '8934', 
      database: 'faculty_management',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FacultiesModule,
  ],
})
export class AppModule {}
