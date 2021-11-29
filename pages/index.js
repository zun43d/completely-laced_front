import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	const emailEl = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = emailEl.current.value;
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Completely Laced | Opening soon</title>
			</Head>

			<div className={styles.logo}>
				<Image
					src="/completely-laced.png"
					width={300}
					height={300}
					alt="Completely Laced"
					layout="responsive"
				/>
			</div>
			<h1 className={styles.open}>Opening Soon</h1>
			<p className={styles.first}>Be the first to know when we launch</p>
			<div className={styles.promo} style={{ textAlign: 'center' }}>
				Promotions, new offers and sales. Directly to your inbox.
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
				<button type="submit">Sign up</button>
			</form>
		</div>
	);
}
