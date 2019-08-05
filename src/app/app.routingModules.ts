import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FileUpload } from './components/common/fileUpload/fileUpload.component';
import { FileLoader } from './components/common/Loader.component';
import { DashboardHeader } from './components/common/dashboardHeader/dashboardHeader.component';
import { Header } from './components/common/Header/header.component';
import { ProgessBar } from './components/common/ProgessBar/ProgessBar.component';



//route
const appRoute: Routes =[
    {
      path:'', component: DashboardComponent
    }
  ]
@NgModule({
   
    imports:[
        CommonModule,
        RouterModule.forRoot(appRoute, {enableTracing:false})
    ],
    exports: [RouterModule]
})

export class AppRouter{}

export const Components = [
    AppComponent,
    DashboardComponent,
    FileUpload,
    FileLoader,
    DashboardHeader,
    Header,
    ProgessBar
]