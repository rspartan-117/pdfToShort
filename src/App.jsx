
import Navbar from "./components/Navbar";
import MenuItems from "./components/MenuItems";
import Heading from "./components/Heading";
import FileUpload from "./components/FileUpload";
import VideoPlayer from "./components/VideoPlayer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
       <MenuItems />
      <Heading />
      <FileUpload />
      <VideoPlayer /> 
      <Footer />
    </div>
  );
}

export default App;
