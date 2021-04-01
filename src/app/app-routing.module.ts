import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'modal-one',
        loadChildren: () => import('./pages/modal-one/modal-one.module').then(module => module.ModalOneModule)
    },
    {
        path: 'modal-two',
        loadChildren: () => import('./pages/modal-two/modal-two.module').then(module => module.ModalTwoModule)
    },
    {
        path: 'modal-three',
        loadChildren: () => import('./pages/modal-three/modal-three.module').then(module => module.ModalThreeModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
