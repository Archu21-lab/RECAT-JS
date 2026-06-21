import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PhotoScreen() {
  const [photos, setPhotos] = useState([]);
  const [page, SetPage] = useState({ start: 0, end: 9 });
  // const fetchPhotos = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  //   const data = await res.json();
  //   setPhotos(data);
  // };
  const fetchPhotos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
    setPhotos(res.data);
  };

  const handlePagination = (x) => {
    let page;
    if (x == "") {
      page = 1;
    } else {
      page = Number(x);
    }
    const start = (page - 1) * 10;
    const end = start + 9;
    SetPage({ ...page, start, end });
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      {
        photos.map((photo, i) => {
          if (i >= page.start && i <= page.end) {
            return (
              <div key={i}>
                <p>
                  {i + 1}
                  {photo.title}
                </p>
              </div>
            );
          }
          return;
        })
        //     photos.map((photo) => {
        //     return (
        //       <div key={photo.id}>
        //         <p>{photo.title}</p>
        //       </div>
        //     );
        //   })
      }
      <button
        onClick={() => {
          SetPage({
            ...page,
            start: page.start + 10,
            end: page.end + 10,
          });
        }}
      >
        Next++
      </button>
      <div>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li onClick={() => handlePagination(1)} className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li onClick={() => handlePagination(2)} className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li onClick={() => handlePagination(3)} className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
      {/* <input onChange={handlePagination} type="text" /> */}
    </div>
  );
}
