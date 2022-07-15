import { Component, Input } from "@angular/core";
import { KeyTypes } from "./key-types";

@Component({
    selector: 'keys-choices',
    templateUrl: './keys-choices.component.html',
    styleUrls: ['./keys-choices.component.css'],
})

export class KeysChoicesComponent {
    @Input() myKeys: KeyTypes[] = [];
}