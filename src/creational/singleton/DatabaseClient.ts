import Database from './Database';
const main = () => {
  const conn1 = 'http://localhost:456';
  const db1 = Database.getInstance(conn1);
  db1.connect();

  const conn2 = 'http://localhost:400';
  const db2 = Database.getInstance(conn2);
  db2.connect();
};

main();
