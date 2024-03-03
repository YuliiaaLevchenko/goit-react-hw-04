import css from './ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
    return (
        <li className={css.list}>
        <div onClick={onClick}>
  <img className={css.image} src={image.urls.small} alt={image.urls.description} />
</div>
</li> 
    )
}

export default ImageCard