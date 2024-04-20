import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/users/entities/user.entity';
import { MainCategory } from './modules/main-categories/entities/main-category.entity';
import { MainCategoriesModule } from './modules/main-categories/main-categories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'SNDqfV9J3zRZUxQgCb3c3V7Y5fnY76',
      database: 'iretail',
      synchronize: true,
      host: "138.68.67.95",
      schema: "iretail",
      entities: [
        User,
        MainCategory
      ]
    }),
    UsersModule,
    MainCategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
