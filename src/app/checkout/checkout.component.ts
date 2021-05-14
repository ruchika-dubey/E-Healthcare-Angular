import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderDetailService } from '../shared/order-detail.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  constructor(private router: Router,public service: OrderDetailService,
    public toastr: ToastrService,private auth:AuthService) {
     
     }
bill:string;

  ngOnInit()
   {
    this.CartDetails();
    this.loadCart();
    this.resetForm();
   
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      id: 0,
      fullName:'',
      email:'',
      address:'',
      city:'',
      nameOnCard:'',
      cardNumber:'',
      expMonth:'',
      amount:this.total,
      bill:this.bill,

    }
  }
  onSubmit(form: NgForm) {

    
      this.insertRecord(form);
      localStorage.removeItem('localCart');
      this.auth.cartSubject.next(0);
   
  }
  insertRecord(form: NgForm) {
    this.service.postProductDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'OrderPlaced');
        
        this.router.navigate(['/product']);
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  getCartDetails:any=[];
  CartDetails(){
if(localStorage.getItem
  ('localCart')){
this.getCartDetails = 
JSON.parse
(localStorage.getItem
  ('localCart'));
 }
}

total:number=0;
loadCart(){
    if
    (localStorage.getItem
      ('localCart')){
    this.getCartDetails = 
    JSON.parse
    (localStorage.getItem
      ('localCart'));
    
    this.bill = this.getCartDetails.reduce (function(acc, val){
      return acc + (val.productName +'-'+  val.qnt +' ');
    },name);
  
    this.total = 
    this.getCartDetails.reduce
    (function(acc, val){
    return acc + (val.price * val.qnt);
    }, 0);
    }
    }
}


