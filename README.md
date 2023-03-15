# **SERVER SIDE VINI MINI🥜🥚**
<img width="576" alt="Schermafbeelding 2023-03-15 om 14 24 38" src="https://user-images.githubusercontent.com/112856019/225322066-1bba6075-7eb0-46a2-a834-871628b38924.png">

## Inhoudsopgave

  * [Beschrijving📋](#beschrijving)
  * [Kenmerken👩🏽‍💻](#kenmerken)
  * [Installatie🧗‍♀️](#installatie)
  * [Gebruik🖥️](#gebruik)
  * [Bronnen🌐](#bronnen)
  * [Licentie](#licentie)

## Beschrijving📋

Ik heb een overzichtpagina gemaakt waaar de allergene eerst staan in categorien en als je op één allergene klik zie je op de detailpagina voedingsupllimenten die van de allergeen horen.

<img width="543" alt="Schermafbeelding 2023-03-15 om 16 19 24" src="https://user-images.githubusercontent.com/112856019/225356268-d9c19e68-7853-4c86-9fdf-dd430cdbe6b7.png">

 > Website live:https://puce-tired-bonobo.cyclic.app

## Kenmerken👩🏽‍💻

### Bij het maken van deze opdracht heb ik gebruik gemaakt van:
* 🔌Node
* 📟Ejs
* 📡Express
* 🗂Vini Mini API
* 📟 HTML
* 🎨 CSS


**Tools**
* 🖥️ VS Code


## Installatie🧗‍♀️ 

**Dit project is gemaakt met Node, Express, EJS.**

* Wat is **Node**: Node.js is een software platform waarmee ontwikkelaars JavaScript kunnen gebruiken om applicaties te bouwen die op de computer kunnen draaien, net zoals in een webbrowser. Het biedt veel handige functies en is populair vanwege de snelle en efficiënte manier waarop het met data kan omgaan.

**Met behulp van Node heb ik de API van Vini Mini erin kunnen zetten**

```node
import express from 'express'

// basis  url voor de api
const url = 'https://api.vinimini.fdnd.nl/api/v1'

// Maak een nieuwe express app
const app = express()
```
* Wat is **Express**:Express is een framework voor Node.js waarmee ontwikkelaars gemakkelijk web-applicaties en API's kunnen bouwen. Het biedt veel handige tools en functies om het proces te versnellen en te vereenvoudigen, en kan worden aangepast aan de behoeften van elk project. Express is erg populair en wordt veel gebruikt in de ontwikkeling van webtoepassingen en server-side applicaties.

**Met Node en Express kon ik van de API de data halen van de categorien en producten.**

```node
// Overzichtspagina
app.get('/producten', (request, response) => {
    let productenUrl = url + '/producten'
    
    fetchJson(productenUrl).then((data) => {
      response.render('producten', data)
    })
  })
```

* Wat is **EJS**: EJS is een sjabloontaal waarmee ontwikkelaars dynamische HTML-pagina's kunnen maken in Node.js-applicaties. Het wordt gebruikt om variabelen, conditionele logica en herbruikbare componenten in HTML-pagina's in te voegen, waardoor het bouwen van webpagina's eenvoudiger en efficiënter wordt.

**Eenmaal ik de API en Express en route had gemaakt voor de categorien/producten kon ik dit verwerken in mijn index.ejs**

```ejs
<div class="grid-container">
<h1>De Allergenen</h1>
    <% categories.forEach(category => { %>
        <a class="article-a" href="/<%= category.titel %>">
            <article> 
                <h2><%= category.titel %></h2>
                <img class="article-img" src="/<%=category.titel%>.png" alt="Allergenen icons">
            </article>
        </a>
    <% }); %>
</div>
```

## Gebruik🖥️
De homepage is de allergenen pagina waar alle allergene als catergorie staan.

Als je dan vervolgens op een allergeen klikt, krijg je een detaispagina van de producten die Vini Mini verkoopt voor de geklikte allergeen.

Vini Mini heeft niet nog een ruime voedingsupllimenten voor de allergenen die ze uiteindelijk willen verkopen op dit moment hebben ze alleen supllimenten voor pinda en ei.

## Bronnen🌐

>https://github.com/fdnd-agency/vini-mini

>https://api.vinimini.fdnd.nl

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
