import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfigService } from '../../../config/config.service';
import { ChatbotEventService } from '../chatbot-events/chatbot-event.service';
import { ChatbotBrainService } from '../chatbot-brain/chatbot-brain.service';

@Injectable({
  providedIn: 'root'
})
export class ChatbotApiService {
  private webSocket: WebSocket | null = null;  // WebSocket instance
  private webSocketSubject: Subject<string> | null = null;  // Subject to stream responses

  readonly pythonApiEndpoint = 'http://localhost:5000/model';
  readonly pythonChatbotApiEndpoint = 'http://localhost:5000/chatbot';
  
  readonly apiEndpoint = 'http://localhost:5258/api/'
  readonly chatbotApiEndpoint = 'http://localhost:5258/api/chatbot/'

  connectionName: string = 'python';

  constructor(
    private readonly http: HttpClient,
    private readonly configService: ConfigService,
    private readonly chatbotEventService: ChatbotEventService
  ) {
    chatbotEventService.onChatbotApiConnectionNameChanged.subscribe((connectionName) => {
      this.connectionName = configService.formatConnectionName(connectionName);
    });
  }



  // -----------------------------------------------------
  // WebSocket Management
  // -----------------------------------------------------

  private createWebSocket(): Subject<string> {
    if (this.webSocket) {
      return this.webSocketSubject!;
    }

    const webSocketUrl = `ws://localhost:5000/chatbot/chat/stream`;
    this.webSocket = new WebSocket(webSocketUrl);
    this.webSocketSubject = new Subject<string>();

    this.webSocket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    this.webSocket.onmessage = (event) => {
      this.webSocketSubject!.next(event.data);  // Stream WebSocket responses
    };

    this.webSocket.onclose = () => {
      console.log('WebSocket connection closed');
      this.webSocketSubject!.complete();
      this.webSocket = null;  // Clean up
    };

    this.webSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
      this.webSocketSubject!.error('WebSocket error: ' + error);
    };

    return this.webSocketSubject!;
  }

  closeWebSocket() {
    if (this.webSocket) {
      this.webSocket.close();
      this.webSocket = null;
      this.webSocketSubject = null;
    }
  }


  // -----------------------------------------------------
  // API Connection by Connection Name
  // -----------------------------------------------------

  getAvailableModelNames(): Observable<any> {
    return this.http.get<any>(this.configService.getModelsUrlByConnectionName(this.connectionName));
  }

  sendChatPromptAndGetChatPromptAnswer(prompt: string, model_name: string): Observable<any> {
    if (ChatbotBrainService.chatbotSettings.prePrompt != null && ChatbotBrainService.chatbotSettings.prePrompt != '') {
      prompt = ChatbotBrainService.chatbotSettings.prePrompt + '\n' + prompt;
    }

    if (ChatbotBrainService.chatbotSettings.stream) {
      return this.ws_sendChatModelAndGetChatPromptAnswer(prompt, model_name);
    } else {
      const requestBody = {
        prompt,
        model_name
      };

      const url = this.configService.getChatUrlByConnectionName(this.connectionName);
      console.log('Sending prompt:', requestBody, 'API URL:', url);

      return this.http.post<any>(url, requestBody);
    }
  }

  // webSocket
  ws_sendChatModelAndGetChatPromptAnswer(prompt: string, model_name: string): Observable<string> {
    const webSocketSubject = this.createWebSocket();

    if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
      const requestBody = JSON.stringify({ prompt, model_name });
      this.webSocket.send(requestBody);  // Send the chat prompt over WebSocket
    }

    return webSocketSubject.asObservable();  // Return the response observable
  }

  sendPromptAnswerFeedback(prompt_answer_id: number, vote_type: string): Observable<any> {
    const requestBody = {
      prompt_answer_id,
      vote_type
    };
    return this.http.post<any>(this.configService.getFeedbackUrlByConnectionName(this.connectionName), requestBody);
  }



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
    return this.http.post<any>(this.configService.getChatUrlByConnectionName("python"), requestBody);
  }

  private py_sendPromptAnswerFeedback(prompt_answer_id: number, vote_type: string): Observable<any> {
    const requestBody = {
      prompt_answer_id,
      vote_type
    };
    return this.http.post<any>(this.configService.getFeedbackUrlByConnectionName("python"), requestBody);
  }

  private py_sendChatPromptAndGetChatPromptAnswer(prompt: string, model_name: string): Observable<any> {
    const requestBody = {
      prompt,
      model_name
    };

    return this.http.post<any>(this.configService.getChatUrlByConnectionName("python"), requestBody);
  }

  private py_streamChatPromptUsingWebSocket(prompt: string, model_name: string): Observable<string> {
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

  private dotNet_sendPromptAndGetPromptAnswer(question: string, user_groups: string[], project_name: string, model_name: string): Observable<any> {
    const requestBody = {
      question,
      user_groups,
      project_name,
      model_name
    };
    return this.http.post<any>(this.configService.getChatUrlByConnectionName("dotnet"), requestBody);
  }

  private dotNet_sendPromptAnswerFeedback(prompt_answer_id: number, vote_type: string): Observable<any> {
    const requestBody = {
      prompt_answer_id,
      vote_type
    };
    return this.http.post<any>(this.configService.getFeedbackUrlByConnectionName("dotnet"), requestBody);
  }
}
