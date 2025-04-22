import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconService } from './services/icon.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-tourism';

  iconsService = inject(IconService);

  ngOnInit(): void {
    this.iconsService.registerIcons();
  }
}
