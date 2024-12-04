const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
let email = ''
let emails = [];
const emailList= document.getElementById('printEmail')

//mi creo una funzione che, richiamando l'endpoint, quando richiamata genera un indirizzo email
console.log(emails)


generateEmail()

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
      // se l'array è pieno richiamo la funzione che mi stampa il risultato in pagina
    } else {
      document.getElementById('loading').classList.add('d-none')
      emailList.classList.remove('d-none')
      printList()
    }
  })
  .catch(error =>
    console.log(error)
  )
}

// creo la funzione che mi stampa in pagina gli indirizzi email se l'array è comoleto
function printList(){
  emails.forEach(mail => emailList.innerHTML += `<li>${mail}</li>`)
}

// cliccando il bottone svuoto l'html e genero altri 10 indirizzi
document.getElementById('generate').addEventListener('click', () => {
  document.getElementById('loading').classList.remove('d-none')
  emailList.classList.add('d-none')
  emails = []
  emailList.innerHTML= ''
  generateEmail()
})