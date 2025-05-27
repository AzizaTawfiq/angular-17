import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dumy-users';
import { FormsModule } from '@angular/forms';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  user = DUMMY_USERS[randomIndex];
  signalUser = signal(DUMMY_USERS[randomIndex]); // Using signal to track user changes
  count: number = 1;
  name: string = '';
  title: string = 'Hello';
  signalValue = signal<number>(0); // Using signal to track changes

  //Computed property using getters to get full name
  get userName() {
    return `${this.user.firstName} ${this.user.lastName}`;
  }

  // when using signal, we can use the computed to get the current value instead of use getters to get the value
   signalValueComputed= computed(() =>this.signalValue());
  //Computed property using signal to get full name
  userFullName = computed(() => `${this.signalUser().firstName} ${this.signalUser().lastName}`);

  increment() {
    this.count++;
    this.name = 'aziza const';
    this.signalValue.set(this.signalValue() + 1);

  }
}
