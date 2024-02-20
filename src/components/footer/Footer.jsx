
import Link from "next/link"
import styles from "./footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
            Copyright © ISTECode
        </div>
        <div className={styles.socials}>
            <Link href="https://www.instagram.com/zoro_06._/" target="_blank"><InstagramIcon /></Link>
            <Link href=""><LinkedInIcon/></Link>
            <Link href=""><GitHubIcon/></Link>
        </div>
    </div>
  )
}

export default Footer;