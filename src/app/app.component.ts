import { Component, OnInit } from '@angular/core';
import { DogCardComponent } from './dog-card/dog-card.component';
import { Dog, DogService } from './services/dog.service';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [DogCardComponent, CommonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) {}

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data) => {
      this.dogs = data;
    });
  }
}
