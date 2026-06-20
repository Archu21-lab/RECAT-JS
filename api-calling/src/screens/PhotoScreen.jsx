import React, { useState, useEffect } from "react";

export default function PhotoScreen() {
  const [photos, setPhotos] = useState([]);
  const [page, SetPage] = useState({ start: 0, end: 9, page: 1 });
  const fetchPhotos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    setPhotos(data);
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
                <p>{photo.title}</p>
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
    </div>
  );
}
