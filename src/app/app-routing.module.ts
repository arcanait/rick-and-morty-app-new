import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: 'list',
    component: CharacterListComponent
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./modules/character-detail/character-detail.module').then(m => m.CharacterDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
