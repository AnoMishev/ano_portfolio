import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, Observable, of, tap } from "rxjs";
import { DogBreed } from "../interfaces/dogbreed.interface";

@Injectable({
    providedIn: 'root'
})
export class MainService {
    public HTTP_CLIENT = inject(HttpClient)
    private  _httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    private _breedAdress = 'https://dogbreed-api.onrender.com/breeds'
    getBreeds(): Observable<Array<DogBreed>> {
        return this.HTTP_CLIENT.get<Array<DogBreed>>(this._breedAdress)
      }

      getBreed(id: number): Observable<DogBreed | undefined> {
        return this.getBreeds().pipe(
          map((breeds: Array<DogBreed>)=> breeds.find((breed: DogBreed) => breed.Id === id)),
          catchError(error => {
            console.error('Error fetching breed:', error);
            return of(undefined);  // Return undefined if an error occurs
          })
        );
      }

      upDateDog(dog: DogBreed): Observable<any> {
          const url = `${this._breedAdress}/${dog.Id}`
        return this.HTTP_CLIENT.patch(url, dog, this._httpOptions)
      }

      deleteDog(dog: DogBreed): Observable<any> {
        const url = `${this._breedAdress}/${dog.Id}`
        return this.HTTP_CLIENT.delete(url, this._httpOptions)
      }

      addDog(dog: DogBreed): Observable<any> {
        return this.HTTP_CLIENT.post(this._breedAdress, dog, this._httpOptions)
      }

}