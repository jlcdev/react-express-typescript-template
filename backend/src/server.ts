import express, { Request, Response } from "express"
import helmet from "helmet"
import cors from "cors"

// Constants and defines
const app = express()
const port = parseInt(process.env.PORT ?? "3000")

// Configure project
app.use(helmet())
app.use(cors())
app.use(express.json())

// Endpoint definitions
app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({message:'Hello World'})
})

// Server listen
app.listen(port, ()=>{
    console.info(`Backend listen on: http://localhost:${port}`)
})