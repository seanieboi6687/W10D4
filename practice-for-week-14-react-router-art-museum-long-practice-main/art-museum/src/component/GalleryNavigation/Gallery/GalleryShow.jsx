import React from "react";
import harvardArt from "../../../data/harvardArt";
import { useParams } from "react-router-dom";

function GalleryShow() {
  const { id } = useParams();

  const galleryData = harvardArt.records.find((gallery) => {
    if (gallery.id === parseInt(id)) {
      return gallery;
    }
  });
  console.log(galleryData);
  return (
    <div>
      <ul>
        <li>Name: {galleryData.name}</li>
        <li>Info: {galleryData.labeltext}</li>
      </ul>
    </div>
  );
}

export default GalleryShow;
