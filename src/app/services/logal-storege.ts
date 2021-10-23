import { STORAGE_KEYS } from './../config/storage_keys.config';
import { SmallCar } from "../models/carrinho";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LocalStorage {

  getSmallCar(): SmallCar[] {
    let usr = localStorage.getItem(STORAGE_KEYS.smallCar);
    if (usr == null) {
      return null;
    }
    else {
      return JSON.parse(usr);
    }
  }

  setSmallCar(obj: SmallCar[]) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.smallCar);
    }
    else {
      localStorage.setItem(STORAGE_KEYS.smallCar, JSON.stringify(obj));
    }
  }
}
