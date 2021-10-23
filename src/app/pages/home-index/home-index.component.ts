import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { API_CONFIG } from 'src/app/config/api.config';
import { Category } from 'src/app/models/category';
import { Pruduct } from 'src/app/models/pruduct';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css']
})
export class HomeIndexComponent implements OnInit {
  product: Pruduct | undefined;
  pruducts: Pruduct[];
  time: any;
  isLoading: boolean = true;
  timec: any;
  isLoadingc: boolean = true;
  catgorys: Category[];
  constructor(
    private hhtp: HttpClient,) { }
  /**
   *  header('Access-Control-Allow-Origin: *');
      header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
      header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
   */
  ngOnInit(): void {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' });
    let i = 0;
    this.time = setInterval(async () => {

      try {
        this.hhtp.get<Pruduct[]>(`${API_CONFIG.baseUrl}/products/all`)
          .subscribe((rest) => {
            this.pruducts = rest;
            this.isLoading = false;
            if (this.time) {
              clearInterval(this.time);
            }
          })
      } catch (error) {
        console.log(error);

      }
    }, 500);

    this.timec = setInterval(async () => {

      try {
        this.hhtp.get<Category[]>(`${API_CONFIG.baseUrl}/categorys/all`)
          .subscribe((rest) => {
            this.catgorys = rest;
            this.isLoadingc = false;
            if (this.timec) {
              clearInterval(this.timec);
            }
          })
      } catch (error) {
        console.log(error);

      }
    }, 500);
  }

  ngOnDestroy(): void {

    if (this.time) {
      clearInterval(this.time);
    }
    if (this.timec) {
      clearInterval(this.time);
    }
  }

}
