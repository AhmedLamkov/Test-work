import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer>
			<div className={classes.footer}>
				<div className={classes.wrapper}>
					<span className={classes.copyRight}>© 2021 Лаборатория интернет</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;