import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxSelectBoxModule,
         DxTextBoxModule,
         DxTemplateModule } from 'devextreme-angular';
import ArrayStore from 'devextreme/data/array_store';

import { Product, Service } from './app.service';


@Component({
    selector: 'demo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [Service]
})
export class AppComponent {
    simpleProducts: string[];
    products: Product[];
    data: any;

    constructor(service: Service) { 
        this.products = service.getProducts();        
        this.simpleProducts = service.getSimpleProducts();
        this.data = new ArrayStore({
            data: this.products,
            key: "ID"
        });
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxSelectBoxModule,
        DxTextBoxModule,
        DxTemplateModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);