# App del ristorante mangiaMangia

Gruppo di riferimento:
- Gabriele Di Grazia
- Rita Ciaramitano
- Yuri Fiorito

> Questo progetto è stato creato utilizzando [Create React App](https://github.com/facebook/create-react-app) e [Bootstrap](https://getbootstrap.com/).
> il progetto utilizza un database mySQL + ExpressJS

## Cosa fare all'inizio

In una directory, clona il progetto:\
`https://github.com/Rizaaal/mangiaMangia`

Una volta aperto il progetto, scarica le dipendenze:\
`npm i`

Per visualizzare il progetto in dev mode, eseguire:\
`npm run start`

Naviga verso [http://localhost:3000](http://localhost:3000) per vederlo nel tuo browser.

La pagina si ricaricherà ogni qual volta il codice viene modificato e salvato.

## configurazione di un server mySql

1. scarica mySql workbench andando alla [pagina download](https://www.mysql.com/products/workbench/)
2. configura una nuova connessione ([pagina tutorial](https://dev.mysql.com/doc/workbench/en/wb-getting-started-tutorial-create-connection.html))
3. scarica XAMPP ([pagina download](https://www.apachefriends.org/it/index.html))
4. fai partire il server mySQL dalla dashboard di XAMPP
5. entra dentro mySql workbench e esegui la query contenuta dentro `databse.sql` contenuto all'interno della repo

## Descrizione

App del ristorante "mangia-mangia" fusion con hamburger, pizze sushi e anche primi piatti. Il ristorante ha una sua piattaforma per la gestione degli ordini da casa online attraverso il suo sito web. Dal suo sito web e' possibile anche prenotare un tavolo e gestire le prenotazioni.

### Struttura (da completare)

- pagina home
  - La home presenta una hero screen ed informazioni sul ristorante, con le cucine disponibili. dentro ogni cucina si puo navigare verso il menu dove vengono visualizzati i piatti di questa cucina. Dentro la home abbiamo una sezione prenotazioni, dove si possono prenotare dei tavoli al ristorante.
- Menu
  - L'utente può navigare dentro un menu dove vede la lista dei piatti disponibili. Abbiamo anche una tab dove possiamo filtrare per tipo di cucina. Ogni piatto può essere aggiunto al carrello delle ordinazioni, anche più volte. Si può fare un ordinazione alla volta.
  - Puoi fare un ordine, aggiungendo i piatti al carrello
- Carrello
  - Dalla pagina carrello puoi confermare la tua ordinazione. quando l'ordinazione viene eseguita, l'utente viene portato verso una pagina di conferma. dalla pagina di conferma l'utente puo navigare alla home.
- Pagina prenotazioni
  - la tua prenotazione si vede in una pagina le tue prenotazioni. una volta eseguita la prenotazione, all'utente viene mostrata una pagina di conferma della prenotazione. Dentro questa pagina si vedono le tue prenotazioni con nome, orario e giorno. la prenotazione si può disdire dalla pagina delle prenotazioni.

## Organizzazione tasks
Le task vengono organizzate tramite le **issues**: le issues servono per tracciare le richieste di cose da fare. il procedimento è il seguente:
1. si decide per un cambiamento. apro una issue che descrive il cambiamento
2. applico una label coerente
3. dopo che la pull request è stata accettata, chiudere la issue (tasto "close issue" in fondo)

## Commit standard

### Processo di push di una modifica
NON è possibile pushare direttamente nel branch `main`. Per pushare una modifica:
1. creare un nuovo branch
2. committare la modifica nel branch
3. pushare con il comando `git push origin [nome branch]`
4. eseguire una pull request da github.

Questo progetto segue il conventional commit. Le opzioni disponibili sono le seguenti:

- feat
- docs
- chore
- fix
- refactor

> consultare la [documentazione conventional commit](https://www.conventionalcommits.org/en/v1.0.0/)

In generale la sintassi è la seguente:\
`[tipo]: {messaggio di commit}`

ad esempio: \
`feat: added navbar to file.html`

I commit sono in lingua inglese.

### Build

per creare la build del progetto nel `build` folder:\
`npm run build`

> Vedere la documentazione sul [deployment](https://facebook.github.io/create-react-app/docs/deployment) di un progetto.
