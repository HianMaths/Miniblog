import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Banner } from "./components/banner/Banner";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Banner imageUrl="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2ZwNTlyN3ZiOTNpb3p4amRmcHBwd3VibXFkb3Q5NTluOWp5NW5qZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/25LbA5gcDNM5N7sHHy/giphy.gif" />
      </>
    );
  }
}

export default App;
