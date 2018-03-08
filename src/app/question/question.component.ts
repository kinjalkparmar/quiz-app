import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() public options;
  @Input() public questionid;
  @Input() public question;
  @Input() public answers;
  optionselected=[0,0,0,0,0];
  submit=false;
  score=0;
  showResult=false;
  constructor() { }

  ngOnInit() {
  }

 
  selectedOption(option,i){
   // console.log(i);
    let startIndex=this.questionid-1;
    let number_of_elements_to_remove=1;
    let removed_elements= this.optionselected.splice(startIndex,number_of_elements_to_remove,option.optionId);
    if(startIndex>=4){
      this.submit=true;
    }

  }

  isSelected(){
    /* if(this.questionid==1){
      return this.optionselected[0];
    }
    else if(this.questionid==2){
      return this.optionselected[1];
    }
    else if(this.questionid==3){
      return this.optionselected[2];
    }
    else if(this.questionid==4){
      return this.optionselected[3];
    }
    else if(this.questionid==5){
      return this.optionselected[4];
    } */
    let k=this.questionid;
    return this.optionselected[k-1];
  }

  checkAnswers(){
    for(let i=0;i<=this.optionselected.length;i++){
      if(this.optionselected[i]==this.answers[i]){
        this.score=this.score+1;
      }

    }
    this.showResult=true;
  }


}
