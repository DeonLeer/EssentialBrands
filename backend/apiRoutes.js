module.exports = function(router, database) {
  router.get('/products', (req, res) => {
    database.getAllProducts()
    .then(products => res.send({products}))
    .catch(e => {
      console.error(e);
      res.send(e);
    })
  })
  router.get('/terpenes', (req, res) => {
    database.getAllTerpenes()
    .then(terpenes => res.send({terpenes}))
    .catch(e => {
      console.error(e);
      res.send(e);
    })
  })
}
