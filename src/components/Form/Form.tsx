import { useState, useCallback, FormEvent } from 'react';
import classes from './Form.module.css';
import Input from '../Input';
import Checkbox from '../Checkbox';

interface Errors {
	name?: boolean;
	phone?: boolean;
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
			setErrors( prev => ({ ...prev, name: true }))
		} else {
			setErrors(prev => ({ ...prev, name: undefined }))
		}
	}, []);

	const onValidatePhone = useCallback((e: FormEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;

		if(value.length < 11) {
			setErrors(prev => ({ ...prev, phone: true }))
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
						<Input onValidate={onValidateName} label='Имя' name='name' error={errors.name} />
						<Input onValidate={onValidatePhone} type='tel' name='phone' label='Телефон' error={errors.phone} />
					</div>
					<div className={classes.block}>
						<Checkbox label={'Согласен, отказываюсь'}></Checkbox>
						<button type='submit' className={classes.button}>Отправить</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default Form;