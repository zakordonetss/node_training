import { Router } from 'express'

const help = Router();

help.get('', (req, res) => { 
  res.render('help', {
    title: 'Help',
    type: 'Dynamic page'
  })
});

export default help;