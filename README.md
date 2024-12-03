EMAIL LIST
===
Repo: js-email-list

## consegna:
- API di Boolean: https://flynn.boolean.careers/exercises/api/random/mail
- generare 10 indirizzi email e stamparli in pagina all’interno di una lista.


**Bonus**
- Abbellire con CSS o Bootstrap
- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
- mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API

=== svolgimento:
- nell'html inserisco la cdn axios
- nello script salvo l'endpoint in una variabile
- con axios.get richiamo la variabile delll'endpoint e la eseguo 10 volte (con l'utilizzo di un counter)
- salvo tutto in un array
- ciclo l'array stampando in pagina le email in una ul 