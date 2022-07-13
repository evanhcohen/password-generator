import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { KeyTypes } from './key-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';

  passwordLength = 8;
  lengthChoices = Array.from(Array(20), (_, i) => i + 1);

  pass = '--------';

  keys: KeyTypes[] = [
    {name: "numbers", key: "0123456789", selected: true, display: "123"},
    {name: "lowercase", key: "abcdefghijklmnopqrstuvwxyz", selected: true, display: "abc" },
    {name: "uppercase", key: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", selected: true, display: "ABC"},
    {name: "symbols", key: "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/", selected: true, display: "@#$" },
  ]
  userKeys = '';

  similar = "l1|IoO0sS"

  // generate random characters from the string provided with setKeys
  randomString(): string {
    this.setKeys();    
    var result = '';
    for (var i = 0; i < this.passwordLength; i++) {
      result += this.userKeys.charAt(Math.floor(Math.random() * this.userKeys.length));
    }
    return result;
  }

  // add keys user wants to the string
  setKeys(): void {
    this.userKeys = '';

    for (let elm of this.keys) {
      if(elm.selected)
      {
        this.userKeys += elm.key;
      }
    }
  }

  generate(): void {
    this.pass = this.randomString()
    navigator.clipboard.writeText(this.pass)
  }

  dashUpdate(): void {
    this.pass = '-'.repeat(this.passwordLength);
  }
}
