import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NgStyle} from "@angular/common";

@Component({
    selector: 'flip-card',
    standalone: true,
    imports: [
        NgStyle
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
    @Input() bgBack: string = 'black';
    @Input() frontText: string = 'Test';
    @Input() frontIconSrc: string = '../../assets/human-brain.png'
    @Input() backText: string = 'Test2'


    flip: string = 'inactive';

    toggleFlip() {
        this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    }
}
