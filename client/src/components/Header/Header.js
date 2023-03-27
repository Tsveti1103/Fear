import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import {  useAuthContext } from "../../contexts/AuthContext";
export default function Navigation() {
	const { user } = useAuthContext();
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>

				<div className={styles.logo}>
					<Link to="/">FEAR</Link>
				</div>
				<ul role="list" className={styles.links}>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/fears">Catalog</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contactus">Contact Us</Link></li>
					<li><Link to="/profile">Profile</Link></li>
					<li><Link to="/create">Create</Link></li>
				</ul>
				{user ?
					<div className={styles.right}>
						<Link to="/logout">Logout</Link>
					</div>
					:
					<div className={styles.right}>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</div>

				}

				<div className={styles.toggle}>
					<div className={styles.line1}></div>
					<div className={styles.line2}></div>
					<div className={styles.line3}></div>
				</div>
			</nav>
		</header>
	);
};

