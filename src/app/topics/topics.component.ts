import { Component, OnInit } from '@angular/core';
import {QuizService} from '../quiz.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  quiz = [];
  level: any;
  topicName: any;
  levelName: any;

  constructor(private _quiz: QuizService, private router: Router) { }

  ngOnInit() {
     this._quiz.getQuiz()
    .subscribe(resData => this.quiz = resData) 

    console.log(this.quiz);
  }

  call(name, levelname){
    this.topicName= name;
    this.levelName=levelname;
    this.router.navigate(['question', this.topicName,this.levelName])
  }
 
  

}
