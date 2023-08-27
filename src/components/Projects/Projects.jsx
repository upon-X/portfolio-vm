import styles from './Projects.module.css'

export default function Projects() {
    return (
        <div className={styles.project}>
            <h1 className={styles.title}>A list of my projects</h1>
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