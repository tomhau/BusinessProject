import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';



// import { Product } from '../3_models/Product';


dotenv.config({ path: 'config/middleware.env' });

const routes = express();  

routes.use(cors());
routes.use(bodyParser.json());
routes.use(express.static('public'));
const urlencode = bodyParser.urlencoded({ extended: true });

// example get 
routes.get('/api/products/:uid', async (req,res) => {
   try{
   
      // const product:Promise<IProduct> = await Api.getProduct(req.params.uid);
      // return res.status(200).json(product);
   }catch(e){
      console.error('routes read, '+e);
   }
});

// example post
routes.post('/api/products', async (req,res) => {
   try{
       // const product = req.body;
       // Api.insertProduct(product.no,product.name,product.price);
       // return res.status(201).json(product);
   } catch(e){
      console.error('routes insert, '+e);
   }
});


// The default (all other not valid routes)
routes.get('*', (req,res) =>{
     return res.status(404).send('no such route');
});

export {routes}

