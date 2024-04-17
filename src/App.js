import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <CartProvider>
      <div>
        <Navbar />
        <Main showModal={() => setShowModal(true)} />
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </CartProvider>
  );
}

export default App;
