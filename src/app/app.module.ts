import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesignModule } from './material-design/material-design.module';

// common components
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { HomeComponent } from './home/home.component';


// users
import { UserService } from './users/user.service';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { UserCreateComponent } from './users/user-create/user-create.component';

// games
import { GameService } from './games/game.service';
import { GameComponent } from './games/game/game.component';
import { GamesComponent } from './games/games.component';
import { GameCreateComponent } from './games/game-create/game-create.component';
// Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // users
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'user-create', component: UserCreateComponent },
  // games
  { path: 'games', component: GamesComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'game-create', component: GameCreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainFooterComponent,
    HomeComponent,
    // users
    UsersComponent,
    UserCreateComponent,
    UserComponent,
    // games
    GamesComponent,
    GameCreateComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }