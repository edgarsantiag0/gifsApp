import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif} from "../interfaces/gifs.interface";

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  
  private apiKey     : string = "7j5XaVOKQnhORG3Jxv0uhPeXJxIixDJ1"; 
  private serviceUrl : string = "https://api.giphy.com/v1/gifs"; 

  private _history: string[] = [];

  public results: Gif[] = [];

  get history(){
    return [...this._history];
  }

  /**
   *
   */
  constructor(private http: HttpClient) {
    
    
  }

  searchGifs(query: string){

    query = query.trim().toLocaleLowerCase();

    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0,10); // TOP 10
    }

    const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('limit', '10')
        .set('q', query);



    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params})
        .subscribe( (resp) => {
          this.results = resp.data;
        });


  }

}
