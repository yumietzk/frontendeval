export default function handleButtonChange(prevCounts, firstTime) {
  let button = { undo: true, redo: true, count: false };

  const length = prevCounts.length;

  if (length === 0) {
    if (!firstTime.undo) {
      button = { undo: true, redo: false, count: false };
    } else {
      button = { ...button, undo: true, count: false };
    }
  }

  if (length >= 1 && length < 5) {
    if (!firstTime.undo) {
      button = { undo: false, redo: false, count: false };
    } else {
      button = { ...button, undo: false, count: false };
    }
  }

  if (length === 5) {
    button = { undo: false, redo: true, count: true };
  }

  return button;
}
