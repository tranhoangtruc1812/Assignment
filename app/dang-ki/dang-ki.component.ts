import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-dang-ki',
  templateUrl: './dang-ki.component.html',
  styleUrls: ['./dang-ki.component.css']
})
export class DangKiComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
dangki
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dangki = +params.get('DangKi');
    });
  }

}
