import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crew',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss',
})
export default class CrewComponent {
  activeCrewIndex = 0;
  crewMembers = [
    {
      role: 'commander',
      name: 'Douglas Hurley',
      bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      image: 'images/crew/image-douglas-hurley.webp',
    },

    {
      role: 'pilot',
      name: 'Victor Glover',
      bio: 'Victor Glover is a NASA astronaut and United States Navy aviator. He is part of the crew for the Crew-1 mission to the International Space Station.',
      image: 'images/crew/image-victor-glover.webp',
    },
    {
      role: 'flight engineer',
      name: 'anousheh ansari',
      bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
      image: 'images/crew/image-anousheh-ansari.webp',
    },
  ];

  setActiveCrew(index: number): void {
    this.activeCrewIndex = index;
  }

  get activeCrew() {
    return this.crewMembers[this.activeCrewIndex];
  }
}
