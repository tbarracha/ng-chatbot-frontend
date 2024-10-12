import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isResizable: boolean = false;

  @Input() minWidth: number = 200;
  @Input() maxWidth: number = 400;
  
  @ViewChild('sidebar', { static: false }) sidebarRef!: ElementRef;
  @ViewChild('resizer', { static: false }) resizerRef!: ElementRef;

  ngAfterViewInit() {
    this.settupSidebar();
    window.addEventListener('resize', this.settupSidebar.bind(this));
  }

  private settupSidebar() {
    const sidebar = this.sidebarRef.nativeElement;
    const resizer = this.resizerRef.nativeElement;
    const parent = sidebar.parentElement.parentElement;

    this.minWidth = parent.clientWidth * .25;
    this.maxWidth = parent.clientWidth * .5;

    if (!sidebar) {
      console.error('Sidebar element not found');
    }
    if (!resizer) {
      console.error('Resizer element not found');
    }

    sidebar.style.width = `${this.minWidth}px`;

    if (this.isResizable) {
      resizer.addEventListener('mousedown', (e: MouseEvent) => {
        e.preventDefault();
      
        setResizeStyles(true);

        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', stopResize);
      });
    }

    const resize = (e: MouseEvent) => {
      const newWidth = e.clientX;

      if (newWidth < this.minWidth || newWidth > this.maxWidth) {
        return;
      }

      sidebar.style.width = `${newWidth}px`;
    }

    function stopResize() {
      setResizeStyles(false);
      
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
    }

    function setResizeStyles(isResizing: boolean) {
      if (isResizing) {
        resizer.classList.remove('opacity-0');
        resizer.classList.add('opacity-100');
        document.body.style.cursor = 'col-resize';

      } else {
        resizer.classList.remove('opacity-100');
        resizer.classList.add('opacity-0');
        document.body.style.cursor = '';
      }
    }
  }
}
