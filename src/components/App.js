import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [acceptOffer, setAcceptOffer] = useState(false);

  return (
    <div
      className={`w-screen h-screen flex flex-row justify-center items-center ${
        showModal && 'z-0 bg-slate-200'
      }`}
    >
      {acceptOffer ? (
        <p>Offer accepted</p>
      ) : (
        <button
          type="button"
          className={`${
            showModal && 'hidden'
          } w-28 h-16 border-2 border-black bg-slate-200`}
          onClick={() => setShowModal(true)}
        >
          Show offer
        </button>
      )}

      {showModal && (
        <Modal setShowModal={setShowModal} setAcceptOffer={setAcceptOffer} />
      )}
    </div>
  );
};

export default App;
