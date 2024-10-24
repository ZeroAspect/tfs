async function GetIP(){
  const host = "http://ip-api.com/json/"
  const response = await fetch(host)
  const data = await response.json()
  return data.query
}

module.exports = GetIP()