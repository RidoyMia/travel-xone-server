import express,{Request,Response} from 'express'
import UserRoute from './app/module/Auth/Auth.route'
import tourRoute from './app/module/TourService/tour.route'
const app = express()
var cors = require('cors')
const port = 3000
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
app.use('/api/v1/user',UserRoute)
app.use('/api/v1/tour',tourRoute)



export default app;