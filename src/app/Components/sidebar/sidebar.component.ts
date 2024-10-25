import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { CommonService } from '../../Services/common.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  constructor(private commonService : CommonService){}

  ngOnInit() {
    this.commonService.toggleDrawer$.pipe(takeUntil(this.commonService.onDestroy$)).subscribe(() => {
      this.drawer.toggle();
    });
  }
}
