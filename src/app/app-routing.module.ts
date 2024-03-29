import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  HomeComponent,
  LoginComponent,
  RegisterComponent,
  ResumeComponent,
  EmployerComponent
} from "./routings";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "resume",
    component: ResumeComponent
  },
  {
    path: "employer",
    component: EmployerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
