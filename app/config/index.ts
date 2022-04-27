export default {
  /**
   * databaseの設定
   */
  db: {
    host: process.env.MYSQL_SERVER,
    //port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    multipleStatements: true
  },
};
