const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
let email = ''
let emails = [];


//mi creo una funzione che, richiamando l'endpoint, quando richiamata genera un indirizzo email

function generateEmail(){
  axios.get(endpoint)
   .then(response =>{
    if(response.data.success){
      email = response.data.response
      emails.push(email)    
    }     
    if(emails.length < 10){
      generateEmail()
    } 
  })
  .catch(error =>
    console.log(error)
  )

 emails
}

generateEmail()
console.log(emails)
// genero per 10 volte una email (richiamando l'apposita funzione) e pusho ciascun elemento enerato nell'array 

   


// prendo l'elemento html in cui voglio stampare i miei indirizzi e, in un ciclo for of lo stampo

