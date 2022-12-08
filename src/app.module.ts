import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./Entities/User";

@Module({
  imports: [UserModule, PostModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "pgql2003",
      password: "pgql2003",
      database: "vkcopy",
      entities: [User],
      synchronize: true
    })
  ]
})
export class AppModule {
}
