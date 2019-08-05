import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
    providedIn: 'root'
})
export class SidebarExpandService {
    expand: boolean = false;
    checkExpand: BehaviorSubject<boolean>;
    constructor() {
 
        this.checkExpand = new BehaviorSubject(this.expand);
    }
 
    collapse() {
       this.expand = !this.expand
        this.checkExpand.next(this.expand);
    }
}