import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  petName = 'puppies';
  petImage =
    'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

  updateName(event: any) {
    this.petName = event.target.value;
  }

  updateImage(image) {
    if (image == '')
      this.petImage =
        'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
    else this.petImage = image;
  }
}
