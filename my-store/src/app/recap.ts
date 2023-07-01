const username:string = 'dennysferrer';

const suma = (a:number, b:number) => {
  console.log(a+b);

}

suma(10,11)


class Person {
  private age: number;
  lastName: string;

  constructor(age:number, lastName:string){
    this.age = age;
    this.lastName = lastName;
  }
}


const nico = new Person(25,'Ferrer');

nico.age
