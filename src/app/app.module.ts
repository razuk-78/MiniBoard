import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './Components/card/card.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientService } from 'src/app/Services/http-client.service';
import { KeyWordService } from 'src/app/Services/key-word.service';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    BoardComponent,
    CardComponent,
    EditorComponent,
    SideBarComponent,
    ProjectCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatExpansionModule,
    FormsModule
    
  ],
  providers: [HttpClientService,KeyWordService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
