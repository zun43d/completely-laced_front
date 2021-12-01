import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { addEmail } from '../lib/sanityDb';

import { IconContext } from 'react-icons';
import {
	FaFacebook,
	FaTwitter,
	FaTiktok,
	FaInstagram,
	FaPinterest,
	FaYoutube,
} from 'react-icons/fa';

export default function Home() {
	const fullNameEl = useRef();
	const addressEl = useRef();
	const phoneEl = useRef();
	const emailEl = useRef();

	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const fullName = fullNameEl.current.value;
		const address = addressEl.current.value;
		const phone = phoneEl.current.value;
		const email = emailEl.current.value;
		await addEmail(fullName, address, phone, email).then((res) => {
			setLoading(false);
			fullNameEl.current.value = '';
			addressEl.current.value = '';
			phoneEl.current.value = '';
			emailEl.current.value = '';
			setSubmitted(true);
			// alert('Thank you for signing up for our newsletter!');
		});
	};

	return (
		<div className={`${styles.container} ${submitted ? styles.centerCon : ''}`}>
			<Head>
				<title>Completely Laced | Opening soon</title>
			</Head>

			{submitted ? (
				<>
					<div className={styles.confirm}>
						<Image
							src="/Confirmed.png"
							width={1010}
							height={400}
							alt="You've been confirmed! Thank you!"
						/>
					</div>
				</>
			) : (
				<>
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
						Sign up for exclusive updates, early preview at inventory, free
						product, newsletter & discount codes...
					</div>
					<form onSubmit={handleSubmit} className={styles.form}>
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
							<input
								type="text"
								placeholder="Mailing address"
								ref={addressEl}
							/>
						</div>
						<button disabled={loading} type="submit">
							{loading ? 'Loading...' : 'Sign Up'}
						</button>
					</form>
				</>
			)}

			<div className={styles.socials}>
				<p style={{ textAlign: 'center' }}>Follow, Like, Save & Subscribe</p>
				<IconContext.Provider
					value={{ color: 'rgb(50, 50, 50)', className: styles.icons }}
				>
					<a href="https://facebook.com" target="_blank" rel="noreferrer">
						<FaFacebook />
					</a>
					<a href="https://instagram.com" target="_blank" rel="noreferrer">
						<FaInstagram />
					</a>
					<a href="https://twitter.com" target="_blank" rel="noreferrer">
						<FaTwitter />
					</a>
					<a href="https://tiktok.com" target="_blank" rel="noreferrer">
						<FaTiktok />
					</a>
					<a href="https://pinterest.com" target="_blank" rel="noreferrer">
						<FaPinterest />
					</a>
					<a href="https://youtube.com" target="_blank" rel="noreferrer">
						<FaYoutube />
					</a>
				</IconContext.Provider>
			</div>
		</div>
	);
}
