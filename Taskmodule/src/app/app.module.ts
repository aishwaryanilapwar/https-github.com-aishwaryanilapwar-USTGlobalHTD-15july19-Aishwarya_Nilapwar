import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule}from'@angular/common/http';
import{FormsModule}from'@angular/forms';
import { AppComponent } from './app.component';
import{RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ShowallComponent } from './showall/showall.component';
import { EdittaskComponent } from './edittask/edittask.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddtaskComponent,
    ShowallComponent,
    EdittaskComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:HeaderComponent},
      {path:'addtask',component:AddtaskComponent},
      {path:'showall',component:ShowallComponent},
      {path:'edit',component:EdittaskComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
