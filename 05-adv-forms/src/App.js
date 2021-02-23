import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SurveyForm from "./SurveyForm";
import ContactUs from "./ContactUs"


function App() {
  return (
    <div className="container">
        {/* <SurveyForm/> */}
        <ContactUs/>
    </div>
  );
}

export default App;
