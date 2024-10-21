import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfigService } from '../../../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class ChatbotApiService {
  readonly pythonApiEndpoint = 'http://localhost:5000/model';
  readonly pythonChatbotApiEndpoint = 'http://localhost:5000/chatbot';
  
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

  py_sendPromptAndGetPromptAnswer(question: string, user_groups: string[], project_name: string, model_name: string): Observable<any> {
    const requestBody = {
      question,
      user_groups,
      project_name,
      model_name
    };
    return this.http.post<any>(this.configService.promptUrl, requestBody);
  }

  py_sendPromptAnswerFeedback(prompt_answer_id: number, vote_type: string): Observable<any> {
    const requestBody = {
      prompt_answer_id,
      vote_type
    };
    return this.http.post<any>(this.configService.feedbackUrl, requestBody);
  }

  py_sendChatPromptAndGetChatPromptAnswer(prompt: string, model_name: string): Observable<any> {
    const requestBody = {
      prompt,
      model_name
    };

    return this.http.post<any>(this.pythonChatbotApiEndpoint + "chat", requestBody);
  }

  py_streamChatPromptUsingWebSocket(prompt: string, model_name: string): Observable<string> {
    const webSocketUrl = `ws://localhost:5000/chatbot/chat/stream`;
    const ws = new WebSocket(webSocketUrl);
    const responseSubject = new Subject<string>();

    // Open WebSocket and send prompt and model name
    ws.onopen = () => {
      ws.send(JSON.stringify({
        prompt: prompt,
        model_name: model_name
      }));
    };

    // Listen for incoming message chunks
    ws.onmessage = (event) => {
      responseSubject.next(event.data);
    };

    // Handle WebSocket closure
    ws.onclose = () => {
      responseSubject.complete();
    };

    // Handle WebSocket errors
    ws.onerror = (error) => {
      responseSubject.error('WebSocket error: ' + error);
    };

    return responseSubject.asObservable();
  }



  // -----------------------------------------------------
  // ASP Dot Net core Web API
  // -----------------------------------------------------

  dotNet_getAvailableModelNames(): Observable<any> {
    return this.http.get<any>(this.chatbotApiEndpoint + 'model_names');
  }

  dotNet_sendPromptAndGetPromptAnswer(question: string, user_groups: string[], project_name: string, model_name: string): Observable<any> {
    const requestBody = {
      question,
      user_groups,
      project_name,
      model_name
    };
    return this.http.post<any>(this.configService.promptUrl, requestBody);
  }

  dotNet_sendPromptAnswerFeedback(prompt_answer_id: number, vote_type: string): Observable<any> {
    const requestBody = {
      prompt_answer_id,
      vote_type
    };
    return this.http.post<any>(this.configService.feedbackUrl, requestBody);
  }
}