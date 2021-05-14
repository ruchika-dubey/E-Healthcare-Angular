import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminDetailService } from 'src/app/shared/admin-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  constructor(public service: AdminDetailService,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


 resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      id: 0,
      productName: '',
      imageUrl: '',
      price: 0.00,
      description: '',
      productType:'',
      qnt:1

    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postProductDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Product Detail Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putProductDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Product Details Edited');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
