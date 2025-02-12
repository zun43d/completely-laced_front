import { client } from '../lib/sanity';

export const addUser = async (fullName, address, phone, email) => {
	const user = {
		_type: 'users',
		fullName,
		address,
		phone,
		email,
	};

	return await client
		.create(user)
		.then((res) => {
			console.log('User added');
			return res._id;
		})
		.catch((err) => err);
};
