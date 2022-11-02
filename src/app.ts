import express from "express";
import router from './api/controllers';
import { PORT } from './config/config';

export class App {
  public start(): void {
    try {
      this._initExpress()
    } catch (err) {
      console.log(err);
    }
  }

  private _initExpress(): void {
    express()
      .use(router)
      .listen(PORT, () => { console.log(`The app started listening in port: ${PORT}`); })
  }
}