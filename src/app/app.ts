import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = "prova"
  onClick(e: Event){
    console.log( (<HTMLInputElement>e.target).value)
    this.title = "ho cliccato"
  }
}
