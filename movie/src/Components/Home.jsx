


import Banner from "./component/Banner";
import Footer from "./component/Footer";
import MovieGallery from "./component/MovieGallery";
import Nav from "./component/Nav";
import SliderBtom from "./component/SliderBtom";





const Home = () => {
    return (
        <>
            <Nav></Nav>

            <Banner></Banner>


          <main>
             <MovieGallery></MovieGallery>
             <SliderBtom></SliderBtom>
             <Footer></Footer>
          </main>
        </>
    );
};

export default Home;