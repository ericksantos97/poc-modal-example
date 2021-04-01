import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalComponent } from './modal.component';


@NgModule({
    declarations: [
        ModalComponent,
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        ModalComponent
    ],
})
export class ModalModule { }
