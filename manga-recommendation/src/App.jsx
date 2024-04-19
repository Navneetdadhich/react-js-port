import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "https://api.jikan.moe/v4/random/manga";


function App() {
  const [dataValue, setDataValue] = useState({});
  const [images, setImages] = useState({});
  const getNums = async () => {
    const response = await fetch(`${API_URL}`)
    const data = await response.json()
    setImages(data.data.images)
    setDataValue(data.data)
    console.log(data.data);
  }

  // useEffect(() => {
  //   getNums();
  // }, []);

  
  return (
    <>
      <div className="main">
        <h1>Get Manga Recommendations</h1>
        {/* <input type="number" value={number} onChange={() => {}} /> */}
        <button className="btn" onClick={() => getNums()}>
          Get
        </button>

        <div className="text-area">
          <div className="img">
          <img src={images.jpg && images.jpg.image_url ? images.jpg.image_url : 'https://via.placeholder.com/300'} alt="image" />
          </div>
          <div className="texts">
          <h3>Title : { dataValue.title_english !== null ? dataValue.title_english : dataValue.title}</h3>
          <h4> {dataValue.type}</h4>
          {
          
          dataValue.synopsis?.length > 0 ? (<p>story : {dataValue.synopsis}</p>) : ( <p>data</p> )
          }
          <a href={dataValue.url}>more info</a>
          </div>
          
         
        </div>
      </div>
    </>
  );
}

export default App;
