import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalOneComponent } from './modal-one.component';


const routes: Routes = [
    { path: '', component: ModalOneComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ModalOneRoutingModule { }