import css from './ImageCard.module.css'

const ImageCard = ({ image, onClick }) => {
    return (
        <li className={css.list}>
        <div>
  <img className={css.image} src={image.urls.small} alt={image.urls.description}
  onClick={onClick} />
</div>
</li> 
    )
}

export default ImageCard