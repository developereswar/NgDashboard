import { Component } from '@angular/core';
import { SidebarExpandService } from './services/sidebarExpand.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public ToggleSideBar: boolean;
  constructor(private expandService: SidebarExpandService) {
    this.expandService.checkExpand.subscribe(e => {
     this.ToggleSideBar = e;
    })
  }

  toggleMenu = false;
  testme() {
    var element = document.getElementsByClassName("main-sidebar");
    this.toggleMenu = !this.toggleMenu;
    console.log(this.toggleMenu)
    if (this.toggleMenu) {
      element[0].classList.add("slim-sidebar");
    } else {
      element[0].classList.remove("slim-sidebar");
    }

  }

}
