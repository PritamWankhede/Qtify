import { useEffect,useState } from 'react';
import './App.css';
import Hero from './component/Hero/Hero';
import Navbar from './component/Navbar/Navbar';
// import { fetchTopAlbums} from './api';
import Section from "./component/Section/Section";
import Anothertab from './component/Tab/Anothertab';
import Faqs from './component/Faqs/Faqs';
import {fetchTopAlbums, fetchNewAlbums, fetchSongs} from "./api"

function App() {
  const [topAlbumsData,setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
 
  const [songsData, setSongsData] = useState([]);
  const [filteredDatValues, setFilteredDataValues] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };
  
  useEffect(() => {
    generateSongsData(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };
  
  const generateTopAlbumsData = async() => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const generateNewAlbumsData = async () => {
    try {
      const data = await fetchNewAlbums();
      console.log(data);
      setNewAlbumsData(data);
    } catch (err) {
      console.error(err);
    }
  };


   useEffect(()=>{
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateAllSongsData();
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
        <Section data={newAlbumsData} type="album" title="New Albums" />
        <Anothertab
          data={songsData}
          type="song"
          title="Songs"
          filteredData={filteredData}
          filteredDatValues={filteredDatValues}
          value={value}
          handleChange={handleChange}
        />
        <Faqs/>
      </div>
    </div>
  );
}

export default App;
