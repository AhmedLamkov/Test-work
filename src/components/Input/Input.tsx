import classNames from 'classnames';
import classes from './Input.module.css';
import { FormEvent, useCallback, useState } from 'react';
import Cheked from '../Icons/Cheked';
import Cancel from '../Icons/Cancel';

interface Props {
	type?: string;
	name: string;
	value?: string;
	label: string;
	errorMessage?: string;
	onValidate: (e: FormEvent<HTMLInputElement>) => string | void;
};


const Input  = ({ type = 'text', label, onValidate, errorMessage, name }: Props) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	
	const handleonFocus = useCallback(()=> {
		setIsFocused(true)
	},[]);

	const handleBlur = useCallback((e: FormEvent<HTMLInputElement>)=> {
		onValidate(e)
		setIsFocused(false)
	},[onValidate]);

	const onChange = useCallback(( e: FormEvent<HTMLInputElement> )=> {
		if (e.currentTarget.value) return setIsFilled(true);

		setIsFilled(false);
	},[]);

	return (
		<div className={classNames(classes.wrapper, { [classes.focused]: isFocused, [classes.filled]: isFilled, [classes.error]: errorMessage, })}>
			<label className={classes.label}>{label}</label>
			<input onFocus={handleonFocus} onChange={onChange} onBlur={handleBlur} className={classes.input} type={type} name={name}></input>
			<div className={classes.cheked}>
				<Cheked/>
			</div>
			<div className={classes.cancel}>
				<Cancel/>
			</div>
		</div>
	);
};

export default Input;