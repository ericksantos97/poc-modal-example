import { NgModule } from '@angular/core';
import { ModalTemplateRoutingModule } from './modal-template-routing.module';
import { ModalTemplateComponent } from './modal-template.component';


@NgModule({
    declarations: [
        ModalTemplateComponent,
    ],
    imports: [
        ModalTemplateRoutingModule
    ],
    exports: [
        ModalTemplateComponent
    ],
})
export class ModalTemplateModule { }
