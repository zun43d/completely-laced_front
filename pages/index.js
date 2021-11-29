import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { addEmail } from '../lib/sanityDb';

export default function Home() {
	const emailEl = useRef();
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const email = emailEl.current.value;
		await addEmail(email).then((res) => {
			setLoading(false);
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
				<br />
				<br />
				<br />
				<Image
					src="/completely-laced-artwork-logo.png"
					width={400}
					height={400}
					alt="Completely Laced"
					layout="responsive"
				/>
			</div>

			<br />
			<br />
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
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<input
					type="email"
					placeholder="Enter your email address"
					id=""
					ref={emailEl}
				/>
				<button type="submit">{loading ? 'Loading...' : 'Sign Up'}</button>
			</form>

			<div
				style={{
					height: '200px',
					width: '100%',
					display: 'inline-block',
					color: 'white',
				}}
			>
				<br />
			</div>
		</div>
	);
}
