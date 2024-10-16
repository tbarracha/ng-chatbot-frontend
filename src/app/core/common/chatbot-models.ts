import { Role } from "./enums";

export class ChatMessage {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
  
    constructor(id: string, role: 'user' | 'assistant', content: string) {
      this.id = id;
      this.role = role;
      this.content = content;
      this.timestamp = new Date();
    }
  }
  
  export class Prompt extends ChatMessage {
  }
  
  export class PromptAnswer extends ChatMessage {
    promptId: string;
  
    constructor(id: string, promptId: string, content: string) {
      super(id, 'assistant', content);

      this.promptId = promptId;
    }
  }
  
  export class ChatSession {
    sessionId: string;
    title: string;
    messages: ChatMessage[];
    prompts: Prompt[];
    promptAnswers: PromptAnswer[];
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    isCurrent: boolean = false;
  
    constructor(sessionId: string, title: string, userId: string) {
      this.sessionId = sessionId;
      this.title = title;
      this.messages = [];
      this.prompts = [];
      this.promptAnswers = [];
      this.userId = userId;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  
    addUserMessage(content: string): void {
      const message = new ChatMessage(this.generateId(), 'user', content);
      this.messages.push(message);
      this.updatedAt = new Date();
    }
  
    addAssistantMessage(content: string): void {
      const message = new ChatMessage(this.generateId(), 'assistant', content);
      this.messages.push(message);
      this.updatedAt = new Date();
    }
  
    addPrompt(content: string): Prompt {
      const prompt = new Prompt(this.generateId(), Role.User, content);
      this.prompts.push(prompt);
      this.addUserMessage(content);
      this.updatedAt = new Date();
      return prompt;
    }
  
    addPromptAnswer(promptId: string, content: string): void {
      const answer = new PromptAnswer(this.generateId(), promptId, content);
      this.promptAnswers.push(answer);
      this.addAssistantMessage(content);
      this.updatedAt = new Date();
    }
  
    private generateId(): string {
      return Math.random().toString(36).substr(2, 9);
    }
  }
  