import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quen-mat-khau',
  templateUrl: './quen-mat-khau.component.html',
  styleUrls: ['./quen-mat-khau.component.css']
})
export class QuenMatKhauComponent implements OnInit {
  email;
  constructor() { }
  student = JSON.parse(localStorage.getItem('user'))

  ngOnInit() {

  }
  check(){
    this.student.forEach(element => {
      if(this.email == element.email)
      {
        alert('Hệ thống đã gửi mã xác thực vào Email của bạn, vui lòng nhập mã xác thực!')
        return ;
      }
     
    });
  }

}
