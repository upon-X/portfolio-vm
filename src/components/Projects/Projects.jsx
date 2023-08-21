import styles from './Projects.module.css'

export default function Projects() {
    return (
        <div className={styles.projects}>
            <p>Here you can find a list of my projects i developed</p>
            <ul>
                <li>
                    <h2>BlogDeCafe</h2>
                    <p>This one, is about a coffee blog, made with HTML and CSS</p>
                    <a href="https://blogdecafe.netlify.app/" target='_blank'>Link to project</a>
                </li>
                <li>
                    <h2></h2>
                    <p>This one, is about a coffee blog, made with HTML and CSS</p>
                    <a href="https://blogdecafe.netlify.app/" target='_blank'>Link to project</a>
                </li>
            </ul>
        </div>
    )
}