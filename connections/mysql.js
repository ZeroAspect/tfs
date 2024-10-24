const { createPool } = require("mysql2");

async function CreateConnection(){
  const connection = await createPool({
    uri: "mysql://root:gpFIwjsmCrZIwpFXKAUTwFmZGVXOGVHV@autorack.proxy.rlwy.net:32944/railway"
  })
  const pool = await connection.promise()
  return pool
}

module.exports = CreateConnection()