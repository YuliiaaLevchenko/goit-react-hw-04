import Modal from 'react-modal'
import css from './ImageModal.module.css'

Modal.setAppElement("#root");

const ImageModal = ({ image, isOpen, onClose }) => {
    return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <div className={css.wrapper}>
        {image && image.urls && (
          <img
            className={css.image}
            src={image.urls.regular}
            alt={image.description}
            onClick={onClose}
          />
        )}
        <p className={css.description}>{image.description}</p>
        
        <p className={css.text}>
          Likes: <span className={css.span}>{image.likes}</span>
        </p>
      </div>
    </Modal>
  );
}
       

export default ImageModal