import { client } from '../lib/sanity';

export const addEmail = async (email) => {
	const user = {
		_type: 'newsletter',
		email,
	};

	return await client
		.create(user)
		.then((res) => {
			console.log('Email added');
			return res._id;
		})
		.catch((err) => err);
};
