const submitData = (userName, userEmail) => {

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify({
      "name": userName,
      "email": userEmail
    })
  }
  
  return fetch('http://localhost:3000/users', configurationObject)
  .then(function (response) {
    console.log(response)
    return response.json();
  })
  .then(function (object) {
    document.querySelector('body').innerHTML+= object.id
    console.log(object)
  })
  .catch(function (error) {
    document.querySelector('body').innerHTML+= error.message
  })
}
