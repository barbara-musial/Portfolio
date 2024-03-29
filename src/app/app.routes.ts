import {Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {AboutMePageComponent} from "./about-me-page/about-me-page.component";
import {BlogPageComponent} from "./blog-page/blog-page.component";
import {ContactPageComponent} from "./contact-page/contact-page.component";
import {ProjectsPageComponent} from "./projects-page/projects-page.component";

export const routes: Routes = [
    {
        path: '', redirectTo: '/main-page', pathMatch: 'full'
    },
    {
        path: 'main-page', component: MainPageComponent
    },
    {
        path: 'about-me-page', component: AboutMePageComponent
    },
    {
        path: 'blog-page', component: BlogPageComponent
    },
    {
        path: 'contact-page', component: ContactPageComponent
    },
    {
        path: 'projects-page', component: ProjectsPageComponent
    },
];
