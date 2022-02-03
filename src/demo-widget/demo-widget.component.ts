import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './demo-widget.component.html',
    styles: [ ]
})
export class WidgetDemo {
    @Input() config;
}
