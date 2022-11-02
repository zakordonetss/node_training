import { Router } from 'express';

const basic = Router();

basic.get('', (req, res) => { 
  res.send('Root page')
})

basic.get('/details', (req, res) => { 
  res.send('Details page')
})

export default basic;