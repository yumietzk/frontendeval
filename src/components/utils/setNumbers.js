export default function setNumbers(container) {
  // container: [[], [], ]
  const newContainer = container;
  let positions = [];
  for (let i = 1; i <= 36; i++) {
    positions.push(i);
  }

  for (let i = 1; i <= 18; i++) {
    for (let j = 1; j <= 2; j++) {
      const randomNum = Math.floor(Math.random() * positions.length) + 0; // 0~35
      const position = positions[randomNum];
      // console.log(position);

      // calculate row
      const a = position / 6;
      let row;

      if (0 < a && a <= 1) {
        row = 0;
      } else if (1 < a && a <= 2) {
        row = 1;
      } else if (2 < a && a <= 3) {
        row = 2;
      } else if (3 < a && a <= 4) {
        row = 3;
      } else if (4 < a && a <= 5) {
        row = 4;
      } else if (5 < a && a <= 6) {
        row = 5;
      } else {
        console.error('Something went wrong!');
      }

      // calculate column
      const b = position % 6;
      let column;

      switch (b) {
        case 1:
          column = 0;
          break;
        case 2:
          column = 1;
          break;
        case 3:
          column = 2;
          break;
        case 4:
          column = 3;
          break;
        case 5:
          column = 4;
          break;
        case 0:
          column = 5;
          break;
        default:
          console.error('Something went wrong!');
      }

      newContainer[row][column] = i;
      const newPositions = positions.filter((item) => item !== position);
      positions = newPositions;
    }
  }

  return newContainer;
}
