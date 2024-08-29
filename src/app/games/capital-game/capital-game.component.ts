import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { CapitalGameService } from "./capital-game.service";
import { Country } from "./interfaces/capital-game.interface";

@Component({
  selector: 'capital-game',
  templateUrl: './capital-game.component.html',
  styleUrls: ['./capital-game.component.scss']
})
export class CapitalCityGame {

  public answer: string = "?"
  public isFinished: boolean = false;
  public attempts: number = 6;
  public highScore: number = 0;
  public highScoresList: number[] = [];
  public currentCountry: Country | undefined;
  public input: FormControl = new FormControl(null);
  public gameQuestion: string = "?";
  public isModalOpen: boolean = false;

  constructor(private gameService: CapitalGameService) {
    this.gameService.getData().subscribe((data: Country[]) => {
      this.gameService.setCountries(data); // Set countries using service method
      this.startGame();
    });
  }

  public startGame(): void {
    this.currentCountry = this.gameService.startGame();
    if (this.currentCountry) {
      this.gameQuestion = `What is the capital of ${this.currentCountry.countryName}?`;
    }
  }

  public playGame(): void {
    if (this.isFinished || !this.currentCountry) return;
    else if (this.input.value === null) {
      this.skipCountry()
    }
    if (this.input.value.toUpperCase() === this.currentCountry.countryCapital.toUpperCase()) {
      this.highScore += 5;
      this.updateCountry();
      this.input.reset()
      this.startGame();
    } 
    else 
      this.skipCountry()
      if (this.attempts === 0) {
        this.finishedGame();
      }
    }

  public updateCountry(): void {
    if (this.currentCountry) {
      this.gameService.countries = this.gameService.countries.filter(country => country.countryName !== this.currentCountry!.countryName);
      this.gameService.startGame();
      this.attempts--;
    }
  }

  public skipCountry(): void {
    if (this.attempts > 0) {
      this.attempts--;
      this.startGame();
      this.input.reset()
    }
    if (this.attempts === 0) {
      this.finishedGame();
    }
  }

  public finishedGame(): void {
    this.isFinished = true;
    this.gameQuestion = 'Game Over';
    this.gameService.saveHighScore(this.highScore);
  }

  public resetGame(): void {
    this.gameService.getData().subscribe((data: Country[]) => {
      this.gameService.setCountries(data); // Set countries using service method
      this.isFinished = false;
      this.attempts = 6;
      this.highScore = 0;
      this.input.reset();
      this.startGame();
    });
  }

  public openModal(): void {
    this.highScoresList = this.gameService.getHighScores();
    this.isModalOpen = true;
  }

  public closeModal(): void {
    this.isModalOpen = false;
  }
}
