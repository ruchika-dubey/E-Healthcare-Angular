import { Component, OnInit } from '@angular/core';
import { OrderDetailService } from '../shared/order-detail.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(public service: OrderDetailService,
    ) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
