import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription() {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    if (this.name === 'ironman') {
      this.name = 'spiderman';
    } else {
      this.name = 'ironman';
    }
  }

  changeAge(): void {
    if (this.age === 45) {
      this.age = 25;
    } else {
      this.age = 45;
    }
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
