import styles from './Search.module.css'

const SearchBar = ({...rest}) => {
    return (
        <div className={styles.block_search}>
            <input className={styles.block_input} {...rest}/>
        </div>
    )
}

export default SearchBar
