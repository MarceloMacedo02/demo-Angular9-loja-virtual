import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from './../../../config/api.config';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SmallCar } from 'src/app/models/carrinho';
import { Pruduct } from 'src/app/models/pruduct';
import { LocalStorage } from 'src/app/services/logal-storege';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.css']
})
export class ProdutoDetailsComponent implements OnInit {
  product: Pruduct | undefined;
  qtd: number = 1;

  time: any;
  isLoading: boolean = true;
  index: any;

  smallCar: SmallCar[];
  constructor(
    private router: Router,
    private storage: LocalStorage,
    private hhtp: HttpClient,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.index = this.activatedRoute.snapshot.paramMap.get('id');
    this.time = setInterval(async () => {

      try {
        this.hhtp.get<Pruduct>(`${API_CONFIG.baseUrl}/products/${this.index}`)
          .subscribe((rest) => {
            this.product = rest;
            this.isLoading = false;
             if (this.time) {
            clearInterval(this.time);
          }
          })
      } catch (error) {
        console.log(error);

      }
    }, 500);


    if (this.storage.getSmallCar() !== null) { this.smallCar = this.storage.getSmallCar(); } else this.smallCar = [];
  }
  addItemInCar(): void {
    if (this.qtd > 0) {
      let item: SmallCar = {
        id: this.product.id,
        name: this.product.name, imageView: this.product.imageView,
        qtd: this.qtd, value: this.product.value
      };
      console.log(item);

      this.smallCar.push(item);
      this.storage.setSmallCar(this.smallCar);
      this.router.navigate([`/products/details/${this.product.id}`]).then(() => {
        window.location.reload();
      });
    }

  }
  ngOnDestroy(): void {

    if (this.time) {
      clearInterval(this.time);
    }
  }
}

