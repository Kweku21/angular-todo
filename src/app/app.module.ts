import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodaItemComponent } from './components/toda-item/toda-item.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { AddTodoComponent } from "./components/add-todo/add-todo.component";
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodaItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
