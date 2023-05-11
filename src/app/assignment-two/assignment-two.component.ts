import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent {
  userName: string = '';
  onClearUserName() {
    // (<HTMLInputElement>event.target).value = '';
    // this.userName = (<HTMLInputElement>event.target).value;
    this.userName = '';
  }
}
