import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class QuizService {

    private _url: string="../assets/quizDetails.json";

  constructor(private _http: Http) { }

  getQuiz(){

    return this._http.get(this._url)
    .map((response: Response)=> response.json());

  }

  getQuestion(id){
      
  }

}
