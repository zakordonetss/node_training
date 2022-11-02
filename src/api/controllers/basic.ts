import express, { Router } from 'express';
import path from 'path';

const basic = Router();
const staticRootPath = path.join(__dirname, '../../../public');

basic.use(express.static(staticRootPath))

export default basic;