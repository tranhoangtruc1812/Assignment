import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap-nhat-tk',
  templateUrl: './cap-nhat-tk.component.html',
  styleUrls: ['./cap-nhat-tk.component.css']
})
export class CapNhatTKComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('login'))
  student = JSON.parse(localStorage.getItem('user'))
  constructor() { }

  ngOnInit() {
  }
  changes(){
    localStorage.setItem('login',JSON.stringify(this.user))
    for(var i = 0; i < this.student.length; i++) {
      if(this.student[i].username === this.user.userName) {
        this.student[i] = this.user;
      }
      console.log(this.student[i].username);
    }
    console.log(this.user);
    console.log(this.student);
    localStorage.setItem('user',JSON.stringify(this.student))
  }

}
