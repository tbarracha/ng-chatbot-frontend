import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chatbot-input-attachment',
  standalone: true,
  templateUrl: './chatbot-input-attachment.component.html',
  styleUrls: ['./chatbot-input-attachment.component.scss']
})
export class ChatbotInputAttachmentComponent {
  @Input() file!: File;
  @Output() remove = new EventEmitter<void>();

  isFileTypeImage() {
    return this.file.type.startsWith('image/');
  }

  isFileTypeVideo() {
    return this.file.type.startsWith('video/');
  }

  isFileTypeAudio() {
    return this.file.type.startsWith('audio/');
  }

  isFileTypePDF() {
    return this.file.type === 'application/pdf';
  }

  isFileTypeText() {
    return this.file.type.startsWith('text/');
  }

  isFileTypeDocument() {
    return this.file.type === 'application/msword' ||
      this.file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
      this.file.type === 'application/vnd.oasis.opendocument.text' ||
      this.file.type === 'application/rtf';
  }

  isFileTypePresentation() {
    return this.file.type === 'application/vnd.ms-powerpoint' ||
      this.file.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation' ||
      this.file.type === 'application/vnd.oasis.opendocument.presentation';
  }

  isFileTypeSpreadsheet() {
    return this.file.type === 'text/csv' ||
      this.file.type === 'application/vnd.ms-excel' ||
      this.file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
      this.file.type === 'application/vnd.oasis.opendocument.spreadsheet';
  }

  isFileTypeCode() {
    const codeFileExtensions = [
      'application/javascript', 'application/x-javascript', 'text/javascript',   // JavaScript
      'application/json', 'text/json',                                           // JSON
      'application/x-python-code', 'text/x-python', 'text/x-script.python',      // Python
      'text/x-java-source', 'text/x-java',                                       // Java
      'text/x-csrc', 'text/x-chdr',                                              // C/C++
      'application/x-httpd-php', 'text/x-php',                                   // PHP
      'application/x-sh', 'text/x-shellscript',                                  // Shell scripts
      'text/x-csharp',                                                           // C#
      'text/html',                                                               // HTML
      'text/css',                                                                // CSS
      'text/x-ruby',                                                             // Ruby
      'text/x-go',                                                               // Go
      'text/x-perl',                                                             // Perl
      'text/x-sql',                                                              // SQL
      'text/x-markdown',                                                         // Markdown
      'text/x-yaml', 'application/x-yaml',                                       // YAML
      'application/xml', 'text/xml',                                             // XML
      'application/vnd.dart',                                                    // Dart
      'text/x-typescript',                                                       // TypeScript
      'text/x-kotlin',                                                           // Kotlin
      'text/x-swift',                                                            // Swift
    ];
  
    return codeFileExtensions.includes(this.file.type);
  }
  

  removeFile(): void {
    this.remove.emit();
  }
}
