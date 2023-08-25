import styles from './Projects.module.css'

export default function Projects() {
    return (
        <div className={styles.projects}>
            <h1 className={styles.title}>A list of my projects</h1>
            <ul>
                <li>
                    <h2>BlogDeCafe</h2>
                    <p className={styles.project_p}>This one, is about a coffee blog, made with HTML and CSS (soon I will include JavaScript)</p>
                    <a className={styles.linkto} href="https://blogdecafe.netlify.app/" target='_blank'>Link to project</a>
                </li>
                <li>
                    <h2>SPA Chevrolet</h2>
                    <p className={styles.project_p}>Its a Single Page Aplication to show information for Chevrolet in Argentina (no professional)</p>
                    <a className={styles.linkto} href="https://model-chevrolet.netlify.app/" target='_blank'>Link to project</a>
                </li>
                <li>
                    <h2>Calculator</h2>
                    <p className={styles.project_p}>A calculator, just that...</p>
                    <a className={styles.linkto} href="https://vmcalculadora.netlify.app/" target='_blank'>Link to project</a>
                </li>
            </ul>
        </div>
    )
}