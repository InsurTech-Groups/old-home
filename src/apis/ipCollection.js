

export const ipAddress = async (ip) => {

  let apiKey = process.env.REACT_APP_IP_API_KEY;
  let ipAddress = localStorage.getItem('ip')

  console.log('the ip is, ', ipAddress)

  const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}&ip_address=${ipAddress}`

  console.log(url)
  //make a fetch request
  fetch(url)

    .then(response => {
      response.json();

      console.log(response.body)

      
    });
}