import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { VetComponent } from './components/vet/vet.component';
import { CatListComponent } from './modules/cat-list/cat-list.component';
import { OrdersComponent } from './modules/orders/orders.component';
import {LicenseComponent} from './components/license/license.component';
import {HeightAttackComponent} from './components/height-attack/height-attack.component';
import {GameComponent} from "./components/game/game.component";

const routes: Routes = [{
  path: '',
  component: MainComponent
}, {
    path: 'orders',
    component: OrdersComponent
  }, {
    path: 'service/0',
    redirectTo: 'registration'
  }, {
    path: 'registration',
    component: RegistrationComponent
  }, {
    path: 'cat/:id',
    component: RegistrationComponent
  }, {
    path: 'service/1',
    redirectTo: 'vet'
  }, {
    path: 'vet',
    component: VetComponent
  }, {
    path: 'cat-list',
    component: CatListComponent
  },{
     path: 'service/6',
    component: LicenseComponent
  },{
    path: 'service/7',
    component: HeightAttackComponent
  }, {
    path: 'service/8',
    component: GameComponent
  }, {
    path: '**',
    component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
