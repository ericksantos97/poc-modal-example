import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalThreeComponent } from './modal-three.component';


const routes: Routes = [
    { path: '', component: ModalThreeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ModalThreeRoutingModule { }