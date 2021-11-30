import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { addEmail } from '../lib/sanityDb';

export default function Home() {
	const fullNameEl = useRef();
	const addressEl = useRef();
	const phoneEl = useRef();
	const emailEl = useRef();

	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const fullName = fullNameEl.current.value;
		const address = addressEl.current.value;
		const phone = phoneEl.current.value;
		const email = emailEl.current.value;
		await addEmail(fullName, address, phone, email).then((res) => {
			setLoading(false);
			firstNameEl.current.value = '';
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
			<form onSubmit={handleSubmit} className={styles.form}>
				{/* <div
					style={{
						// width: '100%',
						margin: 0,
						padding: 0,
						display: 'flex',
						gap: '10px',
					}}
				> */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '5px',
						alignItems: 'center',
					}}
				>
					<input type="text" placeholder="Full Name" ref={fullNameEl} />
					<input type="email" placeholder="Email" ref={emailEl} />
					<input type="tel" placeholder="Phone Number" ref={phoneEl} />
					<input type="text" placeholder="Mailing address" ref={addressEl} />
				</div>
				<button type="submit">{loading ? 'Loading...' : 'Sign Up'}</button>
			</form>
		</div>
	);
}
