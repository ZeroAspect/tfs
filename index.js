const app = require("./config/config.js");
require('./routes.js')

app.listen(3000, (err)=>{
  if(err) throw new err
  console.log("Server is running on port 3000");
})