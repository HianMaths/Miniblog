import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { PostForm } from "./components/PostForm/PostForm";

function App() {
  return (
    <>
      <Header />
      <Banner imageUrl="https://steamuserimages-a.akamaihd.net/ugc/529517645743896441/AAF75DDC15D045162570BEB67291A2F4335E70ED/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
      <PostForm />
    </>
  );
}

export default App;
