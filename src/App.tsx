import "./App.css";
import Navigation from "./components/Navigation";
import MainBody from "./components/MainBody";
import { useState } from 'react';
import Modal from "./components/Modal";

function App() {
  const [opencart, setOpenCart] = useState(false)
  const [modalVisible, setModalVisible] = useState(true)
  return (
    <>
      <Modal visible={modalVisible} setVisible={setModalVisible}/>
      <nav>
        <Navigation cartOpen={opencart} openCart={setOpenCart}></Navigation>
      </nav>
      <main>
        <MainBody openModal={setModalVisible} opencart={opencart}/>
      </main>
    </>
  );
}

export default App;
