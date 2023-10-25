import { useEffect,useState } from 'react';
import './App.css';
// import Card from './component/Card/Card';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
import { fetchTopAlbums} from './api';
import Section from "./component/Section/Section";

function App() {
  const [topAlbumsData,setTopAlbumsData] = useState([]);
  
  const generateTopAlbumsData = async() => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };


   useEffect(()=>{
    generateTopAlbumsData();
   },[]);


  return (
    <div >
      <Navbar/>
      <Hero/>
      {/* {
        topAlbumsData.map((item)=>{
          return(
            <Card data={item} type="album"/>
          )
        })
      } */}
      <div>
        <Section data={topAlbumsData} type="album" title="Top Albums" />
      </div>
    </div>
  );
}

export default App;
