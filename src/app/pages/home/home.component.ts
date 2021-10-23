import { API_CONFIG } from './../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Pruduct } from 'src/app/models/pruduct';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pruducts: Pruduct[];
  catgorys: Category[];
  constructor(
    private hhtp: HttpClient,) { }

  ngOnInit(): void {
    this.hhtp.get<Pruduct[]>(`${API_CONFIG.baseUrl}/products/`)
      .toPromise()
      .then((rest) => {
        this.pruducts = rest;
      })

  }

}
