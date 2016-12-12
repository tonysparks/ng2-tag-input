import { Component } from '@angular/core';

import {
    Validators,
    FormControl
} from '@angular/forms';

import { NgModule } from '@angular/core';
import { TagInputModule } from '../../ng2-tag-input.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

function getItems() {
    return ['Javascript', 'Typescript'];
}

const validators = [Validators.minLength(3), (control: FormControl) => {
    if (control.value.charAt(0) !== '@') {
        return {
            'startsWithAt@': true
        };
    }
    return null;
}];

@Component({
    selector: 'test-app',
    template: `<tag-input [(ngModel)]="items"></tag-input>`
})
export class BasicTagInputComponent {
    public items = getItems();
}

@Component({
    selector: 'test-app',
    template: `<tag-input
                  [(ngModel)]="items"
                  (onRemove)="onRemove($event)"
                  (onAdd)="onAdd($event)">
              </tag-input>`
})
export class TagInputComponentWithOutputs {
    public items = getItems();

    onAdd(item) {}
    onRemove(item) {}

    public validators: any = validators;
}

@Component({
    selector: 'test-app',
    template: `<tag-input
                  [(ngModel)]="items"
                  [validators]="validators"
                  (onRemove)="onRemove($event)"
                  (onAdd)="onAdd($event)">
              </tag-input>`
})
export class TagInputComponentWithValidation {
    public items = getItems();
    validators: any = validators;
    onAdd(item) {}
    onRemove(item) {}
}

@Component({
    selector: 'test-app',
    template: `<tag-input [(ngModel)]="items"
                          [validators]="validators"
                          [transform]="addPrefix">
                         </tag-input>`
})
export class TagInputComponentWithTransformer {
    public items = getItems();

    addPrefix(item: string) {
        return `prefix: ${item}`;
    }
    validators: any = validators.splice(0, 1);
}

@Component({
    selector: 'test-app',
    template: `<tag-input [(ngModel)]="items" [placeholder]="'New Tag'"></tag-input>`
})
export class TagInputComponentWithPlaceholder {
    public items = getItems();
}

@Component({
    selector: 'test-app',
    template: `<tag-input [(ngModel)]="items" [maxItems]="2"></tag-input>`
})
export class TagInputComponentWithMaxItems {
    public items = getItems();
}


@Component({
    selector: 'test-app',
    template: `<tag-input [(ngModel)]="items"
                                 [autocompleteItems]="['item1', 'item2', 'itam3']"
                                 [autocomplete]="true"></tag-input>`
})
export class TagInputComponentWithAutocomplete {
    public items = getItems();
}

@Component({
    selector: 'test-app',
    template: `<tag-input [(ngModel)]="items">
                     <div class="custom_class" *ngFor="let item of items" (click)="selectItem(item)">
                        <span class="tag__name">{{ item }}</span>
                        <span (click)="remove(item)"><img src="delete.png" /></span>
                     </div>
                </tag-input>`
})
export class TagInputComponentWithTemplate {
    public items = getItems();
}

@Component({
    selector: 'test-app',
    template: `<tag-input [(ngModel)]="items"
                           [onlyFromAutocomplete]="true"
                           [autocompleteItems]="['item1', 'item2', 'itam3']"
                           [autocomplete]="true"></tag-input>`
})
export class TagInputComponentWithOnlyAutocomplete {
    public items = getItems();
}


@Component({
    selector: 'test-app',
    template: `<tag-input [(ngModel)]="items"
                           [onlyFromAutocomplete]="true"
                           [autocompleteItems]="['item1', 'item2', 'item3']"
                           [dropdownMenuItemHtml]="dropdownMenuItemHtml"
                           [autocomplete]="true"></tag-input>`
})
export class TagInputComponentWithCustomAutocomplete {
    public items = getItems();

    public dropdownMenuItemHtml(item:string, inputValue:string) : string {
        return "Custom item: " + item;
    }
}

@Component({
    selector: 'test-app',
    template: `<tag-input [(ngModel)]="items"
                           [onlyFromAutocomplete]="true"
                           [autocompleteItems]="['item1', 'item2', 'item3']"                           
                           [autocomplete]="true"></tag-input>`
})
export class TagInputComponentWithoutCustomAutocomplete {
    public items = getItems();
}

const COMPONENTS = [
    BasicTagInputComponent,
    TagInputComponentWithPlaceholder,
    TagInputComponentWithOutputs,
    TagInputComponentWithTransformer,
    TagInputComponentWithValidation,
    TagInputComponentWithMaxItems,
    TagInputComponentWithTemplate,
    TagInputComponentWithAutocomplete,
    TagInputComponentWithOnlyAutocomplete,
    TagInputComponentWithCustomAutocomplete,
    TagInputComponentWithoutCustomAutocomplete
];

@NgModule({
    imports: [CommonModule, FormsModule, TagInputModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS]
})
export class TestModule {}
