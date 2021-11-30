import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { addEmail } from '../lib/sanityDb';

export default function Home() {
	const firstNameEl = useRef();
	const lastNameEl = useRef();
	const addressEl = useRef();
	const phoneEl = useRef();
	const emailEl = useRef();

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const firstName = firstNameEl.current.value;
		const lastName = lastNameEl.current.value;
		const address = addressEl.current.value;
		const phone = phoneEl.current.value;
		const email = emailEl.current.value;
		await addEmail(firstName, lastName, address, phone, email).then((res) => {
			setLoading(false);
			firstNameEl.current.value = '';
			lastNameEl.current.value = '';
			addressEl.current.value = '';
			phoneEl.current.value = '';
			emailEl.current.value = '';
			alert('Thank you for signing up for our newsletter!');
		});
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Completely Laced | Opening soon</title>
			</Head>

			<div className={styles.logo}>
				<Image
					src="/completely-laced-artwork-logo.png"
					width={400}
					height={400}
					alt="Completely Laced"
					layout="responsive"
				/>
			</div>
			<h1 className={styles.open}>Opening Soon</h1>
			<p className={styles.first}>Be the first to know when we launch</p>
			<div className={styles.promo} style={{ textAlign: 'center' }}>
				Sign up for exclusive updates, early preview at inventory, free product,
				newsletter & discount codes...
			</div>
			<form
				onSubmit={handleSubmit}
				className={styles.form}
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				{/* <div
					style={{
						// width: '100%',
						margin: 0,
						padding: 0,
						display: 'flex',
						gap: '10px',
					}}
				> */}
				<input type="text" placeholder="First Name" ref={firstNameEl} />
				<input type="text" placeholder="Last Name" ref={lastNameEl} />
				{/* </div> */}
				<input
					type="text"
					placeholder="Enter you mailing address"
					ref={addressEl}
				/>
				<input type="tel" placeholder="Enter your phone number" ref={phoneEl} />
				<input
					type="email"
					placeholder="Enter your email address"
					ref={emailEl}
				/>
				<button type="submit">{loading ? 'Loading...' : 'Sign Up'}</button>
			</form>
		</div>
	);
}
