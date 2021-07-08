import styles from './Blocks.module.css'
import Link from 'next/link'

const Blocks = ({Hash, Time, Height}) => {

    return (
      <Link href='/block/[id]' as={`/block/${Hash}`}>
            <a>
        <div className={styles.block_container}>
            
            <div className={styles.block_row}>
                <div className={styles.block}>
                <h1 className={styles.block_h1}>{Hash}</h1>
                </div>
                <div className={styles.block_data}>
                <p className={styles.block_time}>{Time}</p>
                <p className={styles.block_height}>{Height}</p>
                </div>
            </div>
        </div>
        </a>
        </Link>
    )
}

export default Blocks
