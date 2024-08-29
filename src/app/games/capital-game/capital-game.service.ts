import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './interfaces/capital-game.interface';

@Injectable()
export class CapitalGameService {

  public countries: Country[] = [];
  public currentCountry: Country | undefined;
  private highScoresList: number[] = [];

  constructor(private http: HttpClient) { }

  public getData(): Observable<Country[]> {
    return this.http.get<Country[]>('../assets/capital-city-assets/countries.json');
  }

  public startGame(): Country | undefined {
    if (this.countries.length > 0) {
      let randomIndex: number = Math.trunc(Math.random() * this.countries.length);
      this.currentCountry = this.countries[randomIndex];
    }
    return this.currentCountry;
  }



  public getCountries(): Country[] {
    return this.countries;
  }

  public setCurrentCountry(country: Country): void {
    this.currentCountry = country;
  }

  public getCurrentCountry(): Country | undefined {
    return this.currentCountry;
  }

  public getHighScores(): number[] {
    return this.highScoresList;
  }

  public saveHighScore(score: number): void {
    this.highScoresList.push(score);
    localStorage.setItem('player', JSON.stringify(this.highScoresList));
  }

  public clearHighScores(): void {
    this.highScoresList = [];
    localStorage.removeItem('player');
  }

  public setCountries(data: Country[]): void {
    this.countries = data;
  }
}
