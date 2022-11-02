import { Router } from 'express'

const help = Router();

help.get('', (req, res) => { 
  res.send({
    title: 'Help',
    type: 'page'
  })
});

export default help;