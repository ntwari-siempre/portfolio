import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  @Input() title = '';
  @Input() description = '';
  @Input() image = '';
  @Input() github = '';
  @Input() demo = '';
}