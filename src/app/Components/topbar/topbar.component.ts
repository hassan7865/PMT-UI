import { Component } from '@angular/core';
import { CommonService } from '../../Services/common.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent  {
 
  constructor(private commonService : CommonService){}
  

  ToggleSidebar(){
    this.commonService.toggleDrawer()
  }
}
