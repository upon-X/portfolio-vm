import styles from './Projects.module.css'

export default function Projects() {
    return (
        <div className={styles.project}>
            <h1 className={styles.title}>A list of my projects</h1>
            <a className={styles.togithub} href='https://github.com/upon-X' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.github_svg} class="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            </a>
            <ul className={styles.links}>
                <li className={styles.project_li}>
                    <h2 className={styles.name_project}>BlogDeCafe</h2>
                    <p className={styles.project_p}>This one, is about a coffe blog, made with HTML and CSS (soon I will include JavaScript)</p>
                    <a className={styles.linkto} href="https://blogdecafe.netlify.app/" target='_blank'>Link to project</a>
                </li>
                <li className={styles.project_li}>
                    <h2 className={styles.name_project}>SPA Chevrolet</h2>
                    <p className={styles.project_p}>Its a Single Page Aplication to show information for Chevrolet in Argentina (not finish yet)</p>
                    <a className={styles.linkto} href="https://model-chevrolet.netlify.app/" target='_blank'>Link to project</a>
                </li>
                <li className={styles.project_li}>
                    <h2 className={styles.name_project}>Calculator</h2>
                    <p className={styles.project_p}>A calculator, just that...</p>
                    <a className={styles.linkto} href="https://vmcalculadora.netlify.app/" target='_blank'>Link to project</a>
                </li>
            </ul>
        </div>
    )
}