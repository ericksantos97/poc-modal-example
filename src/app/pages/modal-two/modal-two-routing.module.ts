import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalTwoComponent } from './modal-two.component';


const routes: Routes = [
    { path: '', component: ModalTwoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ModalTwoRoutingModule { }