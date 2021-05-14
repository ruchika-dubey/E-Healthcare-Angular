import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userDetails;
  token;
 

  constructor(private router: Router, private service: UserService,private auth:AuthService) {
    this.auth.cartSubject.subscribe((data)=>
    {
      this.cartItem=data;
    });
  
   
  
  };

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
    
  this.token= localStorage.getItem('token'); 
  this.cartItemFunc();
  }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    this.ngOnInit();
  }
  cartItem:number = 0;
  
cartItemFunc(){
if
(localStorage.getItem
  ('localCart') != null){
var cartCount = 
JSON.parse
(localStorage.getItem
  ('localCart'));
this.cartItem = 
cartCount.length;
}
  
  
}
}