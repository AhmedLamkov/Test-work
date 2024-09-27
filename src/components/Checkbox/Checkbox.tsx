import classes from './Checkbox.module.css';

interface Props {
	label: string
}

const Checkbox = ({label}: Props) => {
	return (
		<div className={classes.wrapper}>
			<label className={classes.label}>
				<input  className={classes.input} type="checkbox" />
				<span className={classes.text}>{label}</span>
			</label>
		</div>
	);
};

export default Checkbox;