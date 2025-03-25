import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Custom Components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UpgradePageComponent } from './pages/upgrade-page/upgrade-page.component';
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ForgetPasswordPageComponent } from './pages/forget-password-page/forget-password-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactusPageComponent } from './pages/contactus-page/contactus-page.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductModalComponent } from './shared/product-modal/product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductPageComponent,
    AboutPageComponent,
    HelpPageComponent,
    PageNotFoundComponent,
    UpgradePageComponent,
    CreateAccountPageComponent,
    LoginPageComponent,
    ForgetPasswordPageComponent,
    UserProfileComponent,
    NavbarComponent,
    FooterComponent,
    ContactusPageComponent,
    ModalComponent,
    ProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCardModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
