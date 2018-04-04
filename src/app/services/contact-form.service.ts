import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ContactFormService {

  constructor(private http: Http) { }

  emailOwner (messageContents) {
    return this.http.post('/mailContact', messageContents).subscribe(
      response => {
        return response.json();
      },
        err => {
          console.log('Error occured');
      }
    );
  }
}
