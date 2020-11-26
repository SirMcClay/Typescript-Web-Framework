import { User } from './models/User';

const user = new User({ name: 'Another User', age: 888 });

user.on('change', () => {
	console.log('user was change');
});
