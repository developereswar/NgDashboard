import { Component } from '@angular/core';
import { SidebarExpandService } from 'src/app/services/sidebarExpand.service';

@Component({
    selector:'app-Header',
    templateUrl:'./header.component.html'
})
export class Header{
    public ToggleHumberger:boolean;
    constructor( private expandService: SidebarExpandService){
        this.expandService.checkExpand.subscribe( res =>{
            this.ToggleHumberger = res;
        })
    }

    Togglecollpase(){
        this.expandService.collapse();
    }
    
}