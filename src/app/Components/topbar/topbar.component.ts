import { Component } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import { AuthService } from '../../Services/auth.service'; // Import AuthService
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatIconModule, MatMenuModule],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']  // Corrected styleUrl to styleUrls
})
export class TopbarComponent {
  constructor(
    private commonService: CommonService,
    private authService: AuthService // Inject AuthService
  ) {}

  ToggleSidebar() {
    this.commonService.toggleDrawer();
  }

  logout() {
    this.authService.logout(); // Call logout from AuthService
  }
}
