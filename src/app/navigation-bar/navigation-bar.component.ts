import {Component} from '@angular/core';
import {MainPageComponent} from "../main-page/main-page.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
    selector: 'navigation-bar',
    standalone: true,
    imports: [
        RouterOutlet, RouterLink
    ],
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
}
