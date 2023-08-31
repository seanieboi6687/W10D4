import GalleryNavigation from "./component/GalleryNavigation";
import harvardArt from "./data/harvardArt.js";
import {Route, Switch, Redirect} from "react-router-dom";

function App() {
  const galleries = harvardArt.records

  return (

      <GalleryNavigation galleries={galleries}/>
  );
}

export default App;
