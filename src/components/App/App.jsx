
import { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './App.module.css'
import fetchImages from '../../image-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import toast, { Toaster } from 'react-hot-toast';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


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
      toast.success("HTTP success!!!!");
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

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
      {isLoading && (
        <p>
          <b>Loading articles...</b>
        </p>
      )}
      <Toaster position="bottom-center" />
    </div>
  )
}

export default App
