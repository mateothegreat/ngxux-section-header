import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxuxSectionHeaderButton }               from './ngxux-section-header-button';

@Component({

    selector: 'ngxux-section-header',
    template: `

        <div class="wrapper">

            <div class="left">

                <div *ngIf="title" class="first">{{ title }}</div>
                <div *ngIf="description" class="second">{{ description }}</div>

            </div>

            <div class="right">

                <button *ngFor="let button of buttons"
                        mat-raised-button
                        [color]="button.color"
                        (click)="onButtonClick(button)">

                    {{ button.label }}

                </button>

            </div>

        </div>

    `,
    styleUrls: [ './ngxux-section-header.component.scss' ]

})
export class NgxuxSectionHeaderComponent {

    @Input() public title: string;
    @Input() public description: string;
    @Input() public buttons: Array<NgxuxSectionHeaderButton>;

    @Output() public onClick: EventEmitter<NgxuxSectionHeaderButton> = new EventEmitter();

    public onButtonClick(button: NgxuxSectionHeaderButton): void {

        this.onClick.emit(button);

    }

}
