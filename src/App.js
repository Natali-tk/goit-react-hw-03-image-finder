import React, { Component } from 'react';
import Api from './services/image-api';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from './components/Loader/Loader';

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    showModal: false,
    searchQuery: '',
    page: 1,
    selectedImage: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
    if (this.state.page !== 2 && prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSelectImage = imageUrl => {
    this.setState({ selectedImage: imageUrl });
    this.toggleModal();
  };

  handleSubmit = query => {
    this.setState({ images: [], searchQuery: query, page: 1 });
    console.log(query);
    console.log(this.state.searchQuery);
  };

  fetchImages = () => {
    const {searchQuery, page} = this.state;
    this.setState({ loading: true });
    Api.fetchImages({searchQuery, page})
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error: 'No match!' }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { images, loading, selectedImage,showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {loading && <Loader />}
        <ImageGallery images={images} onSelect={this.handleSelectImage} />
        {images.length > 0 && <Button fetchImages={this.fetchImages} />}
        {showModal && (
        <Modal onClose={this.toggleModal} largeImageURL={selectedImage}/>   
        )}
      </>
    );
  }
}

export default App;




