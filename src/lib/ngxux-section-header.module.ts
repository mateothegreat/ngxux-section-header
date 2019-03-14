import { CommonModule }                from '@angular/common';
import { NgModule }                    from '@angular/core';
import { MatButtonModule }             from '@angular/material';
import { RouterModule }                from '@angular/router';
import { NgxuxSectionHeaderComponent } from './ngxux-section-header.component';

@NgModule({

    declarations: [

        NgxuxSectionHeaderComponent

    ],

    imports: [

        CommonModule,
        MatButtonModule,
        RouterModule,

    ],

    exports: [

        NgxuxSectionHeaderComponent

    ]

})
export class NgxuxSectionHeaderModule {
}
