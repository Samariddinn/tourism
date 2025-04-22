import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

interface technology {
  title: string;
  text: string;
  imgPath: string;
}

@Component({
  selector: 'app-technology',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export default class TechnologyComponent {
  technologyArr: technology[] = [
    {
      title: 'Launch vehicle',
      text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      imgPath: 'images/technology/image-launch-vehicle-portrait.jpg',
    },
    {
      title: 'Spaceport',
      text: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
      imgPath: 'images/technology/image-spaceport-portrait.jpg',
    },
    {
      title: 'Space capsule',
      text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      imgPath: 'images/technology/image-space-capsule-portrait.jpg',
    },
  ];

  activeIndex: number = 0;

  get activeTechnology(): technology {
    return this.technologyArr[this.activeIndex];
  }

  setActiveTechnology(index: number): void {
    this.activeIndex = index;
  }
}
