import { NgModule } from '@angular/core';
import { ModalTwoRoutingModule } from './modal-two-routing.module';
import { ModalTwoComponent } from './modal-two.component';


@NgModule({
    declarations: [
        ModalTwoComponent,
    ],
    imports: [
        ModalTwoRoutingModule
    ],
    exports: [
        ModalTwoComponent
    ],
})
export class ModalTwoModule { }
