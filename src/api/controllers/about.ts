import { Router } from 'express';

const about = Router();

about.get('', (req, res) => {
  res.render('about', {
    title: 'About',
    type: 'Dynamic page 2'
  })
})

export default about;
