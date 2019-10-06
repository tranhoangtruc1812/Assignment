import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-thi-trac-nghiem',
  templateUrl: './thi-trac-nghiem.component.html',
  styleUrls: ['./thi-trac-nghiem.component.css']
})
export class ThiTracNghiemComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  monhoc;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.monhoc = +params.get('ThiTracNghiem');
    });
  }

}
