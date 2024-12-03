const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
let email = ''
let emails = [];

//mi creo una funzione che, richiamando l'endpoint, quando richiamata genera un indirizzo email

function generateEmail(){
  axios.get(endpoint)
   .then(response =>{
    if(response.data.success){
      email = response.data.response
      console.log(email);
    }
    
  })
  .catch(error =>
    console.log(error)
  )
}

// genero per 10 volte una email (richiamando l'apposita funzione) e pusho ciascun elemento enerato nell'array 

while(emails.length < 10){
  generateEmail()
  emails.push(email)
}

console.log(emails);
