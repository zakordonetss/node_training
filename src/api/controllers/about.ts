import { Router } from 'express';

const about = Router();

about.get('', (req, res) => {
  res.send('<h1>About page</h1>')
})

export default about;
