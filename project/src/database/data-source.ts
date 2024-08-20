import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateSeedUsersTable1723595905842 } from './migrations/1723595905842-CreateSeedUsersTable'
import Users from '../app/entities/Users'
import { CreateUsersTable1705752946855 } from "./migrations/1723595389668-CreateUsersTable";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "projeto",
  synchronize: true,
  logging: false,
  entities: [Users],
  migrations: [CreateUsersTable1705752946855, CreateSeedUsersTable1723595905842],
  subscribers: [],
});



