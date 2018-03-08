import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {QuizService} from './quiz.service';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { QuestionSelectComponent } from './question-select/question-select.component';
import { TopicsComponent } from './topics/topics.component';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionSelectComponent,
    TopicsComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component:TopicsComponent},
      {path:'question/:topicname/:levelName' , component: QuestionSelectComponent}
    ])
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
