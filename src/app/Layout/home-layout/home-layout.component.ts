import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopbarComponent } from "../../Components/topbar/topbar.component";
import { SidebarComponent } from "../../Components/sidebar/sidebar.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, SidebarComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

}
