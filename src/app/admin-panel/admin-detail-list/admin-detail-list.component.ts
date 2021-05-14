import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminDetail } from 'src/app/shared/admin-detail.model';
import { AdminDetailService } from 'src/app/shared/admin-detail.service';

@Component({
  selector: 'app-admin-detail-list',
  templateUrl: './admin-detail-list.component.html',
  styleUrls: ['./admin-detail-list.component.css']
})
export class AdminDetailListComponent implements OnInit {

  constructor(public service: AdminDetailService,
    public toastr: ToastrService) { }

  ngOnInit(){
    this.service.refreshList();
  }

  populateForm(pd: AdminDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteProductDetail(id)
        .subscribe(res => {
          debugger;
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Product Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
