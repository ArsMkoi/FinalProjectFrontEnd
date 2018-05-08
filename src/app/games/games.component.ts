import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';
import { Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

  games: Array<Object>;

  autoPlay:boolean = false;

  constructor(
    private gameService: GameService,
    private router: Router,
    private sanitizer:DomSanitizer
  ) {

  }

  ngOnInit() {
    this.games = [];
    this.getGames();
    console.log('games', this.games);
    
  }

  sanitize(url, autoPlay) {
    if(autoPlay) {
      url += '?autoplay=1';
    } else {
      url += '?autoplay=0';
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  getGames() {
    this.gameService.getGames().then((resp) => {
      console.log('this.games before map', this.games)
      console.log('resp before map resp: ', resp)

      this.games = resp.map((game) => {
        game['autoplay'] = false;
        return game;
      });
      console.log('this.games after map', this.games)
    });
  }

  goToCreate() {
    console.log('go to create....;');
    this.router.navigate(['game-create']);
  }

  deleteGame(id: string) {
    console.log(`deleting game with id of : ${id}`);
    this.gameService.deleteGame(id).then((resp) => {
      if (resp["status"] === "success") {
        this.games = this.games.filter((game) => {
          return game['_id'] !== id;
        });
      }
      else {
        console.log("There was a delete error.");
      }
    });
  }

}