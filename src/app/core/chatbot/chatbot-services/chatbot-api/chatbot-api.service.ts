import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ChatbotApiService {
  readonly apiUrl = 'http://localhost:5000/model';
  
  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService
  ) {}

  sendPromptAndGetPromptAnswer(question: string, user_groups: string[], project_name: string, model_name: string): Observable<any> {
    const requestBody = {
      question,
      user_groups,
      project_name,
      model_name
    };
    return this.http.post<any>(this.configService.promptUrl, requestBody);
  }

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

  sendPromptAnswerFeedback(prompt_answer_id: number, vote_type: string): Observable<any> {
    const requestBody = {
      prompt_answer_id,
      vote_type
    };
    return this.http.post<any>(this.configService.feedbackUrl, requestBody);
  }
}
