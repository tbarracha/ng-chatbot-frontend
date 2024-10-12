import { Component, ElementRef, Input, ViewChild, HostListener, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit, OnDestroy {
  @Input() isResizable: boolean = false;
  @Input() minWidth: number = 200;
  @Input() maxWidth: number = 400;
  
  @ViewChild('sidebar', { static: false }) sidebarRef!: ElementRef;
  @ViewChild('resizer', { static: false }) resizerRef!: ElementRef;
  @ViewChild('resizerContainer', { static: false }) resizerContainerRef!: ElementRef;

  private isResizing: boolean = false;
  private resizeHandlerBound: any;
  protected isSidebarOpen: boolean = true; // To track open/closed state

  ngAfterViewInit() {
    this.initializeSidebar();
    window.addEventListener('resize', this.updateSidebarSizeLimits.bind(this)); // Update limits on window resize
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.updateSidebarSizeLimits.bind(this));
    if (this.isResizable) {
      document.removeEventListener('mousemove', this.resizeHandlerBound);
      document.removeEventListener('mouseup', this.stopResize);
    }
  }

  getIsSidebarOpen() {
    return this.isSidebarOpen;
  }

  private initializeSidebar() {
    const sidebar = this.sidebarRef.nativeElement;
    const resizer = this.resizerRef.nativeElement;

    this.updateSidebarSizeLimits(); 

    // Set initial width
    sidebar.style.width = `${this.minWidth}px`;

    if (this.isResizable) {
      resizer.addEventListener('mousedown', (e: MouseEvent) => {
        e.preventDefault();
        this.startResizing();
      });
    }
  }

  private updateSidebarSizeLimits() {
    const sidebar = this.sidebarRef.nativeElement;
    const parent = sidebar.parentElement.parentElement;

    // Set dynamic limits based on the parent element
    this.minWidth = parent.clientWidth * 0.25;
    this.maxWidth = parent.clientWidth * 0.5;

    console.log(`Updated: minWidth: ${this.minWidth}, maxWidth: ${this.maxWidth}`);
  }

  private startResizing() {
    const sidebar = this.sidebarRef.nativeElement;
    this.isResizing = true;

    // Remove transition during resizing
    sidebar.style.transition = '';

    document.body.style.cursor = 'col-resize';

    // Bind resize events
    this.resizeHandlerBound = this.resize.bind(this);
    document.addEventListener('mousemove', this.resizeHandlerBound);
    document.addEventListener('mouseup', this.stopResize.bind(this));

    this.setResizerVisibility(true);
  }

  private resize(e: MouseEvent) {
    if (!this.isResizing) return;

    const sidebar = this.sidebarRef.nativeElement;
    const newWidth = e.clientX;

    // Update the width within limits
    if (newWidth >= this.minWidth && newWidth <= this.maxWidth) {
      sidebar.style.width = `${newWidth}px`;
    }
  }

  private stopResize() {
    this.isResizing = false;
    const sidebar = this.sidebarRef.nativeElement;

    document.body.style.cursor = '';

    // Re-add the transition for toggling after resizing is done
    sidebar.style.transition = 'width 0.3s ease';

    // Remove event listeners
    document.removeEventListener('mousemove', this.resizeHandlerBound);
    document.removeEventListener('mouseup', this.stopResize.bind(this));

    this.setResizerVisibility(false);
  }

  private setResizerVisibility(isVisible: boolean) {
    const resizer = this.resizerRef.nativeElement;
    if (isVisible) {
      resizer.classList.remove('opacity-0');
      resizer.classList.add('opacity-100');
    } else {
      resizer.classList.remove('opacity-100');
      resizer.classList.add('opacity-0');
    }
  }

  toggleSidebar() {
    const sidebar = this.sidebarRef.nativeElement;
    const resizerContainer = this.resizerContainerRef.nativeElement;
    const resizer = this.resizerRef.nativeElement;

    sidebar.style.transition = 'width 0.3s ease';

    if (this.isSidebarOpen) {
      // Close sidebar
      sidebar.style.width = '0px';

      resizerContainer.classList.remove('w-4');
      resizer.classList.remove('w-1');
    } else {
      // Open sidebar
      sidebar.style.width = `${this.minWidth}px`;

      resizerContainer.classList.add('w-4');
      resizer.classList.add('w-1');
    }

    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
