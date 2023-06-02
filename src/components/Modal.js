import React, { useRef, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({ setShowModal, setAcceptOffer }) {
  const ref = useRef(null);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return;
      setShowModal(false);
    };

    document.body.addEventListener('click', onBodyClick, {
      capture: true, // This needs from React v17
    });

    return () =>
      document.body.removeEventListener('click', onBodyClick, {
        capture: true, // This needs from React v17
      });
  }, []);

  const handleAcceptOffer = () => {
    setAcceptOffer(true);
    setShowModal(false);
  };

  return (
    <div
      ref={ref}
      className="relative w-9/12 h-4/5 border-2 border-black flex flex-col items-center"
    >
      <p className="basis-9/12 text-lg flex flex-row content-center items-center">
        Click the button below to accept our amazing offer!
      </p>
      <button
        type="button"
        className="w-28 h-16 border-2 border-black"
        onClick={handleAcceptOffer}
      >
        Accept offer
      </button>

      <button
        type="button"
        className="absolute top-0 left-0 w-16 h-16 flex justify-center items-center"
        onClick={() => setShowModal(false)}
      >
        <AiOutlineClose className="w-8 h-8" />
      </button>
    </div>
  );
}
