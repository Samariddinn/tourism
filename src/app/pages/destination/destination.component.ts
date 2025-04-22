import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

interface Destination {
  name: string;
  image: string;
  description: string;
  distance: string;
  travelTime: string;
}

@Component({
  selector: 'app-destination',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
})
export default class DestinationComponent {
  activeDestination: string = 'Moon';

  destinations: Destination[] = [
    {
      name: 'Moon',
      image: 'images/destination/image-moon.webp',
      description:
        "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: '384,400 KM',
      travelTime: '3 DAYS',
    },
    {
      name: 'Mars',
      image: 'images/destination/image-mars.webp',
      description:
        "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      distance: '225 MIL. KM',
      travelTime: '9 MONTHS',
    },
    {
      name: 'Europa',
      image: 'images/destination/image-europa.webp',
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: '628 MIL. KM',
      travelTime: '3 YEARS',
    },
    {
      name: 'Titan',
      image: 'images/destination/image-titan.webp',
      description:
        'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      distance: '1.6 BIL. KM',
      travelTime: '7 YEARS',
    },
  ];

  get currentDestination(): Destination {
    return this.destinations.find((dest) => dest.name === this.activeDestination)!;
  }

  setActiveDestination(name: string): void {
    this.activeDestination = name;
  }
}
