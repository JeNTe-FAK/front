// src/components/ImageGallery.js

import React from 'react';
import mainLogoWithName from '../images/JeNTe-fak-01.png';
import mainLogoWithoutName from '../images/JeNTe-fak-02.png';
import nameLogoBlack from '../images/nameLogoBlack.png';
import nameLogoPurple from '../images/nameLogoPurple.png';
import nameLogoWhite from '../images/nameLogoWhite.png';
import code from '../images/JeNTe-fak-06.png';
import triangle from '../images/JeNTe-fak-07.png';
import graph from '../images/JeNTe-fak-08.png';
import molecule from '../images/JeNTe-fak-09.png';

const images = {
  mainLogoWithName: { src: mainLogoWithName, alt: "Main Logo With Name" },
  mainLogoWithoutName: { src: mainLogoWithoutName, alt: "Main Logo Without Name" },
  nameLogoBlack: { src: nameLogoBlack, alt: "Name Logo Black" },
  nameLogoPurple: { src: nameLogoPurple, alt: "Name Logo Purple" },
  nameLogoWhite: { src: nameLogoWhite, alt: "Name Logo White" },
  code: { src: code, alt: "Code" },
  triangle: { src: triangle, alt: "Triangle" },
  graph: { src: graph, alt: "Graph" },
  molecule: { src: molecule, alt: "Molecule" },
};

const ImageGallery = ({ imageName }) => {
  const image = images[imageName];

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <div>
      <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default ImageGallery;
