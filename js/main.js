const button = document.querySelector("input")
button.onclick = function() {
  // alert("Hello, World!");
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  var response = 'madorchod'
  var new_result = ''
  
  respone = fetch("https://api.adviceslip.com/advice", requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result)
          new_result=JSON.parse(result)
          document.querySelector(".number").innerHTML = "A D V I C E # "+new_result["slip"]["id"]
          document.querySelector(".advice_text").innerHTML = new_result["slip"]["advice"]})
    .catch(error => console.log('error', error));
  }