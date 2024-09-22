import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { PostForm } from "./components/PostForm/PostForm";

function App() {
  return (
    <>
      <Header />
      <Banner imageUrl="https://i.pinimg.com/originals/9c/ce/c4/9ccec4f5311e4925c9be8761549fa69b.gif" />
      <PostForm />
    </>
  );
}

export default App;
