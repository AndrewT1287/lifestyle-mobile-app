import express, { Express, Request, Response } from "express";
import {add_user} from "./users/users.ts"
import configure_aws from './configure_aws.ts'

// Connect to dynamodb, create table
configure_aws()

const e = require('express')
const app = e()
const port = 3000

app.get('/', (req: Request, res: Response) => {
    add_user("NEW USER");
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});