import { Component, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  openMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
