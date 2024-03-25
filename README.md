# App del ristorante mangiaMangia

Gruppo di riferimento:
- Gabriele Di Grazia
- Rita Ciaramitano
- Yuri Fiorito

> Questo progetto è stato creato utilizzando [Create React App](https://github.com/facebook/create-react-app).

## Getting started

In una directory, clona il progetto:\
`git clone https://github.com/Rizaaal/food-delivery/`

Per visualizzare il progetto in dev mode, eseguire:\
`npm start`

Naviga verso [http://localhost:3000](http://localhost:3000) per vederlo nel tuo browser.

La pagina si ricaricherà ad ogni update.

### `npm run build`

crea la build del progetto nel `build` folder.

> Vedere la documentazione sul [deployment](https://facebook.github.io/create-react-app/docs/deployment) di un progetto.

## Descrizione

App di creata in react e bootstrap.

App del ristorante "mangia-mangia" fusion con hamburger, pizze sushi e anche primi piatti. Il ristorante ha una sua piattaforma per la gestione degli ordini da casa online attraverso il suo sito web. Dal suo sito web e' possibile anche prenotare un tavolo e gestire le prenotazioni.

Il sito ha la seguente struttura:
- La home presenta una hero screen ed informazioni sul ristorante, con le cucine disponibili. dentro ogni cucina si puo navigare verso il menu dove vengono visualizzati i piatti di questa cucina.
- L'utente puo' navigare dentro un menu dove vede la lista dei piatti disponibili. Abbiamo anche una tab dove possiamo filtrare per tipo di cucina. Ogni piatto puo' essere aggiunto al carrello delle ordinazioni, anche più volte. Si puo' fare un ordinazione alla volta.
- Puoi fare un ordine, aggiungendo i piatti al carrello. dalla pagina carrello puoi confermare la tua ordinazione. quando l'ordinazione viene eseguita, l'utente viene portato verso una pagina di conferma. dalla pagina di conferma l'utente puo navigare alla home.
- Puoi fare una prenotazione al ristorante. quando prenoti, la tua prenotazione si vede in una pagina le tue prenotazioni. una volta eseguita la prenotazione, all'utente viene mostrata una pagina di conferma della prenotazione. Dentro questa pagina si vedono le tue prenotazioni con nome, orario e giorno. la prenotazione si può disdire dalla pagina delle prenotazioni.

## Organizzazione tasks
Le task vengono organizzate tramite **github projects**: projects è un tool di github che ti permette di gestire ogni aspetto della repo: task, calendario etc. Utilizziamo quella per organizzare il lavoro.
Le task (le cose da fare individualmente) devono essere create li. Quella deve essere la fonte di verità per quello che deve essere fatto in un dato momento!

[documentazione projects github](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)

## Tasks (temporaneo)
1. Aggiungere altri piatti

mockup
1. definire struttura sito con pages

tecnico
1. Fare linter con husky

## Commit standard
Questo progetto segue il conventional commit. Le opzioni disponibili sono le seguenti:

- feat
- docs
- chore
- fix
- refactor

[https://www.conventionalcommits.org/en/v1.0.0/](documentazione conventional commit)

In generale la sintassi è la seguente:\
`[tipo]: {messaggio di commit}`

ad esempio: \
`feat: added navbar to file.html`

I commit sono in lingua inglese.
