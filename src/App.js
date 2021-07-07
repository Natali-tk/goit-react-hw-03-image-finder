
import React, { Component } from "react";
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showMOdal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <Modal onClose={this.toggleModal} />
      </>
    );
  }
};

export default App;









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;