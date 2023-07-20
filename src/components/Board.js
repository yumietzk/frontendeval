const firstFaceClass = 'flex justify-center items-center';
const secondFaceClass = 'flex justify-between';
const thirdFaceClass = 'flex justify-between';
const fourthFaceClass = 'flex justify-between';
const fifthFaceClass = 'flex justify-between';
const sixthFaceClass = 'flex justify-between';

function Board({ result }) {
  // result: :[]

  return (
    <div className="w-2/5 grid grid-cols-3 gap-4">
      {/* 1 */}
      <div
        className={`w-28 h-28 bg-orange-500 p-1 rounded-md ${firstFaceClass}`}
      >
        <span className="block w-6 h-6 rounded-full bg-white"></span>
      </div>

      {/* 2 */}
      <div
        className={`w-28 h-28 bg-orange-500 p-1 rounded-md ${secondFaceClass}`}
      >
        <span className="block w-6 h-6 rounded-full bg-white self-end"></span>
        <span className="block w-6 h-6 rounded-full bg-white"></span>
      </div>

      {/* 3 */}
      <div
        className={`w-28 h-28 bg-orange-500 p-1 rounded-md ${thirdFaceClass}`}
      >
        <span className="block w-6 h-6 rounded-full bg-white self-end"></span>
        <span className="block w-6 h-6 rounded-full bg-white self-center"></span>
        <span className="block w-6 h-6 rounded-full bg-white"></span>
      </div>

      {/* 4 */}
      <div
        className={`w-28 h-28 bg-orange-500 p-1 rounded-md ${fourthFaceClass}`}
      >
        <div className="flex flex-col justify-between">
          <span className="block w-6 h-6 rounded-full bg-white"></span>
          <span className="block w-6 h-6 rounded-full bg-white"></span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="block w-6 h-6 rounded-full bg-white"></span>
          <span className="block w-6 h-6 rounded-full bg-white"></span>
        </div>
      </div>

      {/* 5 */}
      <div
        className={`w-28 h-28 bg-orange-500 p-1 rounded-md ${fifthFaceClass}`}
      >
        <div className="flex flex-col justify-between">
          <span className="block w-6 h-6 rounded-full bg-white"></span>
          <span className="block w-6 h-6 rounded-full bg-white"></span>
        </div>
        <div className="flex flex-col justify-center">
          <span className="block w-6 h-6 rounded-full bg-white"></span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="block w-6 h-6 rounded-full bg-white"></span>
          <span className="block w-6 h-6 rounded-full bg-white"></span>
        </div>
      </div>

      {/* 6 */}
      <div
        className={`w-28 h-28 bg-orange-500 p-1 rounded-md ${sixthFaceClass}`}
      >
        <div className="flex flex-col justify-between">
          <span className="block w-6 h-6 rounded-full bg-white"></span>
          <span className="block w-6 h-6 rounded-full bg-white"></span>
          <span className="block w-6 h-6 rounded-full bg-white"></span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="block w-6 h-6 rounded-full bg-white"></span>
          <span className="block w-6 h-6 rounded-full bg-white"></span>
          <span className="block w-6 h-6 rounded-full bg-white"></span>
        </div>
      </div>
    </div>
  );
}

export default Board;

// Create dice in CSS: https://betterprogramming.pub/creating-dice-in-flexbox-in-css-a02a5d85e516
