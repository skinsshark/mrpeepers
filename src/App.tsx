import "./App.css";
import mrPeepersImg from "./assets/mrpeepers.jpeg";
function App() {
  return (
    <>
      <div className="modal-wrapper">
        <div className="survey-wrapper">survey</div>
        <div className="image-sidebar">
          <img src={mrPeepersImg} alt="mr. peepers" />
        </div>
      </div>
    </>
  );
}

export default App;
