import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dog } from '../services/dog.service';

@Component({
  selector: 'app-dog-details-modal',
  imports: [],
  templateUrl: './dog-details-modal.component.html',
  styleUrl: './dog-details-modal.component.scss',
})
export class DogDetailsModalComponent {
  title = 'Dog Details';
  constructor(@Inject(MAT_DIALOG_DATA) public dog: Dog) {}
}
