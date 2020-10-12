import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import HomePage from "views/HomePage";
import Footer from "components/Footer/Footer.js";



class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <HomePage />
          
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
