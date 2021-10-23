
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmallCar } from 'src/app/models/carrinho';
import { LocalStorage } from 'src/app/services/logal-storege'

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css']
})
export class HearderComponent implements OnInit {

  smallCar: SmallCar[];
  sutotal: number=0;
  quantidade: number = 0;
  constructor(
    private storage: LocalStorage,
    private router: Router,) { }

  ngOnInit(): void {
    if (this.storage.getSmallCar() !== null) {
      this.smallCar = this.storage.getSmallCar();
      this.quantidade = this.smallCar.length;
      this.smallCar.forEach(element => {
        this.sutotal+=element.value * element.qtd;
      });
    } else this.smallCar = [];

  }
  remove(index: any): void {
    this.sutotal-=this.smallCar[index].value * this.smallCar[index].qtd;
    this.smallCar.splice(index, 1);
    this.storage.setSmallCar(this.smallCar);

    this.quantidade = this.smallCar.length;


  }
}


