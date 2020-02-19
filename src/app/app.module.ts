import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AddNewRouteComponent } from "./add-new-route/add-new-route.component";
import { CardListComponent } from "./card-list/card-list.component";

const appRoutes: Routes = [
  { path: "home", component: CardListComponent },
  { path: "add-new-route", component: AddNewRouteComponent },
  { path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, AddNewRouteComponent, CardListComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
