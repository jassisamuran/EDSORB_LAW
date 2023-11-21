import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import MainData from "./components/MainData";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ServiceTrustShown from "./components/ServiceTrustShown";
import WhyPage_in_for_detail from "./components/WhyPage_in_for_detail";
import Our_winnning from "./components/Our_winnning";
import SoImportant from "./components/SoImportant";

import TogetherContainer from "./components/TogetherContainer";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <ServiceTrustShown /> */}

      <MainData />
      {/* <WhyPage_in_for_detail /> */}
      <SoImportant />
      <Our_winnning />

      <TogetherContainer />
      {/* <OurTeamMember /> */}
      {/* <OurFAQ /> */}
      {/* <FAQSection1 /> */}

      <Footer />
    </div>
  );
}

export default App;
