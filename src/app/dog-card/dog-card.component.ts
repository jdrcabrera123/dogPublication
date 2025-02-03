import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DogDetailsModalComponent } from '../dog-details-modal/dog-details-modal.component';
import { Dog } from '../services/dog.service';

@Component({
  selector: 'app-dog-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './dog-card.component.html',
  styleUrl: './dog-card.component.scss',
})
export class DogCardComponent {
  @Input() dog!: Dog;

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(DogDetailsModalComponent, {
      data: this.dog,
    });
  }
}
