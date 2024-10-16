import { Role } from "./enums";

// Base class for prompts and answers
export abstract class PromptBase {
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

// User prompt class
export class Prompt extends PromptBase {
  constructor(id: string, content: string) {
    super(id, 'user', content);
  }
}

// Assistant answer class
export class PromptAnswer extends PromptBase {
  promptId: string;

  constructor(id: string, promptId: string, content: string) {
    super(id, 'assistant', content);
    this.promptId = promptId;
  }
}

// Chat session class with prompts and answers
export class ChatSession {
  sessionId: string;
  title: string;
  prompts: Prompt[];
  promptAnswers: PromptAnswer[];
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  isCurrent: boolean = false;

  constructor(sessionId: string, title: string, userId: string) {
    this.sessionId = sessionId;
    this.title = title;
    this.prompts = [];
    this.promptAnswers = [];
    this.userId = userId;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Add a user prompt
  addPrompt(content: string): Prompt {
    const prompt = new Prompt(this.generateId(), content);
    this.prompts.push(prompt);
    this.updatedAt = new Date();
    return prompt;
  }

  // Add an assistant answer associated with a specific prompt
  addPromptAnswer(promptId: string, content: string): void {
    const answer = new PromptAnswer(this.generateId(), promptId, content);
    this.promptAnswers.push(answer);
    this.updatedAt = new Date();
  }

  // Generate a unique ID for prompts and answers
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export class Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;

  constructor(id: string, role: 'user' | 'assistant', content: string) {
    this.id = id;
    this.role = role;
    this.content = content;
  }
}
