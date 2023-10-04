// src/sequelize.ts
import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: 5432,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  models: [__dirname + "/models"],
});

export default sequelize;
