import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/gridThree.css";
import downloadBtn3d from "../gallery/downloadBtn3d.png";

const GridThree = (props) => {
  const { data } = props;
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    if (data) {
      console.log("data: ", data);
      setNewData(data);
    }
  }, [data]);

  const handleDownload = (imageUrl, fileName) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', imageUrl, true);
    xhr.responseType = 'blob';

    xhr.onload = () => {
      const blob = xhr.response;
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    };

    xhr.send();
  };

  return (
    <div className="gridContainer">
      {newData.map((el, index) => {
        return (
          <div key={index} className="gridChild">
            <div className="imgContainer">
              <img src={el.src.portrait} alt={el.alt} />
              <button onClick={() => handleDownload(el.src.original, el.alt)}>
                <img
                  src={downloadBtn3d}
                  alt="DownloadButton"
                  title="Donwload"
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridThree;
