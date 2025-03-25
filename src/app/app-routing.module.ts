import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactusPageComponent } from './pages/contactus-page/contactus-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { UpgradePageComponent } from './pages/upgrade-page/upgrade-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { ForgetPasswordPageComponent } from './pages/forget-password-page/forget-password-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contactus', component: ContactusPageComponent },
  { path: 'help', component: HelpPageComponent },
  { path: 'upgrade', component: UpgradePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'create-account', component: CreateAccountPageComponent },
  { path: 'forget-password', component: ForgetPasswordPageComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'product', component: ProductPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
