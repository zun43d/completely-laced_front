import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import styles from '../styles/Home.module.css';

export default function Home() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const [loading, setLoading] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSignUp = async (data) => {
		setLoading(true);
		const { fullName, address, email, phone } = data;
		// await addEmail(fullName, address, phone, email).then((res) => {
		// 	setLoading(false);
		// 	reset();
		// 	setSubmitted(true);
		// 	// alert('Thank you for signing up for our newsletter!');
		// });

		await fetch('/api/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ fullName, address, email, phone }),
		})
			.then((res) => {
				res.json();
			})
			.then((res) => {
				console.log(res);
				setLoading(false);
				reset();
				setSubmitted(true);
			})
			.catch(() => {
				alert('Sorry, something really went wrong! Try again.');
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
							priority
						/>
					</div>
					<h1 className={styles.open}>
						<svg
							width="714"
							height="91"
							viewBox="0 0 714 91"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M32.8 0.5C53.2 0.5 65.3 16.6 65.3 45.8C65.3 75 53.2 90.9 32.8 90.9C12.4 90.9 0.200012 74.9 0.200012 45.8C0.200012 16.6 12.4 0.5 32.8 0.5V0.5ZM32.8 68.7C39.4 68.7 40.7 61.4 40.7 45.2C40.7 29.1 39.4 21.7 32.8 21.7C26.2 21.7 24.7 29.1 24.7 45.2C24.8 61.4 26.2 68.7 32.8 68.7V68.7ZM72.5 2.2H98.4C120.4 2.2 130.9 11.7 130.9 32.2C130.9 49.6 119.8 60.1 101.9 60.1H96.9V89.1H72.6V2.2H72.5ZM96.7 40C104.1 39.9 107.6 37.1 107.6 30.5C107.6 24.2 104.3 20.7 97.7 20.7H96.7V40V40ZM136.7 2.2H179.9V23.3H161.1V34.4H178.1V54.8H161.1V66.8H179.9V89.2H136.7V2.2V2.2ZM188.5 2.2H212.7L226 48V2.2H248.1V89.2H224.2L210.7 45.6V89.2H188.5V2.2V2.2ZM259 2.2H283.3V89.2H259V2.2ZM294.2 2.2H318.4L331.8 48V2.2H353.9V89.2H330L316.5 45.6V89.2H294.3V2.2H294.2ZM425.1 46.2C425.1 76.3 415.5 90.8 394.6 90.8C374.2 90.8 362 74.8 362 45.7C362 16.4 374.1 0.400002 395.1 0.400002C410.2 0.400002 419.3 7.1 424 21.6L402.9 28.8C401.1 22.9 398.8 20.3 394.7 20.3C388 20.3 386.5 28.1 386.5 44.6C386.5 61.1 388 68.6 394.6 68.6C399.1 68.6 401.3 64.8 401.3 57.3V56.1H394.1V38.4H424.8C425 41.1 425.1 43.7 425.1 46.2ZM476.5 68.7C480.5 68.7 483.2 66 483.2 62.6C483.2 59.4 480.5 57 476.6 53.3C466.4 43.8 459.5 37.1 459.5 25.7C459.5 11.2 470.4 0.400002 486.2 0.400002C492.3 0.400002 498.9 2.1 505.8 5.4V28C499.9 23.4 494.8 21 490.7 21C486.9 21 484.6 23.2 484.6 26.2C484.6 29.7 487.5 31.8 491.6 35C502.6 43.8 508.9 49.8 508.9 62.6C508.9 79.6 497.3 90.8 479.5 90.8C472.5 90.8 466.1 88.6 459.2 84.2V60.2C466.5 66 472.3 68.7 476.5 68.7ZM545 0.5C565.4 0.5 577.5 16.6 577.5 45.8C577.5 75 565.4 90.9 545 90.9C524.6 90.9 512.4 74.9 512.4 45.8C512.5 16.6 524.7 0.5 545 0.5V0.5ZM545 68.7C551.6 68.7 552.9 61.4 552.9 45.2C552.9 29.1 551.6 21.7 545 21.7C538.4 21.7 537 29 537 45.2C537 61.4 538.5 68.7 545 68.7ZM614.5 0.5C634.9 0.5 647 16.6 647 45.8C647 75 634.9 90.9 614.5 90.9C594.1 90.9 581.9 74.9 581.9 45.8C581.9 16.6 594.1 0.5 614.5 0.5V0.5ZM614.5 68.7C621.1 68.7 622.4 61.4 622.4 45.2C622.4 29.1 621.1 21.7 614.5 21.7C607.9 21.7 606.4 29.1 606.4 45.2C606.4 61.4 607.9 68.7 614.5 68.7ZM654.2 2.2H678.4L691.8 48V2.2H713.9V89.2H690L676.5 45.6V89.2H654.3V2.2H654.2Z"
								fill="black"
							/>
						</svg>
					</h1>
					<p className={styles.first}>BE THE FIRST TO KNOW WHEN WE LAUNCH</p>
					<div className={styles.promo} style={{ textAlign: 'center' }}>
						<span className={styles.boldGold}>RSVP</span> SIGN UP FOR{' '}
						<span className={styles.boldGold}>EXCLUSIVE</span> UPDATES,{' '}
						<span className={styles.boldGold}>INVENTORY</span> PREVIEW, EARLY{' '}
						<span className={styles.boldGold}> ACCESS</span>, PRODUCT{' '}
						<span className={styles.boldGold}>GIFTING</span>,{' '}
						<span className={styles.boldGold}>NEWSLETTER</span>, PRIVATE{' '}
						<span className={styles.boldGold}> SALES</span> &{' '}
						<span className={styles.boldGold}>EXTENDED</span> DISCOUNTS
					</div>
					<form onSubmit={handleSubmit(handleSignUp)} className={styles.form}>
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '1fr 1fr',
								gap: '5px',
								alignItems: 'center',
							}}
						>
							<input
								type="text"
								placeholder="Full Name"
								className={errors.fullName && styles.errorInput}
								{...register('fullName', { required: true })}
							/>
							<input
								type="email"
								placeholder="Email"
								className={errors.email && styles.errorInput}
								{...register('email', { required: true })}
							/>
							<input
								type="tel"
								placeholder="Phone Number"
								className={errors.phone && styles.errorInput}
								{...register('phone', { required: true })}
							/>
							<input
								type="text"
								placeholder="Mailing address"
								className={errors.address && styles.errorInput}
								{...register('address', { required: true })}
							/>
						</div>
						<button disabled={loading} type="submit">
							{loading ? 'Loading...' : 'Sign Up'}
						</button>
					</form>
				</>
			)}

			<div className={styles.socials}>
				<p style={{ textAlign: 'center' }}>
					FOLLOW <span className={styles.boldGold}>|</span> LIKE{' '}
					<span className={styles.boldGold}>|</span> SAVE{' '}
					<span className={styles.boldGold}>|</span> SHARE{' '}
					<span className={styles.boldGold}>|</span> SUBSCRIBE
				</p>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<span className={styles.icons}>
						<a href="https://facebook.com" target="_blank" rel="noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
								<path
									fill="#039be5"
									d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
								/>
								<path
									fill="#fff"
									d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
								/>
							</svg>
						</a>
					</span>
					<span className={styles.icons}>
						<a
							href="https://instagram.com/completelylaced/"
							target="_blank"
							rel="noreferrer"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
								<radialGradient
									id="yOrnnhliCrdS2gy~4tD8ma"
									cx="19.38"
									cy="42.035"
									r="44.899"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0" stopColor="#fd5" />
									<stop offset=".328" stopColor="#ff543f" />
									<stop offset=".348" stopColor="#fc5245" />
									<stop offset=".504" stopColor="#e64771" />
									<stop offset=".643" stopColor="#d53e91" />
									<stop offset=".761" stopColor="#cc39a4" />
									<stop offset=".841" stopColor="#c837ab" />
								</radialGradient>
								<path
									fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
									d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
								/>
								<radialGradient
									id="yOrnnhliCrdS2gy~4tD8mb"
									cx="11.786"
									cy="5.54"
									r="29.813"
									gradientTransform="matrix(1 0 0 .6663 0 1.849)"
									gradientUnits="userSpaceOnUse"
								>
									<stop offset="0" stopColor="#4168c9" />
									<stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
								</radialGradient>
								<path
									fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
									d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
								/>
								<path
									fill="#fff"
									d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
								/>
								<circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
								<path
									fill="#fff"
									d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
								/>
							</svg>
						</a>
					</span>
					<span className={styles.icons}>
						<a
							href="https://twitter.com/CompletelyLaced"
							target="_blank"
							rel="noreferrer"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
								<path
									fill="#03A9F4"
									d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
								/>
							</svg>
						</a>
					</span>
					<span className={styles.icons}>
						<a href="https://tiktok.com" target="_blank" rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="48px"
								height="48px"
							>
								<path
									fill="#212121"
									fillRule="evenodd"
									d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z"
									clipRule="evenodd"
								/>
								<path
									fill="#ec407a"
									fillRule="evenodd"
									d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z"
									clipRule="evenodd"
								/>
								<path
									fill="#fff"
									fillRule="evenodd"
									d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z"
									clipRule="evenodd"
								/>
								<path
									fill="#81d4fa"
									fillRule="evenodd"
									d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</span>
					<span className={styles.icons}>
						<a href="https://pinterest.com" target="_blank" rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="48px"
								height="48px"
							>
								<circle cx="24" cy="24" r="20" fill="#E60023" />
								<path
									fill="#FFF"
									d="M24.4439087,11.4161377c-8.6323242,0-13.2153931,5.7946167-13.2153931,12.1030884	c0,2.9338379,1.5615234,6.5853882,4.0599976,7.7484131c0.378418,0.1762085,0.581543,0.1000366,0.668457-0.2669067	c0.0668945-0.2784424,0.4038086-1.6369019,0.5553589-2.2684326c0.0484619-0.2015381,0.0246582-0.3746338-0.1384277-0.5731201	c-0.8269653-1.0030518-1.4884644-2.8461304-1.4884644-4.5645752c0-4.4115601,3.3399658-8.6799927,9.0299683-8.6799927	c4.9130859,0,8.3530884,3.3484497,8.3530884,8.1369019c0,5.4099731-2.7322998,9.1584473-6.2869263,9.1584473	c-1.9630737,0-3.4330444-1.6238403-2.9615479-3.6153564c0.5654297-2.3769531,1.6569214-4.9415283,1.6569214-6.6584473	c0-1.5354004-0.8230591-2.8169556-2.5299683-2.8169556c-2.006958,0-3.6184692,2.0753784-3.6184692,4.8569336	c0,1.7700195,0.5984497,2.9684448,0.5984497,2.9684448s-1.9822998,8.3815308-2.3453979,9.9415283	c-0.4019775,1.72229-0.2453003,4.1416016-0.0713501,5.7233887l0,0c0.4511108,0.1768799,0.9024048,0.3537598,1.3687744,0.4981079l0,0	c0.8168945-1.3278198,2.0349731-3.5056763,2.4864502-5.2422485c0.2438354-0.9361572,1.2468872-4.7546387,1.2468872-4.7546387	c0.6515503,1.2438965,2.5561523,2.296936,4.5831299,2.296936c6.0314941,0,10.378418-5.546936,10.378418-12.4400024	C36.7738647,16.3591919,31.3823242,11.4161377,24.4439087,11.4161377z"
								/>
							</svg>
						</a>
					</span>
					<span className={styles.icons}>
						<a href="https://youtube.com" target="_blank" rel="noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								width="48px"
								height="48px"
							>
								<path
									fill="#FF3D00"
									d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
								/>
								<path fill="#FFF" d="M20 31L20 17 32 24z" />
							</svg>
						</a>
					</span>
				</div>
			</div>
		</div>
	);
}
