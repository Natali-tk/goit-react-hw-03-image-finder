import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({images,onSelect}) => {
  return (
    <ul className={s.ImageGallery} >
        {images.map(({id,webformatURL,largeImageURL})=>(
        
        <ImageGalleryItem 
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        onClick={() => onSelect(largeImageURL)}
        />
         
        ))}
    </ul>
  );
};
export default ImageGallery;
