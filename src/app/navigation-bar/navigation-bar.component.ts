import {Component, Input} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {TabType} from "../../enums/tabType.enum";
import {NgClass} from "@angular/common";

@Component({
    selector: 'navigation-bar',
    standalone: true,
    imports: [
        RouterOutlet, RouterLink, NgClass
    ],
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
    @Input() activeTab!: TabType
    @Input() blurred = false;
    @Input() doubleColorBg = false;
    protected readonly TabType = TabType;
}
