import "./App.css";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageGallery imageName="mainLogoWithName" />
        <p>Velkommen til jeNTe-FAK!!</p>
      </header>
    </div>
  );
}

export default App;
