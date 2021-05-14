import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDetailService } from '../shared/admin-detail.service';
import {AuthService} from '../shared/auth.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  userDetails;
  constructor(private router: Router,public service: AdminDetailService,private auth:AuthService,private service2: UserService) { }
  filterargs = {productName: ''};
  filterargs2 = {productType: ''};

  ngOnInit() {
    this.service2.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
    this.service.refreshList();
  }
  
  inc(prod){
    if(prod.qnt != 5){
      prod.qnt += 1;
    }
  }

  dec(prod){
    if(prod.qnt != 1){
      prod.qnt -= 1;
    }
  }

  itemsCart:any = [];
  addCart(category){
    let cartDataNull = 
  localStorage.getItem('localCart');
    if(cartDataNull == null){
      let storeDataGet:any = [];
    storeDataGet.push(category);
      localStorage.setItem
        ('localCart', 
     JSON.stringify(storeDataGet));
    }
    else{
      var id = category.id;
      let index:number = -1;
      this.itemsCart = 
    JSON.parse
(localStorage.getItem
('localCart'));
for
(let i=0; i<this.itemsCart.length; 
i++){
if(parseInt(id) === 
parseInt(this.itemsCart[i].id))
{
        this.itemsCart[i].qnt = 
category.qnt;
          index = i;
          break;
        }
      }
      if(index == -1){
this.itemsCart.push(category);
        localStorage.setItem
('localCart', JSON.stringify
(this.itemsCart));
      }
      else{
        localStorage.setItem
('localCart', JSON.stringify
(this.itemsCart));
      }
    }
    this.cartNumberFunc();
  }

 cartNumber:number = 0;
 cartNumberFunc(){
   var cartValue = 
JSON.parse
(localStorage.getItem
('localCart'));
   this.cartNumber = 
cartValue.length;
   this.auth.cartSubject.next
(this.cartNumber);
 

}
Search(searchtext)
{
this.filterargs={productName: searchtext};
}
Type(type)
{  

this.filterargs2={productType: type};

}

Sort(type)
{
  if(type=='ASC')
  {
    this.service.list.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.productName > b.productName) ? 1 : -1) : -1 )
   
  } 
  else if(type=='none')
  {
    this.service.refreshList();
  } 
  else 
  {
    this.service.list.sort((a, b) => (a.price < b.price) ? 1 : (a.price === b.price) ? ((a.productName < b.productName) ? 1 : -1) : -1 )
  }



}


}