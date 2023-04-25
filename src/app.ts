import express from "express";
import path from 'path';
import hbs from "hbs";

import router from './api/controllers';
import { PORT } from './config/config';

const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

export class App {
  public start(): void {
    try {
      hbs.registerPartials(partialPath);
      this._initExpress();
    } catch (err) {
      console.log(err);
    }
  }

  private _initExpress(): void {
    express()
      .use(router)
      .set('view engine', 'hbs')
      .set('views', viewsPath)
      .listen(PORT, () => { console.log(`The app started listening in port: ${PORT}`); });
  }
}