import { useState } from 'react';
import BlockList from '../components/BlockList'
import SearchBar from '../components/SearchBar'
import Layout from '../components/Layout'

export default function Home({filteredBlocks}) {
  const [search, setSearch] = useState('');

  const allBlocks = filteredBlocks.filter(block =>
    block.height.toString().includes(search)
  );

  const handleChange = e => {
    e.preventDefault();

    setSearch(e.target.value);
  };

  return (

    <Layout>
      <div className="block_app">
      <SearchBar type="text" placeholder="Search by height" onChange={handleChange}/> 
     <BlockList filteredBlocks={allBlocks}/>
     </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://blockchain.info/blocks/1573858800000?format=json')

  const filteredBlocks = await res.json();

  // let filteredBlocks = []
  // filteredBlocks.push(fetchedBlocks)

  return {
    props: {
    filteredBlocks
    }
  };
};
