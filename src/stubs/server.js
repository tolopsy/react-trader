const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST' && req.path === "/calculate") {
    // NOTE: These are only stub and mock values
    // and do not represent the original stock trade calculations.
    req.body.yieldValue = 1.5
    req.body.dirtyPrice = req.body.yieldValue * req.body.cleanPrice
    req.body.endCash = req.body.startCash * req.body.yieldValue
  }

  if (req.method === 'POST' && req.path === "/execute")
    // stub-in value
    req.body.status = 'success'
  next()
})

// Use default router
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})