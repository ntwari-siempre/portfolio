import { Component, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  menuOpen = false;
  isMobile = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {

    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768;
    }

  }

  @HostListener('window:resize')
  onResize() {

    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768;
    }

  }

}