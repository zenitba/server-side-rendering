import express from 'express'

// basis  url voor de api
const url = 'https://api.vinimini.fdnd.nl/api/v1'

// Maak een nieuwe express app
const app = express()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
  let categoriesUrl = url + '/categories'

  fetchJson(categoriesUrl).then((data) => {
    response.render('index', data)
  })
})
// Overzichtspagina
app.get('/producten', (request, response) => {
    let productenUrl = url + '/producten'
    
    fetchJson(productenUrl).then((data) => {
      response.render('producten', data)
    })
  })
// basis url van de api, /producten
app.get('/Ei', async (request, response) => {
    let productenUrl = url + '/producten'
  
    await fetchJson(productenUrl).then((data) => {
      response.render('Ei', data )
    })
  })
  
  // route naar pinda.ejs
  app.get('/Pinda', async (request, response) => {
    let productenUrl = url + '/producten'
  
    await fetchJson(productenUrl).then((data) => {
      response.render('Pinda', data )
    })
  })

// allergenen zonder inhoud 
app.get('/Amandel', (request, response) => {
    response.render('Amandel')
  })
  
  app.get('/Schelp', (request, response) => {
    response.render('Schelp')
  })
  
  app.get('/Soja', (request, response) => {
    response.render('Soja')
  })
  
  app.get('/Vis', (request, response) => {
    response.render('Vis')
  })
  
  app.get('/Hazelnoot', (request, response) => {
    response.render('Hazelnoot')
  })
  
  app.get('/Walnoot', (request, response) => {
    response.render('Walnoot')
  })
  
  app.get('/Cashewnoot', (request, response) => {
    response.render('Cashewnoot')
  })
// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}