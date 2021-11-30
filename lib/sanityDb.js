import { client } from '../lib/sanity';

export const addEmail = async (firstName, lastName, address, phone, email) => {
	const user = {
		_type: 'users',
		firstName,
		lastName,
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
