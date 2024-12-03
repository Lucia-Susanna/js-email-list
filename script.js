const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
let email = ''
let emails = [];
const emailList= document.getElementById('printEmail')

//mi creo una funzione che, richiamando l'endpoint, quando richiamata genera un indirizzo email
console.log(emails)

generateEmail()

function printList(){
  emails.forEach(mail => emailList.innerHTML += `<li>${mail}</li>`)
}

function generateEmail(){
  
  axios.get(endpoint)
  .then(response =>{
    if(response.data.success){
      email = response.data.response
      emails.push(email)    
    }     
    
    // genero per 10 volte una email (richiamando l'apposita funzione) e pusho ciascun elemento enerato nell'array 
    if(emails.length < 10){
      generateEmail()
    } else printList()
  })
  .catch(error =>
    console.log(error)
  )

}
// prendo l'elemento html in cui voglio stampare i miei indirizzi e, in un ciclo for of lo stampo
