import {Component, AfterViewInit} from "@angular/core";
declare var App: any;

@Component({
    selector: '',
    template: '<router-outlet></router-outlet>'
})

export class AppComponent implements AfterViewInit{
    ngAfterViewInit(): void {
        console.log("started");
        App.loader('hide');
    }
}