import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../config/config.service';

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

  sendPromptAnswerFeedback(prompt_answer_id: number, vote_type: string): Observable<any> {
    const requestBody = {
      prompt_answer_id,
      vote_type
    };
    return this.http.post<any>(this.configService.feedbackUrl, requestBody);
  }
}
