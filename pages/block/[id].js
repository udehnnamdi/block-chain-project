import Layout from '../../components/Layout';
import styles from './Block.module.css';

const Block = ({ block }) => {
  return (
    <Layout>
      <div className={styles.block_page}>
        <div className={styles.block_container}>
          <h1 className={styles.block_size}><span className={styles.block_span} >Size:</span>{block.size}</h1>
          <p className={styles.block_index}><span className={styles.block_span} >Block Index:</span>{block.block_index}</p>
          <p className={styles.prev_block}><span className={styles.block_span} >Previous Hash:</span>{block.prev_block}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Block;


export async function getServerSideProps(context) {
    const { id } = context.query;
  
    const res = await fetch(`https://blockchain.info/rawblock/${id}`);
  
    const data = await res.json();
  
    return {
      props: {
        block: data
      }
    };
  }