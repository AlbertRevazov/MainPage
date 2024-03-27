import { FC } from 'react'
import { useFormHook } from './hooks'
import styles from './Form.module.css'

export const Form: FC = () => {
	const { handleChange, handleTextAreaChange, handleSubmit, toSend } =
		useFormHook()

	return (
		<div className={styles.wrapper}>
			<div className={styles.email}>
				<div className={styles.title}>
					I’m always open to discussing
					<span className={styles.span}> product develop work </span> or
					partnership
				</div>
				<form id='Email' onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.contact__inputs}>
						<div className={styles.input_wrapper}>
							<span className={styles.input_title}>Your name*</span>
							<input
								id='name'
								type='text'
								name='name'
								autoComplete='off'
								value={toSend.name}
								onChange={handleChange}
								className={styles.input}
								placeholder='Enter your name here'
							/>
						</div>
						<div className={styles.input_wrapper}>
							<span className={styles.input_title}>Your email*</span>
							<input
								id='email'
								type='text'
								autoComplete='off'
								name='email'
								value={toSend.email}
								onChange={handleChange}
								className={styles.input}
								placeholder='Enter your email here'
							/>
						</div>
					</div>
					<div className={styles.message}>
						<span>Message</span>
						<textarea
							className={styles.input_message}
							name='message'
							autoComplete='off'
							value={toSend.message}
							onChange={handleTextAreaChange}
						/>
					</div>
					<button type='submit' className={styles.btn}>
						<span>send Message</span>
					</button>
				</form>
			</div>
		</div>
	)
}
