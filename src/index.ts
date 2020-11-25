import { User } from './models/User';

const user = new User({ name: 'Another User', age: 888 });

user.events.on('change', () => {
	console.log('change');
});

user.events.trigger('change');
