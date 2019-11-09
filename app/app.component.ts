import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {StudentsServiceService} from './students-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  constructor(private http:HttpClient, private service: StudentsServiceService){  }
  url = './assets/Students.js'
  students: any;
  show = false;
  user =[];
  selectedStu={
    username: '',
    password: '',
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    schoolfee: "",
    marks: ""
  };
  subject;
ngOnInit(){
 this.getStudents().subscribe(data =>{
  this.students = data;
  this.user = this.students
  localStorage.setItem('user',JSON.stringify(this.user));
  localStorage.setItem('login',JSON.stringify(this.selectedStu));
  this.check();
 })
 this.http.get('./assets/Subjects.js').subscribe(data=>{
   this.subject = data;
  
 })
}
getStudents() {
  return this.http.get(this.url)
}
logOut(){
  localStorage.removeItem('login')
}
check(){
  this.selectedStu =JSON.parse(localStorage.getItem('login'))
  if(  this.selectedStu.username != '')
  this.show = true;
  else 
  this.show = false
}
dangnhap(){
  var user = JSON.parse(localStorage.getItem('login'))
  if(user.username === "")
  {
    alert('Vui lòng đăng nhập tài khoản')
    location.pathname = '/Dangnhap'
  }
  else
  { alert('đổi môn thi');
    location.pathname
    location.reload}
  location.reload
}

}
