import { Component,  Input,  OnInit } from '@angular/core';
import { Pruduct } from 'src/app/models/pruduct';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Pruduct | undefined ;
  constructor() { }

  ngOnInit(): void {
    console.log(this.product);

  }

}
