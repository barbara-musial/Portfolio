import {Component} from '@angular/core';
import {BackgroundComponent} from "../background/background.component";
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {TabType} from "../../enums/tabType.enum";

@Component({
    selector: 'blog-page',
    standalone: true,
    imports: [
        BackgroundComponent,
        NavigationBarComponent
    ],
    templateUrl: './blog-page.component.html',
    styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {

    protected readonly TabType = TabType;
}
