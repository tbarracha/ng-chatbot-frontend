import { Component, Input, input } from '@angular/core';
import { ChatbotMessageComponent } from "../chatbot-message/chatbot-message.component";

@Component({
  selector: 'app-chatbot-history',
  standalone: true,
  imports: [ChatbotMessageComponent],
  templateUrl: './chatbot-history.component.html',
  styleUrl: './chatbot-history.component.scss'
})
export class ChatbotHistoryComponent {
  @Input() messages = [
    { role: 'user', content: 'Hello, chatbot!' },
    { role: 'assistant', content: 'Hello! How can I assist you today?' },
    { role: 'user', content: 'What’s the weather like?' },
    { role: 'assistant', content: 'It’s sunny and 75°F right now.' },
    { 
      role: 'user', 
      content: 'Is it possible for a strawberry to be a banana? I’ve always wondered about this.' 
    },
    { 
      role: 'assistant', 
      content: 'While it may seem like an odd concept, if we delve into the world of possibilities and imagination, there are interesting ways to think about how a strawberry could be a banana. For one, if we consider genetic modification, scientists could theoretically manipulate the genes of a strawberry to grow into a shape that resembles a banana. By altering the genetic structure, they could encourage a growth pattern and texture that is more banana-like, even if the fundamental nature of the fruit remains that of a strawberry. Another perspective could be symbolic or artistic: if someone were to sculpt or mold a strawberry puree into the shape of a banana, in that context, one could argue that the strawberry has, in a sense, "become" a banana. Additionally, there’s the idea of sensory perception. If a strawberry were flavored with banana essence and altered in texture, some people could experience it as tasting like a banana, thus blurring the lines between the two fruits.'
      + '\n\nAnother intriguing angle is the philosophical approach. If you think about it, at the molecular level, both strawberries and bananas are composed of the same basic elements – carbon, hydrogen, and oxygen, among others. These elements are just arranged differently in each fruit. If you could somehow reconfigure the molecular arrangement of a strawberry to mimic that of a banana, you could theoretically "transform" one into the other. This wouldn’t be a straightforward process and would require a deep understanding of molecular chemistry, but it does spark interesting thoughts about the nature of identity and transformation in the natural world. Moreover, from a more abstract or metaphysical viewpoint, one could argue that a strawberry could "become" a banana if we choose to redefine what we mean by "banana." If a society decided that the characteristics of a banana could also include a strawberry’s qualities, then in that context, a strawberry could indeed be considered a banana. It’s all about perspective and how we choose to define the world around us.'
    }
  ];
  
}
