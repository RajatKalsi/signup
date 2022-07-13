// import logo from '../logo.svg';
import './App.css';
import EmailSignUp from './components/EmailSignUp';
import FinishingSignUp from './components/FinishingSignUp';
import ForgottenPassword from './components/ForgottenPassword';
import ResetyourPasaword from './components/ResetyourPasaword';
import Index from './components';
import SignInin from './components/SignInin';
import { BrowserRouter as Router, Routes, Route, path, Link } from 'react-router-dom'
import PhoneSingin from './components/PhoneSingin';
import Home from './components/Home';
import Profile from './components/Profile';
import PersonalInformation from './components/PersonalInformation';
import Changepassword from './components/Changepassword';
import Notification from './components/Notification';
// import { BrowserRouter as Router, Routes, Route, path } from 'react-router-dom'
import Footer from './components/Footer';
import OtpVerifiedModal from './components/Facebook';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/signinin/emailsignup' element={<EmailSignUp />} />
          <Route path='/finishingsignup' element={<FinishingSignUp />} />
          <Route path='/signinin' element={<SignInin />} />
          <Route path='signinin/forgotpassword' element={<ForgottenPassword />} />
          <Route path='/phonesignin' element={<PhoneSingin />} />
          <Route path='/signinin/forgotpassword/resetpassword' element={<ResetyourPasaword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/changepassword" element={<Changepassword />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/personalinformation" element={<PersonalInformation />} />
          <Route path="/otpverifiedmodal" element={<OtpVerifiedModal />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
