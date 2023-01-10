const url = "https://reqres.in/api/users/2";

function apis(url, type, data) {
	let formData = {method: type};
  
	if (type === 'POST') {
  	 formData.headers = { 'content-type': 'application/json' };
		 formData.body = JSON.stringify(data); 	  
	}
  
	fetch(url, formData).then((res) => {
   return res.json();
  }).then((resData) => {
   console.log(resData);
  })
}

//get
apis(url, 'GET');

//post
apis(url, 'POST', {name: 'Bhoopathi', job: 'leader'});