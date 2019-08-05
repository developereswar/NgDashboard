import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent{
    public showDownload:boolean = false;
    public SuccessDownload : string = null;
    public results : any;
    constructor(){}
    UploadResponse($event): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        setTimeout(()=>{this.results= null},2000)
        this.results = $event;
        this.showDownload = true;
    }

    generate(){
        let url = 'http://localhost:8082/r6061GeneratePRN'
        this.SuccessDownload = "Downloaded SuccessFully";
        setTimeout(()=>{this.SuccessDownload= null; window.location.reload();},3000)
        window.open(url); 
        
    }

}