import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Api from './services/image-api';
import Modal from './components/Modal/Modal';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

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
    if (prevState.query !== this.state.query) {
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
    const { page} = this.state;
    this.setState({ isLoading: true });
    Api.fetchImages(page)
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error: 'No match!' }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, loading, selectedImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />

        <ImageGallery images={images} onSelect={this.handleSelectImage} />
        {loading && <Loader />}
        {selectedImage && (
          <Modal onClose={this.toggleModal} largeImageURL={selectedImage}>   
          </Modal>
        )}
        <ToastContainer />
      </>
    );
  }
}

export default App;
