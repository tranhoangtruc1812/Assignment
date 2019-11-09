import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { element } from 'protractor';
import { checkServerIdentity } from 'tls';
@Component({
  selector: 'app-dang-ki',
  templateUrl: './dang-ki.component.html',
  styleUrls: ['./dang-ki.component.css']
})
export class DangKiComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  dangki
  students = [];
  user = {
    username: '',
    password: '',
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    schoolfee: "",
    marks: ""

  }
  password="";
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dangki = +params.get('DangKi');
    });
    this.students = JSON.parse(localStorage.getItem('user'))
  }
  submit() {
    let a = 0
    this.students.forEach(element => {
      if (this.user.username !== element.username) {
        a = 1;
      }
    });

    if (a === 1) {
      this.students.push(this.user)
      localStorage.setItem('user', JSON.stringify(this.students))
    }
  }
    check(){
        if(this.password !== this.user.password)
        alert('nhập khẩu không trùng khớp')
        else 
        this.submit()
    }
  }


