import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentsServiceService } from '../students-service.service'

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit {
  url = './assets/Students.js'
  show: boolean = false
  constructor(private http: HttpClient, private service: StudentsServiceService) { }
  students=[];
  
  logOn = {
    userName: '',
    passWord: '',
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    schoolfee: "",
    marks: ""
  }
  ngOnInit() {
    this.students =JSON.parse( localStorage.getItem('user'))
    
  }
  getStudents() {
    return this.http.get(this.url)
  }
  submit() {
    //  console.log(this.students)
    this.students.forEach(element => {
      if (this.logOn.userName== element.username)
        if (this.logOn.passWord == element.password) {
          this.logOn = {
            userName: element.username,
            passWord: element.password,
            fullname: element.fullname,
            email: element.email,
            gender: element.gender,
            birthday: element.birthday,
            schoolfee: element.schoolfee,
            marks: element.marks
          }
          this.show = true;
          localStorage.setItem('login',JSON.stringify(this.logOn))
        }

    });
  
  }

}
