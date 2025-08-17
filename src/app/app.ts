import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmp } from "./page/manage-emp/manage-emp";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ManageEmp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Employee-Management-System';
}
