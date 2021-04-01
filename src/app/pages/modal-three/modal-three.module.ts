import { NgModule } from '@angular/core';
import { ModalThreeRoutingModule } from './modal-three-routing.module';
import { ModalThreeComponent } from './modal-three.component';


@NgModule({
    declarations: [
        ModalThreeComponent,
    ],
    imports: [
        ModalThreeRoutingModule
    ],
    exports: [
        ModalThreeComponent
    ],
})
export class ModalThreeModule { }
