import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    images: [
      'https://via.placeholder.com/500x400.png?text=Image+1',
      'https://via.placeholder.com/500x400.png?text=Image+1',
      'https://via.placeholder.com/500x400.png?text=Image+1',
      'https://via.placeholder.com/500x400.png?text=Image+1',
      'https://via.placeholder.com/500x400.png?text=Image+1',
    ],
    currentImageIndex: 0,
  };

  render() {
    const { images, currentImageIndex } = this.state;
  
    return (
      <div className="carousel-container">
        <img src={images[currentImageIndex]} className="carousel-image" alt="" />
        <button onClick={this.prevImage}>Prev</button>
        <button onClick={this.nextImage}>Next</button>
      </div>
    );
  }
  prevImage = () => {
    const { images, currentImageIndex } = this.state;
    const lastIndex = images.length - 1;
    const newIndex = currentImageIndex === 0 ? lastIndex : currentImageIndex - 1;
    this.setState({ currentImageIndex: newIndex });
  };
  
  nextImage = () => {
    const { images, currentImageIndex } = this.state;
    const lastIndex = images.length - 1;
    const newIndex = currentImageIndex === lastIndex ? 0 : currentImageIndex + 1;
    this.setState({ currentImageIndex: newIndex });
  };
    
}


export default App;