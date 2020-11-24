import { User } from './models/User';

const user = new User({ name: 'my name', age: 20 });

user.set({ name: 'new name', age: 9999 });

console.log(user.get('name'));
console.log(user.get('age'));
