import { Injectable } from '@angular/core';
import { OrderDetail } from './admin-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {
  formData: OrderDetail= {
   
   
    id:null,
    fullName:null,
    email:null,
    address:null,
    city:null,
    nameOnCard:null,
    cardNumber:null,
    expMonth:null,
    amount:null,
    bill:null,
  };

  readonly rootURL = 'http://localhost:4176/api';
  list : OrderDetail[];
  constructor(private http: HttpClient) { }
  postProductDetail() {
    return this.http.post(this.rootURL + '/Order', this.formData);
  }
  putProductDetail() {
    return this.http.put(this.rootURL + '/Order/'+ this.formData.id, this.formData);
  }
  deleteProductDetail(_id) {
    return this.http.delete(this.rootURL + '/Order/'+ _id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Order')
    .toPromise()
    .then(res => this.list = res as OrderDetail[]);
  }
}
