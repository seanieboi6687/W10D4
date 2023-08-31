import GalleryNavigation from "./component/GalleryNavigation";
import harvardArt from "./data/harvardArt";
import { Route, Switch, Redirect } from "react-router-dom";
import GalleryShow from "./component/GalleryNavigation/Gallery/GalleryShow";

function App() {
  const galleries = harvardArt.records;

  return (
    <div>
      <GalleryNavigation galleries={galleries} />
      <Switch>
        <Route path="/galleries/:id" component={GalleryShow} />
      </Switch>
    </div>
  );
}

export default App;
