import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner imageUrl="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ZwNTlyN3ZiOTNpb3p4amRmcHBwd3VibXFkb3Q5NTluOWp5NW5qZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/25LbA5gcDNM5N7sHHy/giphy.gif" />

      <Banner imageUrl="https://steamuserimages-a.akamaihd.net/ugc/529517645743896441/AAF75DDC15D045162570BEB67291A2F4335E70ED/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" />
    </>
  );
}

export default App;
