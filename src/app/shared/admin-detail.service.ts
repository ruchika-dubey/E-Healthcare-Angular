import { Injectable } from '@angular/core';
import { AdminDetail } from './admin-detail.model';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AdminDetailService {
  formData: AdminDetail= {
   
    productName:null,
    imageUrl:null,
    price: null,
    description:null,
    id:null,
    productType:null,
    qnt:null
  };
  readonly rootURL = 'http://localhost:4176/api';
  list : AdminDetail[];

  constructor(private http: HttpClient) { }
  postProductDetail() {
    return this.http.post(this.rootURL + '/Admin', this.formData);
  }
  putProductDetail() {
    return this.http.put(this.rootURL + '/Admin/'+ this.formData.id, this.formData);
  }
  deleteProductDetail(_id) {
    return this.http.delete(this.rootURL + '/Admin/'+ _id);
  }

  refreshList(){
    this.http.get(this.rootURL + '/Admin')
    .toPromise()
    .then(res => this.list = res as AdminDetail[]);
  }
  
}
