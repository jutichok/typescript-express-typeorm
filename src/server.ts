import * as bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import { Request, Response } from 'express'
import helmet from 'helmet'
import * as httpStatus from 'http-status'
import morgan from 'morgan'
import { unitsRouter } from "./packages/api/resources/unit/unit.router";

import config from './config'

import { handleErrors } from './packages/api/middlewares/error'

const app = express()

app.use(
  morgan(config.LOGGING.TYPE, {
    skip: (req: Request, res: Response) => res.statusCode < httpStatus.BAD_REQUEST,
    stream: process.stderr,
  }),
)

app.use(
  morgan(config.LOGGING.TYPE, {
    skip: (req: Request, res: Response) => res.statusCode >= httpStatus.BAD_GATEWAY,
    stream: process.stdout,
  }),
)

app.use(helmet())
app.use(cors())
app.use(compression())
app.use(bodyParser.json())

app.use("/units", unitsRouter);


app.use(handleErrors)

export default app