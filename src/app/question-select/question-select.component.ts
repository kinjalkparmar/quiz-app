import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {QuizService} from '../quiz.service';

@Component({
  selector: 'app-question-select',
  templateUrl: './question-select.component.html',
  styleUrls: ['./question-select.component.css']
})
export class QuestionSelectComponent implements OnInit {

  levelId:any;
  name:any;
  levelname:any;
  quiz:any;
  questions:any;
  beginButton=true;
  question:any;
  options:any;
  questionid:any;
  selected=0;
  answers=[];

  constructor(private route: ActivatedRoute, private _quiz: QuizService) { }

  ngOnInit() {

    this.route.params.subscribe((params: Params)=>{
      let levelName=params['levelName'];
      let name=params['topicname'];
      this.name=name;
      this.levelname=levelName; 
    })
    this._quiz.getQuiz()
      .subscribe(resData => this.quiz = resData);
  }

  startQuiz(){
    this.beginButton=false;
    if(this.levelname=="Easy" && this.name=="Science"){
      this.questions=this.quiz[0].Levels[0].questions;
    }
      else if(this.levelname=="Medium" && this.name=="Science"){
        this.questions=this.quiz[0].Levels[1].questions;
      }
      else if(this.levelname=="Hard" && this.name=="Science"){
        this.questions=this.quiz[0].Levels[2].questions;
      }
      else if(this.levelname=="Easy" && this.name=="Math"){
        this.questions=this.quiz[1].Levels[0].questions;
      }
      else if(this.levelname=="Medium" && this.name=="Math"){
        this.questions=this.quiz[1].Levels[1].questions;
      }
      else if(this.levelname=="Hard" && this.name=="Math"){
        this.questions=this.quiz[1].Levels[2].questions;
      }
      else{
        
      }

      this.firstQuestion();

  }

  firstQuestion(){
    this.question=this.questions[0];
    this.options=this.questions[0].options;
    this.questionid=this.questions[0].questionId;
    for(let i=0;i<this.questions.length;i++){
      this.answers.push(this.questions[i].answerId);
    }
  }
  nextQuestion(){
    if(this.selected<this.questions.length-1){
      this.selected++;
      this.question=this.questions[this.selected];
      this.options=this.questions[this.selected].options;
      this.questionid=this.questions[this.selected].questionId;
    
    }
    
  }
  prevQuestion(){
    if(this.selected>0){
      this.selected--;
      this.question=this.questions[this.selected];
      this.options=this.questions[this.selected].options;
      this.questionid=this.questions[this.selected].questionId;
    }
    
  }

}
