import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/users/entities/user.entity';
import { Category } from './modules/categories/entities/category.entity';
import { CategoriesModule } from './modules/categories/categories.module';
import { FilesModule } from './modules/files/files.module';
import { ProductsModule } from './modules/products/products.module';
import { Product } from './modules/products/entities/product.entity';
import { BrandsModule } from './modules/brands/brands.module';
import { Brand } from './modules/brands/entities/brand.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import configurations from 'config/configurations';
import { Shop } from './modules/shop/entity';
import { ShopModule } from './modules/shop/shop.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations]
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: Number(process.env.DB_PORT || 5432),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      host: process.env.DB_HOST,
      schema: process.env.DB_SCHEMA,
      entities: [
        User,
        Category,
        Product,
        Brand,
        Shop
      ]
    }),
    UsersModule,
    CategoriesModule,
    FilesModule,
    ProductsModule,
    BrandsModule,
    AuthModule,
    ShopModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
