import {Component} from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {TypeDeleteTextCmpComponent} from "../type-delete-text-cmp/type-delete-text-cmp.component";
import {BackgroundComponent} from "../background/background.component";

@Component({
    selector: 'main-page',
    standalone: true,
    imports: [
        NavigationBarComponent,
        TypeDeleteTextCmpComponent,
        BackgroundComponent
    ],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
    public positions = ['< Front-End Developer >', 'Student']

}
