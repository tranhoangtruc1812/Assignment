import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doi-mat-khau',
  templateUrl: './doi-mat-khau.component.html',
  styleUrls: ['./doi-mat-khau.component.css']
})
export class DoiMatKhauComponent implements OnInit {
user = JSON.parse(localStorage.getItem('login'))
  student = JSON.parse(localStorage.getItem('user'))
  checkpass = false;
  passwordOld= "";
  passwordNew =""
  passAgain
  constructor() { }

  ngOnInit() {
  }
  changes(){
    localStorage.setItem('login',JSON.stringify(this.user))
    for(var i = 0; i < this.student.length; i++) {
      if(this.student[i].username === this.user.userName) {
        this.student[i].password = this.user.passWord;
      }
    }
    localStorage.setItem('user',JSON.stringify(this.student))
  }
  check(){
    if(this.passwordOld == this.user.passWord)
    this.checkpass = true
    else alert('mật khẩu hiện tại không đúng')
    if(this.checkpass === true)
    {
      if(this.passwordNew === this.passAgain){
      this.user.passWord = this.passwordNew
        this.changes()
      }
        else
        alert('nhập lại mật khẩu không đúng')
    }
  }
}
