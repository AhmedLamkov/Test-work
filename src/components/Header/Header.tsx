import classes from './Header.module.css';
import Logo from "../Icons/Logo";
import Links from "../Links";
import MenuBurger from '../MenuBurger';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Logo />
				<div className={classes.text}>testLab</div>
			</div>
			<Links />
			<MenuBurger />
		</header>
	);
};

export default Header;