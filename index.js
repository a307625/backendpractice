import _ from 'lodash'
import Koa from 'koa'

const app = new Koa()

app.listen(3005, () => {
  console.log(`listening on port 3005`)
})


// const AA = require('lodash')
//
// console.log(AA)
