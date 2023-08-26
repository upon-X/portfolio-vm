import styles from './Contact.module.css'

export default function Contact() {
    const myPhoneNumber = '+543498436701'
    const myEmail = 'valemiche003@gmail.com'
    const wsplink = `https://wa.me/${myPhoneNumber}`
    const iglink = 'https://www.instagram.com/valemiche0/'
    const linkedinlink = 'https://www.linkedin.com/in/valentino-micheloni'
    const emaillink = `https://mail.google.com/mail/?view=cm&to=${myEmail}&su=Contact%20from%20Portfolio`
    const githublink = 'https://github.com/upon-X'

    return (
        <>
            <h1 className={styles.title}>Social Media</h1>
            <div className={styles.contact}>
                <div className={styles.linkedin_div}>
                    <h3 className={styles.linkedin_title}>
                        LinkedIn
                    </h3>
                    <a className={styles.logo_svg} href={linkedinlink} target='_blank'>
                        {/* LINKEDIN SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.linkedin_svg} class="icon icon-tabler icon-tabler-brand-linkedin" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                    </a>
                </div>
                <div className={styles.email_div}>
                    <h3 className={styles.email_title}>
                        E-mail
                    </h3>
                    <a className={styles.logo_svg} href={emaillink} target='_blank'>
                        {/* GMAIL SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.email_svg} class="icon icon-tabler icon-tabler-mail" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                        </svg>
                    </a>
                </div>
                <div className={styles.wsp_div}>
                    <h3 className={styles.wsp_title}>
                        WhatsApp
                    </h3>
                    <a className={styles.logo_svg} href={wsplink} target='_blank'>
                        {/* WHATSAPP SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.wsp_svg} class="icon icon-tabler icon-tabler-brand-whatsapp" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                        </svg>
                    </a>
                </div>
                <div className={styles.insta_div}>
                    <h3 className={styles.insta_title}>
                        Instagram
                    </h3>
                    <a className={styles.logo_svg} href={iglink} target='_blank'>
                        {/* INSTAGRAM SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.insta_svg} class="icon icon-tabler icon-tabler-brand-instagram" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M16.5 7.5l0 .01" />
                        </svg>
                    </a>
                </div>
                <div className={styles.github_div}>
                    <h3 className={styles.github_title}>
                        Github
                    </h3>
                    <a className={styles.logo_svg} href={githublink} target='_blank'>
                        {/* GITHUB SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" className={styles.github_svg} class="icon icon-tabler icon-tabler-brand-github" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                        </svg>
                    </a>
                </div>

            </div>
        </>
    )
}