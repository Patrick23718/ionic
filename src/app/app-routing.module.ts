import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/menu/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/menu/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./pages/menu/compte/compte.module').then( m => m.ComptePageModule)
  },
  {
    path: 'liste',
    loadChildren: () => import('./pages/menu/liste/liste.module').then( m => m.ListePageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./pages/user/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
