import { addUser } from '../../lib/sanityDb';

async function handler(req, res) {
	if (req.method === 'POST') {
		const { fullName, address, email, phone } = req.body;
		console.log(fullName, address, email, phone);

		try {
			await addUser(fullName, address, phone, email)
				.then((response) => {
					res.status(200).json({ message: 'Success', response });
				})
				.catch((err) => {
					res.status(500).json({ err });
				});

			// if (response.statusCode === 200) {
			// 	res.status(200).json({ message: 'Success', response });
			// } else {
			// 	res.status(500).json({ error: response.responseBody });
			// }
		} catch (error) {
			res.status(500).json({ message: 'Something went wrong!' });
			return;
		}

		return;
	}

	res.status(500).json({ message: 'Wrong header' });
}

export default handler;
