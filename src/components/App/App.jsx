
import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import css from './App.module.css'
import fetchImages from '../../image-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import { toast, Toaster } from 'react-hot-toast';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';


function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

  async function getData() {
    try {
      setIsLoading(true);
      setError(false);
      const data = await fetchImages(searchQuery, page);
      setImages((prevImages) => {
        return [...prevImages, ...data];
      });
      toast.success("HTTP success!");
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
  getData();
}, [page, searchQuery]);


const handleSearch = (newQuery) => {
  setSearchQuery(newQuery);
  setPage(1);
  setImages([]);
};
  
    const handleLoadMore = () => {
      setPage(page + 1);
    };

    function openModal(image) {
      setSelectedImage(image);
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} openModal={openModal}/>}
      {images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
      <Toaster position="bottom-center" />
      
      {selectedImage && (
      <ImageModal
        isOpen={modalIsOpen}
        
        onClose={closeModal}
       image={selectedImage}
      />
        
      )}
    </div>
  );
}


export default App
