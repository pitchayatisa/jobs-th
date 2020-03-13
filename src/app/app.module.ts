import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { LayoutsComponent } from "./layouts/layouts.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ResumeComponent } from "./pages/resume/resume.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutsComponent,
    LoginComponent,
    RegisterComponent,
    ResumeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
