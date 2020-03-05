import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { CmsLoginComponent } from './cms-login/cms-login.component';
import { CmsDashboardComponent } from './cms-dashboard/cms-dashboard.component';
import { CmsHeaderComponent } from './cms-header/cms-header.component';
import { PlayersComponent } from './cms-dashboard/players/players.component';
import { CoachesComponent } from './cms-dashboard/coaches/coaches.component';
import { TeamsComponent } from './cms-dashboard/teams/teams.component';
import { ClubsComponent } from './cms-dashboard/clubs/clubs.component';
import { UpdateplayerComponent } from './cms-dashboard/players/updateplayer/updateplayer.component';
import { MustMatchDirective } from './helpers/mustmatchvalidator';
import { UpdateCoachComponent } from './cms-dashboard/coaches/update-coach/update-coach.component';
import { UpdateTeamsComponent } from './cms-dashboard/teams/update-teams/update-teams.component';
import { ActivitiesComponent } from './cms-dashboard/activities/activities.component';

@NgModule({
  declarations: [
    AppComponent,
    CmsLoginComponent,
    CmsDashboardComponent,
    CmsHeaderComponent,
    PlayersComponent,
    CoachesComponent,
    TeamsComponent,
    ClubsComponent,
    UpdateplayerComponent,
    MustMatchDirective,
    UpdateCoachComponent,
    UpdateTeamsComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
