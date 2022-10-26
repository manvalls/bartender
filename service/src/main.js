import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'

import { router } from './router.js'
import { logger } from './logger.js'

const app = new Koa()

app.use(cors())
app.use(bodyParser())

app.use(logger)
app.use(router.routes())

app.listen(3001)
