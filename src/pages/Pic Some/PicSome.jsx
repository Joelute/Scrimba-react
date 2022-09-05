import Header from './component/Header'
import styles from './PicSome.module.css'

export default function App() {
    return (
        <div className ={styles['app']}>
            <Header />
            <h1>Home Page</h1>
        </div>
    )
}