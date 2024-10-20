import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [AvatarModule,ToolbarModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

}
