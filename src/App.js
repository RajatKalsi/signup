// import logo from '../logo.svg';
import './App.css';
import EmailSignUp from './components/EmailSignUp';
import FinishingSignUp from './components/FinishingSignUp';
import ForgottenPassword from './components/ForgottenPassword';
import ResetyourPasaword from './components/ResetyourPasaword';
import Index from './components';
import SignInin from './components/SignInin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PhoneSingin from './components/PhoneSingin';
import Profile from './components/Profile';
import PersonalInformation from './components/PersonalInformation';
import Changepassword from './components/Changepassword';
import Notifications from './components/Notification';
import Footer from './components/Footer';
import OtpVerifiedModal from './components/Facebook';
import Modals from './components/Modals';
import Layout from './components/Layout'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={
            <Layout>
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
                <Route path="/notification" element={<Notifications />} />
                <Route path="/personalinformation" element={<PersonalInformation />} />
                <Route path="/modal" element={<Modals />} />
              </Routes>
            </Layout>} />

          <Route path="/otpverifiedmodal" element={<OtpVerifiedModal />} />
          <Route path="/modal" element={<Modals />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
