import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-thi-trac-nghiem',
  templateUrl: './thi-trac-nghiem.component.html',
  styleUrls: ['./thi-trac-nghiem.component.css']
})
export class ThiTracNghiemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }
  monhoc;
  ten;
  Quizs: any;
  Quiz: any;
  show = true;
  Subjects = [
    {
      "Id": "ADAV",
      "Name": "Lập trình Android nâng cao",
      "Logo": "ADAV.jpg"
    },
    {
      "Id": "ADBS",
      "Name": "Lập trình Android cơ bản",
      "Logo": "ADBS.jpg"
    },
    {
      "Id": "ADTE",
      "Name": "Kiểm thử và triển khai ứng dụng Android",
      "Logo": "ADTE.jpg"
    },
    {
      "Id": "ADUI",
      "Name": "Thiết kế giao diện trên Android",
      "Logo": "ADUI.jpg"
    },
    {
      "Id": "ASNE",
      "Name": "Lập trình ASP.NET",
      "Logo": "ASNE.png"
    },
    {
      "Id": "CLCO",
      "Name": "Điện toán đám mây",
      "Logo": "CLCO.jpg"
    },
    {
      "Id": "DBAV",
      "Name": "SQL Server",
      "Logo": "DBAV.png"
    },
    {
      "Id": "DBBS",
      "Name": "Cơ sở dữ liệu",
      "Logo": "DBBS.png"
    },
    {
      "Id": "GAME",
      "Name": "Lập trình game 2D",
      "Logo": "GAME.png"
    },
    {
      "Id": "HTCS",
      "Name": "HTML5 và CSS3",
      "Logo": "HTCS.jpg"
    },
    {
      "Id": "INMA",
      "Name": "Internet Marketing",
      "Logo": "INMA.jpg"
    },
    {
      "Id": "JAAV",
      "Name": "Lập trình Java nâng cao",
      "Logo": "JAAV.png"
    },
    {
      "Id": "JABS",
      "Name": "Lập trình hướng đối tượng với Java",
      "Logo": "JABS.png"
    },
    {
      "Id": "JSPR",
      "Name": "Lập trình JavaScript",
      "Logo": "JSPR.png"
    },
    {
      "Id": "LAYO",
      "Name": "Thiết kế layout",
      "Logo": "LAYO.jpg"
    },
    {
      "Id": "MOWE",
      "Name": "Thiết kế web cho điện thoại di động",
      "Logo": "MOWE.png"
    },
    {
      "Id": "PHPP",
      "Name": "Lập trình PHP",
      "Logo": "PHPP.png"
    },
    {
      "Id": "PMAG",
      "Name": "Quản lý dự án với Agile",
      "Logo": "PMAG.jpg"
    },
    {
      "Id": "VBPR",
      "Name": "Lập trình VB.NET",
      "Logo": "VBPR.png"
    },
    {
      "Id": "WEBU",
      "Name": "Xây dựng trang web",
      "Logo": "WEBU.jpg"
    }
  ]
  myAnswers = [];
  selected = 0;
  marks = 0;
  url;
  numberQuiz: number;
  curPage = 1;
  finish = false;

  showTime = true;
	counter = 0;
	setSecond = 3600;
	interval = null;
	onShowPage = false;
  resultPoint = false;
  


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.monhoc = params.get('ThiTracNghiem');
      this.url = './assets/Quizs/' + this.monhoc + '.js';
      this.Subjects.forEach(element => {
        if (this.monhoc == element.Id)
          return this.ten = element.Name
      });
      this.getAllQuizs().subscribe(data => {
        this.Quizs = data;
        this.showQuiz(this.Quizs)
        this.numberQuiz = this.Quizs.length
      })
    });

    this.resetTime()
    this.startTime()
  }
  getAllQuizs() {
    return this.http.get(this.url);
  }
  showQuiz(Quizs) {
    this.Quiz = Quizs[this.curPage - 1].Answers;
  }

  goNext() {

    if (this.curPage < this.Quizs.length) {

      this.curPage ++;
    }
    this.showQuiz(this.Quizs)
    this.a()

  }
  goFirst() {
    this.curPage = 1    
    this.showQuiz(this.Quizs)
    this.a()

  }
  goLast() {
    this.curPage = this.Quizs.length; 
    this.showQuiz(this.Quizs)
    this.a()

  }
  goPre() {

    if (this.curPage > 1) {

      this.curPage--;
    }
    this.showQuiz(this.Quizs)
  }

  point() {
      this.show = false;
    for (let i = 0; i < this.Quizs.length; i++) {
      if (this.myAnswers[i] == this.Quizs[i].AnswerId)
        this.marks += 1
    }
  }
  a() {
    if (this.curPage == this.numberQuiz)
      this.finish = true;
      else
      this.finish = false;
  }


  convertTime(s) {
		var timer = document.getElementById('timer');
		var min = Math.floor(s / 60);
		var sec = s % 60;
		var minute = (min < 10) ? "0" + min : min;
		var sencond = (sec < 10) ? "0" + sec : sec;
		return minute + "'" + ':' + sencond;
	}

	startTime() {
		this.onShowPage = true;
		clearInterval(this.interval);
		var timer = document.getElementById('timer');
		timer.innerHTML = this.convertTime(this.setSecond - this.counter);
		this.interval = setInterval(() => {
			this.counter++;
			timer.innerHTML = this.convertTime(this.setSecond - this.counter);
			if ((this.setSecond - this.counter) <= 0) {
				clearInterval(this.interval);
				this.setSecond = 2700;
				this.counter = 0;
				timer.innerHTML = "Hết Thời Gian Làm Bài";
			}
		}, 1000);
	}

	endTime() {
		this.resultPoint = false;
		clearInterval(this.interval);
		document.getElementById('timer-2').innerHTML = this.convertTime(this.counter);
		document.getElementById('result').style.display = 'block';
		document.getElementById('training').style.display = 'none';
	}

	resetTime() {
		clearInterval(this.interval);
		document.getElementById('timer').innerHTML = "60':00";
		this.setSecond = 3600;
		this.counter = 0;
		// this.answers = [];
	}


}


