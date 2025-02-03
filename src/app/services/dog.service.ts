import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  combineLatest,
  concatMap,
  forkJoin,
  map,
  Observable,
  of,
  switchMap,
  toArray,
} from 'rxjs';

export interface Dog {
  image: string;
  name: string;
  description: string;
  moduleDescription: string;
}

@Injectable({
  providedIn: 'root',
})
export class DogService {
  private dogImageUrl = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) {}

  getRandomDogImages(count: number): Observable<string[]> {
    return this.http
      .get<{ message: string[] }>(`${this.dogImageUrl}/${count}`)
      .pipe(
        map((response) => response.message) // Extract the array of image URLs
      );
  }

  getDogs(): Observable<Dog[]> {
    // Mock data for dogs (names and descriptions)

    const dogs: Dog[] = [
      {
        name: 'Buddy',
        description: 'A friendly golden retriever.',
        moduleDescription:
          'Buddy loves playing fetch and is great with kids. He has a shiny golden coat and a wagging tail that never stops!',
        image: '',
      },
      {
        name: 'Max',
        description: 'A playful beagle.',
        moduleDescription:
          'Max is always sniffing around and exploring. He has a keen sense of smell and loves chasing squirrels in the park.',
        image: '',
      },
      {
        name: 'Bella',
        description: 'A smart poodle.',
        moduleDescription:
          'Bella is very intelligent and loves learning new tricks. She has curly fur and enjoys being the center of attention.',
        image: '',
      },
      {
        name: 'Charlie',
        description: 'A loyal german shepherd.',
        moduleDescription:
          'Charlie is brave and protective. He makes a great guard dog and is always ready to play with his favorite ball.',
        image: '',
      },
      {
        name: 'Lucy',
        description: 'An energetic dalmatian.',
        moduleDescription:
          'Lucy is full of energy and loves running around. She has unique black spots and is always ready for an adventure.',
        image: '',
      },
      {
        name: 'Cooper',
        description: 'A curious labrador.',
        moduleDescription:
          'Cooper is very curious and loves exploring new places. He is friendly, loves water, and enjoys playing with other dogs.',
        image: '',
      },
      {
        name: 'Daisy',
        description: 'A gentle bulldog.',
        moduleDescription:
          'Daisy is calm and loves cuddling. She has a wrinkly face and a big heart, making her a great companion.',
        image: '',
      },
      {
        name: 'Rocky',
        description: 'A strong rottweiler.',
        moduleDescription:
          'Rocky is strong and confident. He is very loyal to his family and loves going on long walks.',
        image: '',
      },
      {
        name: 'Molly',
        description: 'A sweet shih tzu.',
        moduleDescription:
          'Molly is small and sweet. She loves being pampered and enjoys lounging on soft pillows.',
        image: '',
      },
      {
        name: 'Bear',
        description: 'A fluffy husky.',
        moduleDescription:
          'Bear has thick fur and loves cold weather. He is very playful and has striking blue eyes.',
        image: '',
      },
      {
        name: 'Lola',
        description: 'A tiny chihuahua.',
        moduleDescription:
          'Lola is small but has a big personality. She loves being carried around and is very protective of her family.',
        image: '',
      },
      {
        name: 'Duke',
        description: 'A brave doberman.',
        moduleDescription:
          'Duke is brave and alert. He is very smart and loves learning new commands. He is also very loyal to his family.',
        image: '',
      },
      {
        name: 'Sadie',
        description: 'A loving boxer.',
        moduleDescription:
          'Sadie is full of love and energy. She loves playing with kids and is always ready for a game of tug-of-war.',
        image: '',
      },
      {
        name: 'Bailey',
        description: 'A cheerful cocker spaniel.',
        moduleDescription:
          'Bailey is cheerful and loves being around people. She has long, silky ears and enjoys going for walks in the park.',
        image: '',
      },
      {
        name: 'Zoe',
        description: 'A mischievous dachshund.',
        moduleDescription:
          'Zoe is small but full of mischief. She loves digging and exploring, and her long body makes her very unique.',
        image: '',
      },
      {
        name: 'Toby',
        description: 'A friendly collie.',
        moduleDescription:
          'Toby is very friendly and loves herding. He has a beautiful coat and enjoys spending time with his family.',
        image: '',
      },
      {
        name: 'Roxy',
        description: 'A spirited pitbull.',
        moduleDescription:
          'Roxy is full of spirit and loves playing. She is very strong but also very gentle with her family.',
        image: '',
      },
      {
        name: 'Jack',
        description: 'A smart australian shepherd.',
        moduleDescription:
          'Jack is very smart and loves learning new tricks. He has a lot of energy and enjoys running and playing outdoors.',
        image: '',
      },
      {
        name: 'Maggie',
        description: 'A calm great dane.',
        moduleDescription:
          'Maggie is calm and gentle despite her large size. She loves lounging around and is very affectionate.',
        image: '',
      },
      {
        name: 'Oliver',
        description: 'A curious pug.',
        moduleDescription:
          'Oliver is curious and loves exploring. He has a wrinkly face and a curly tail, and he loves snuggling with his family.',
        image: '',
      },
    ];

    return this.getRandomDogImages(dogs.length).pipe(
      map((imageUrls) => {
        // Assign each dog a unique image
        dogs.forEach((dog, index) => {
          dog.image = imageUrls[index];
        });
        return dogs;
      })
    );
    // Use combineLatest to handle multiple API calls
  }
}
