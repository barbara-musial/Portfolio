import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";
import {ServiceType} from "../../enums/serviceType.enum";

@Component({
    selector: 'calculator',
    standalone: true,
    imports: [
        NgIf
    ],
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
    public serviceType!: ServiceType;
    
    @ViewChild('designStyle') designStyleRef!: ElementRef;
    @ViewChild('numOfMocks') numOfMocksRef!: ElementRef;
    @ViewChild('complexity') complexityRef!: ElementRef;

    totalCost: number = 0;

    public calculateCost() {
        const {value: designStyle} = this.designStyleRef?.nativeElement || {};
        const {value: numOfMocks} = this.numOfMocksRef?.nativeElement || {};
        const {value: complexity} = this.complexityRef.nativeElement;

        switch (this.serviceType) {
            case ServiceType.SoftwareDevelopment:
                const softDevBase = 50;
                const softDevImp = 3;

                this.totalCost = Math.round(softDevBase + softDevImp * complexity / 10 * softDevBase);
                break;
            case ServiceType.UXUIDesign:
                const designBase = 30;
                const designImp = 2;
                const styleImp = designStyle === 'custom' ? 2 : 1;

                this.totalCost = Math.round((designBase + designImp * complexity / 10 * designBase) * styleImp * numOfMocks);
                break;
            case ServiceType.Testing:
                const testBase = 45;

                this.totalCost = Math.round(testBase + complexity / 10 * testBase);
        }
    }

    public changeServiceType(event: any) {
        this.serviceType = event.target.value;
    }

    protected readonly ServiceType = ServiceType;
}
