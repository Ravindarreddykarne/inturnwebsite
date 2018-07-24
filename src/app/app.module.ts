import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { resource } from 'selenium-webdriver/http';
import { FooterComponent } from './footer/footer.component';
import { Routes } from '@angular/router/src/config';
import { LoginComponent } from './login/login.component';
import { FeatureComponent } from './feature/feature.component';
import { RetailerComponent } from './retailer/retailer.component';
import { BrandsComponent } from './brands/brands.component';



const appRoutes:Routes = ([   
  
       {path:'home',component:HomeComponent},
      {path:'navbar',component:NavbarComponent},
      {path:'features',component:FeaturesComponent},
      {path:'about',component:AboutComponent},
      {path:'resources',component:ResourcesComponent},
      {path:'blog',component:BlogComponent},
      {path:'careers',component:CareersComponent},
      {path:'login',component:LoginComponent},
      {path:'feature',component:FeatureComponent},
      {path:'retailer',component:RetailerComponent},
      {path:'brands',component:BrandsComponent},
      { path: '**', redirectTo: 'home', pathMatch: 'full' },  
      
])  

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturesComponent,
    AboutComponent,
    HomeComponent,
    ResourcesComponent,
    BlogComponent,
    CareersComponent,
    FooterComponent,
    LoginComponent,
    FeatureComponent,
    RetailerComponent,
    BrandsComponent,
   
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
     
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
