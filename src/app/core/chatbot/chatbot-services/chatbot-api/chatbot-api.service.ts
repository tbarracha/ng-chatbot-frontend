import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ChatbotApiService {
  readonly pythonApiEndpoint = 'http://localhost:5000/model';
  
  readonly apiEndpoint = 'http://localhost:5258/api/'
  readonly chatbotApiEndpoint = 'http://localhost:5258/api/chatbot/'

  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService
  ) {}


  // -----------------------------------------------------
  // Python Quart & DjangoORM API
  // -----------------------------------------------------


  /*
  {
    "prompt": {
        "content": "minsait",
        "created_at": "2024-10-17T14:50:56.064415+00:00",
        "id": 40,
        "role": "user",
        "updated_at": "2024-10-17T14:50:56.064415+00:00"
    },
    "prompt_answer": {
        "content": "Infelizmente, não há informação suficiente no contexto para responder à pergunta \"Minsait\". Lamento, mas não tenho a informação necessária para responder a essa pergunta.",
        "created_at": "2024-10-17T14:51:59.945640+00:00",
        "id": 39,
        "processing_time": 54.37232160568237,
        "prompt_id": 40,
        "role": "assistant",
        "updated_at": "2024-10-17T14:51:59.946638+00:00"
    }
  }
  */

  sendPromptAndGetPromptAnswerPythonAPI(question: string, user_groups: string[], project_name: string, model_name: string): Observable<any> {
    const requestBody = {
      question,
      user_groups,
      project_name,
      model_name
    };
    return this.http.post<any>(this.configService.promptUrl, requestBody);
  }

  sendPromptAnswerFeedbackPythonAPI(prompt_answer_id: number, vote_type: string): Observable<any> {
    const requestBody = {
      prompt_answer_id,
      vote_type
    };
    return this.http.post<any>(this.configService.feedbackUrl, requestBody);
  }



  // -----------------------------------------------------
  // ASP Dot Net core Web API
  // -----------------------------------------------------

  getAvailableModelNamesDotNetAPI(): Observable<any> {
    return this.http.get<any>(this.chatbotApiEndpoint + 'model_names');
  }

  sendPromptAndGetPromptAnswerDotNetAPI(question: string, user_groups: string[], project_name: string, model_name: string): Observable<any> {
    const requestBody = {
      question,
      user_groups,
      project_name,
      model_name
    };
    return this.http.post<any>(this.configService.promptUrl, requestBody);
  }

  sendPromptAnswerFeedbackDotNetAPI(prompt_answer_id: number, vote_type: string): Observable<any> {
    const requestBody = {
      prompt_answer_id,
      vote_type
    };
    return this.http.post<any>(this.configService.feedbackUrl, requestBody);
  }
}
