import { Link } from "react-router";
import logo from "./../../assets/images/alfa.png";
import { GithubIcon } from "../../assets/images/GithubIcon";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
			<div className={styles.container}>
			  <div className={styles.logo}>
			    <Link to="https://salfa.ru/" target="_blank">
			  	  <img className={styles.img} src={logo} alt="logo"/>
			  	</Link>
			  </div>
			  <h3 className={styles.year}>2025</h3>
			  <div className={styles.github}>
			  	<Link to="https://github.com/Wood85" target="_blank">
			  	  <GithubIcon className={styles.github_icon}/>
			  	</Link>
			  </div>
			</div>
		</footer>
	)
}

export default Footer;