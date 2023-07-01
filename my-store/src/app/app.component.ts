import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'dennysferrer';
  age:number = 35;
  img:string = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    age: 18,
    name: 'dennysferrer'
  }

  onClick(){
    this.btnDisabled = !this.btnDisabled;
  }

  addAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  onKeyup(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }


}
