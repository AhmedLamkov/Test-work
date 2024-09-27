import { useState, useCallback, FormEvent } from 'react';
import classes from './Form.module.css';
import Input from '../Input';

interface Errors {
	name?: string;
	phone?: string;
}

const Form = () => {
	const [errors, setErrors] = useState<Errors>({});

	const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		fetch( 'https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: formData,
		});
	}, []);


	const onValidateName = useCallback((e: FormEvent<HTMLInputElement>)=> {
		const { value } = e.currentTarget;

		if(value.length < 2) {
			setErrors( prev => ({ ...prev, name: 'Слишком короткое имя' }))
		} else {
			setErrors(prev => ({ ...prev, name: undefined }))
		}
	}, []);

	const onValidatePhone = useCallback((e: FormEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;

		if(value.length < 11) {
			setErrors(prev => ({ ...prev, phone: 'Номер телефона слишком короткий' }))
		} else {
			setErrors(prev => ({ ...prev, phone: undefined }))
		}
	}, []);

	return (
		<section>
			<form onSubmit={handleSubmit} id='Form' className={classes.form}>
				<h2 className={classes.title}>Отправь форму</h2>
				<div className={classes.wrapper}>
					<div className={classes.block}>
						<Input onValidate={onValidateName} label='Имя' name='name' errorMessage={errors.name} />
						<Input onValidate={onValidatePhone} type='tel' name='phone' label='Телефон' errorMessage={errors.phone} />
					</div>
					<div className={classes.block}>
						<label className={classes.checkbox}>
							<input className={classes.check} type="checkbox" name='agreement' />
							<span>Согласен, отказываюсь</span>
						</label>
						<button type='submit' className={classes.button}>Отправить</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default Form;