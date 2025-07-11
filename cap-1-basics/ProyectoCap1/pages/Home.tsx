import Navbar from "../components/common/Navbar";
import MainSection from "../components/home/MainSection";
import Footer from "../components/common/Footer";
function Home() {
  return (
    <div>
      <div className="global-container">
        <Navbar />
        <MainSection />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
