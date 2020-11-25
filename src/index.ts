import { User } from './models/User';

const user = new User({ id: 1 });

user.set({ name: 'New name again', age: 9999 });

user.save();

const anotherUser = new User({ name: 'Another User', age: 888 });

anotherUser.save();
