    import { Routes } from '@angular/router';
    import { ContactUsComponent } from './components/contact-us/contact-us.component';
    import { MainBodyComponent } from './components/main-body/main-body.component';
    import { FooterComponent } from './components/footer/footer.component';
    import { NavbarComponent } from './components/navbar/navbar.component';
    import { HomeComponent } from './components/home/home.component';
    import { TeamComponent } from './components/team/team.component';

    export const routes: Routes = [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'contact-us', component: ContactUsComponent },
        { path: 'main-body', component: MainBodyComponent },
        { path: 'footer', component: FooterComponent },
        { path: 'navbar', component: NavbarComponent },
        { path: 'team', component: TeamComponent }
    ];
