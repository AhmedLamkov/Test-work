import classes from './MenuBurger.module.css';
import Close from '../Icons/Close';
import { useCallback, useState } from 'react';
import Anchor from './Anchor/Anchor';
import { createPortal } from 'react-dom';
import Logo from '../Icons/Logo';

const MenuBurger = () => {
	const [showModal, setShowModal] = useState(false);
	
	const openModal = useCallback(() => {
		setShowModal(true);
		document.body.classList.add('active');
	}, []);

	const closeModal = useCallback(() => {
		setShowModal(false);
		document.body.classList.remove('active');
	}, []);

	return (
		<div className={classes.menuBurger}>
			<span onClick={openModal} className={classes.line}></span>
			{showModal && createPortal(
				<div className={classes.wrapper}>
					<div className={classes.block}>
						<div className={classes.logo}>
							<Logo />
							<div className={classes.text}>testLab</div>
						</div>
						<div  onClick={closeModal} className={classes.close}>
							<Close />
						</div>
					</div>
					<Anchor onClick={closeModal} />,
				</div>,document.body
			)}	
		</div>
	);
};

export default MenuBurger;