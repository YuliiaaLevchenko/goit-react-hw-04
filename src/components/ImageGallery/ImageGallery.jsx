import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'

const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={css.list}>
	{images.map((image) => {
       return (
 <ImageCard 
 key={image.id}
 image={image}
 onClick={() => openModal(image)}
 />
    );
       })}
</ul>

    )
}

export default ImageGallery