const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "message",
};

async function add(mesg) {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `insert into mesaage_table  (mesg) values (?);`;
  await connection.queryAsync(sql, [mesg.mesg]);
  //console.log();
  await connection.endAsync();
}

async function select() {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `select * from mesaage_table`;
  const list = await connection.queryAsync(sql);
  //console.log(list);

  await connection.endAsync();
  return list;
}

module.exports = { select, add };
const mesg = { mesg: "Hi all" };
//add(mesg);
//select();
