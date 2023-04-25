import styles from './Header.module.css';
import simpleStyles from '../commonStyles/simpleButton.module.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from 'react';

export default function Navigation() {
	const { user } = useAuthContext();
	const [showNav, setShowNav] = useState(true)
	function showNavbar() {
		setShowNav(!showNav)
	}
	function onLinkClick() {
		setShowNav(true)
	}
	return (
		<header className={styles.header}>

			<nav className={styles.navbar}>
				<div className={styles.logo}>
					<Link to="/" onClick={onLinkClick}>FEAR</Link>
				</div>
				<ul role="list" className={`${styles.links} ${showNav ? styles.active : ""}`}>
					<li><Link to="/" onClick={onLinkClick}>Home</Link></li>
					<li><Link to="/fears" onClick={onLinkClick}>Catalog</Link></li>
					<li><Link to="/about" onClick={onLinkClick}>About</Link></li>
					<li><Link to="/contactus" onClick={onLinkClick}>Contact Us</Link></li>
					<li><Link to="/map" onClick={onLinkClick}>Fears Map</Link></li>
					{user &&
						<li><Link to="/create" onClick={onLinkClick}>Create Fear</Link></li>
					}
					{user &&
						<li><Link to="/profile" onClick={onLinkClick}>Profile</Link></li>
					}
					{user ?
						<div className={styles.btns}>
							<Link className={simpleStyles.simple} onClick={onLinkClick} to="/logout">Logout</Link>
						</div>
						:
						<div className={styles.btns}>
							<Link className={simpleStyles.simple} onClick={onLinkClick} to="/login">Login</Link>
							<Link className={simpleStyles.simple} onClick={onLinkClick} to="/register">Register</Link>
						</div>
					}
				</ul>
				<button onClick={showNavbar} className={styles.toggle}>
					{showNav ?
						<i className="fa-solid fa-bars" ></i>
						:
						<i class="fa-solid fa-xmark"></i>
					}
				</button>
			</nav>
		</header>
	);
};

