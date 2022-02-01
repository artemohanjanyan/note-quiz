const updateQuiz = () => {
  const newNote = Math.floor(Math.random() * 12);
  const newString = Math.floor(Math.random() * 6);
  const isSharp = Math.floor(Math.random() * 2);
  const noteToText = {
    0: "A",
    1: isSharp ? "A#" : "Bb",
    2: "B",
    3: "C",
    4: isSharp ? "C#" : "Db",
    5: "D",
    6: isSharp ? "D#" : "Eb",
    7: "E",
    8: "F",
    9: isSharp ? "F#" : "Gb",
    10: "G",
    11: isSharp ? "G#" : "Ab",
  };
  note.innerHTML = noteToText[newNote];
  string.innerHTML = newString + 1;
}

window.onload = () => {
  next.onclick = updateQuiz;
  updateQuiz();
};
