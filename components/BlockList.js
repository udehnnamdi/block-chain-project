import Blocks from './Blocks'
import { Fragment } from 'react';
import styles from './BlockList.module.css'

export default function BlockList({filteredBlocks}) {
return(
    <Fragment>
 
        <div className={styles.block_row}>
                <span className={styles.span_class}>Hash</span>
                <span className={styles.span_class}>Time</span>
                <span className={styles.span_class}>Height</span>
        </div>

        
    {filteredBlocks.map(block =>{
        return <Blocks
        key={block.block_index}
        Hash={block.hash}
        Time={block.time}
        Height={block.height}
        />;
    })}
    </Fragment>
 );
}