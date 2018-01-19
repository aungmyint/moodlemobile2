// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Component to show a loading spinner and message while data is being loaded.
 *
 * It will show a spinner with a message and hide all the content until 'dataLoaded' variable is set to true.
 * If 'message' and 'dynMessage' attributes aren't set, default message "Loading" is shown.
 * 'message' attribute accepts hardcoded strings, variables, filters, etc. E.g. message="'core.loading' | translate".
 *
 * Usage:
 * <core-loading [message]="loadingMessage" [hideUntil]="dataLoaded">
 *     <!-- CONTENT TO HIDE UNTIL LOADED -->
 * </core-loading>
 *
 * IMPORTANT: Due to how ng-content works in Angular, the content of core-loading will be executed as soon as your view
 * is loaded, even if the content hidden. So if you have the following code:
 * <core-loading [hideUntil]="dataLoaded"><my-component></my-component></core-loading>
 *
 * The component "my-component" will be initialized immediately, even if dataLoaded is false, but it will be hidden. If you want
 * your component to be initialized only if dataLoaded is true, then you should use ngIf:
 * <core-loading [hideUntil]="dataLoaded"><my-component *ngIf="dataLoaded"></my-component></core-loading>
 */
@Component({
    selector: 'core-loading',
    templateUrl: 'loading.html'
})
export class CoreLoadingComponent implements OnInit {
    @Input() hideUntil: boolean; // Determine when should the contents be shown.
    @Input() message?: string; // Message to show while loading.

    constructor(private translate: TranslateService) {}

    /**
     * Component being initialized.
     */
    ngOnInit() {
        if (!this.message) {
            // Default loading message.
            this.message = this.translate.instant('core.loading');
        }
    }

}
