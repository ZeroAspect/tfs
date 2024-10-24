const Users = require("../users/Users.js");

async function getAllUsers(){
  const users = await Users.findAll()
  return users
}
async function getUserByIp(ipAddress){
  const user = await Users.findOne(
    {
      where: {
        ip: ipAddress
      }
    }
  )
  return user
}
async function createUser(userData = {}){
  const user = await Users.create(
    userData
  )
  return user
}

module.exports = {
  getAllUsers,
  getUserByIp,
  createUser
};