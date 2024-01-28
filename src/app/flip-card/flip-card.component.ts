import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NgStyle, NgTemplateOutlet} from "@angular/common";

@Component({
    selector: 'flip-card',
    standalone: true,
    imports: [
        NgStyle,
        NgTemplateOutlet
    ],
    templateUrl: './flip-card.component.html',
    styleUrl: './flip-card.component.scss',
    animations: [
        trigger('flipState', [
            state('active', style({
                transform: 'rotateY(180deg)'
            })),
            state('inactive', style({
                transform: 'rotateY(0)'
            })),
            transition('active => inactive', animate('500ms ease-out')),
            transition('inactive => active', animate('500ms ease-in'))
        ])
    ]
})
export class FlipCardComponent {
    @Input() bgFront: string = 'rgba(0, 0, 0, 0.2)';
    @Input() frontText: string = 'Test';
    @Input() backTemplate!: any;

    flip: string = 'active';

    toggleFlip() {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
}
