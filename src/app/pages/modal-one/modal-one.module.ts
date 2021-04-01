import { NgModule } from '@angular/core';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { ModalOneRoutingModule } from './modal-one-routing.module';
import { ModalOneComponent } from './modal-one.component';


@NgModule({
    declarations: [
        ModalOneComponent,
    ],
    imports: [
        ModalOneRoutingModule,
        ModalModule
    ],
    exports: [
        ModalOneComponent
    ],
})
export class ModalOneModule { }
