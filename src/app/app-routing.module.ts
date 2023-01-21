import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { NetworkComponent } from './network/network.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreComponent } from './store/store.component';
import { WalletViewComponent } from './wallet-view/wallet-view.component';

const routes: Routes = [
  // { path: 'store', component: StoreComponent, pathMatch: 'full' },
  // { path: 'home', component: HomeComponent, pathMatch: 'full' },
  // { path: 'account', component: AccountComponent, pathMatch: 'full' },
  // { path: 'edit', component: ProfileComponent, pathMatch: 'full' },
  // { path: 'store/:app', component: ItemCsomponent, pathMatch: 'full' },
  // { path: 'wallet/:id/:network', component: NetworkComponent, pathMatch: 'full' },
  { path: 'wallet/:id', component: WalletViewComponent, pathMatch: 'full' },


  // { path: '', redirectTo: '/auth', pathMatch: 'full' },
  // { path: '/:any', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
