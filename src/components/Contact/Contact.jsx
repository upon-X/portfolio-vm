import styles from './Contact.module.css'
import ResumeValentinoMicheloni from '../../assets/Resume-Valentino-Micheloni.pdf'
import { GithubSVG, GmailSVG, InstagramSVG, LinkedinSVG, WhatsAppSVG } from '../Svgs'

export default function Contact() {
    const myPhoneNumber = '+543498436701'
    const myEmail = 'valemiche003@gmail.com'
    const wsplink = `https://wa.me/${myPhoneNumber}`
    const iglink = 'https://www.instagram.com/valemiche0/'
    const linkedinlink = 'https://www.linkedin.com/in/valentino-micheloni'
    const emaillink = `https://mail.google.com/mail/?view=cm&to=${myEmail}&su=Contact%20from%20Portfolio`
    const emaillinkapp = `mailto:${myEmail}?subject=Contact%20from%20Portfolio.`
    const githublink = 'https://github.com/upon-X'

    return (
        <>
            <div className={styles.about}>
                <h1 className={styles.title}>About Me</h1>
                <div className={styles.resume}>
                    <p>I studied Full Stack Developer in <a className={styles.to_henry} href='https://www.soyhenry.com/' target='_blank'>Henry´s Bootcamp</a> and a couple of courses from<a className={styles.to_henry} href='https://www.udemy.com/es/' target='_blank'> Udemy</a></p>
                    <p>To see my Resume click the button below, or you can <a className={styles.todownload} href={ResumeValentinoMicheloni} download='Valentino-Micheloni-Resume.pdf'>download it</a></p>
                </div>
                <div className={styles.resume2}>
                    <a href='https://drive.google.com/file/d/1Unv-73VoOsEx3Jyn90hZVM-Mhj2lOr9w/view?usp=drive_link' target='_blank' rel='noopener noreferrer' >
                        <button className={styles.btn_resume}>
                            Resume
                        </button>
                    </a>
                </div>
            </div>
            <h1 className={styles.title}>Contact Media</h1>
            <div className={styles.contact}>
                <a className={styles.linkedin_div} target='_blank' href={linkedinlink}>
                    <h3 className={styles.linkedin_title}>
                        LinkedIn
                    </h3>
                    <div className={styles.logo_svg}>
                        <LinkedinSVG />
                    </div>
                </a>
                <a className={`${styles.email_div} ${styles.email_link_app}`} href={emaillinkapp} target='_blank'>
                    <h3 className={styles.email_title}>
                        E-mail
                    </h3>
                    <div className={styles.email_link}>
                        <GmailSVG />
                    </div>
                </a>
                <a className={`${styles.email_div} ${styles.email_link}`} href={emaillink} target='_blank'>
                    <h3 className={styles.email_title}>
                        E-mail
                    </h3>
                    <div className={styles.email_link}>
                        <GmailSVG />
                    </div>
                </a>
                <a className={styles.wsp_div} href={wsplink} target='_blank'>
                    <h3 className={styles.wsp_title}>
                        WhatsApp
                    </h3>
                    <div className={styles.logo_svg}>
                        <WhatsAppSVG />
                    </div>
                </a>
                <div className={styles.insta_div}>
                    <h3 className={styles.insta_title}>
                        Instagram
                    </h3>
                    <a className={styles.logo_svg} href={iglink} target='_blank'>
                        <InstagramSVG />
                    </a>
                </div>
                <div className={styles.github_div}>
                    <h3 className={styles.github_title}>
                        Github
                    </h3>
                    <a className={styles.logo_svg} href={githublink} target='_blank'>
                        <GithubSVG />
                    </a>
                </div>
            </div>
        </>
    )
}