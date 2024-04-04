import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import OfferLetterIntern from './components/OfferLetterIntern';
import OfferLetterInternInput from './components/OfferLetterInternInput';
import OfferLetterEmployee from './components/OfferLetterEmployee';
import OfferLetterEmployeeInput from './components/OfferLetterEmployeeInput';
import NDA from './components/NDA';
import NDAInput from './components/NDAInput';
import Bond from './components/Bond';
import BondInput from './components/BondInput';
import Moonlighting from './components/Moonlighting';
import MoonlightingInput from './components/MoonlightingInput';
import Invoice from './components/Invoice';
import InvoiceInput from './components/InvoiceInput';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import ForgotPassword from './components/ForgotPassword';
import Loader from './components/Loader';
import Download from './components/Download';
import CustomInput from './components/CustomInput';
import Blank from './components/Blank';
import Termination from './components/Policies/Termination';
import Asset from './components/Policies/Asset';
import Probation from './components/Policies/Probation';
import EmployeeExit from './components/Policies/EmployeeExit';
import EmployeeHandbookInput from './components/EmployeeHandbookInput';
import EmployeeHandbook from './components/EmployeeHandbook';
import Leave from './components/Policies/Leave';
import CustomPDFInput from './components/CustomPDFInput';
import LetterOfRecommendation from './components/LetterOfRecommendation';

function App() {

  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />

          <Route path='/blank' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Blank />
            </PDFViewer>
          } />

          <Route path='/termination' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Termination />
            </PDFViewer>
          } />

          <Route path='/asset' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Asset />
            </PDFViewer>
          } />

          <Route path='/probation' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Probation />
            </PDFViewer>
          } />

          <Route path='/employee-exit' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <EmployeeExit />
            </PDFViewer>
          } />

          <Route path='/leave' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Leave />
            </PDFViewer>
          } />

          <Route path='/letter-of-recommendation' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <LetterOfRecommendation />
            </PDFViewer>
          } />

          <Route path='/offer-letter-intern-input' element={<OfferLetterInternInput />} />
          <Route path='/offer-letter-intern-view' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <OfferLetterIntern />
            </PDFViewer>
          } />
          <Route path='/offer-letter-intern-download' element={
            <PDFDownloadLink document={<OfferLetterIntern />} fileName="offer-letter.pdf">
              {({ blob, url, loading, error }) => (loading ? <Loader /> : <Download />)}
            </PDFDownloadLink>
          } />

          <Route path='/offer-letter-employee-input' element={<OfferLetterEmployeeInput />} />
          <Route path='/offer-letter-employee-view' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <OfferLetterEmployee />
            </PDFViewer>
          } />
          <Route path='/offer-letter-employee-download' element={
            <PDFDownloadLink document={<OfferLetterEmployee />} fileName="offer-letter.pdf">
              {({ blob, url, loading, error }) => (loading ? <Loader /> : <Download />)}
            </PDFDownloadLink>
          } />

          <Route path='/nda-input' element={<NDAInput />} />
          <Route path='/nda-view' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <NDA />
            </PDFViewer>
          } />
          <Route path='/nda-download' element={
            <PDFDownloadLink document={<NDA />} fileName="nda.pdf">
              {({ blob, url, loading, error }) => (loading ? <Loader /> : <Download />)}
            </PDFDownloadLink>
          } />

          <Route path='/bond-input' element={<BondInput />} />
          <Route path='/bond-view' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Bond />
            </PDFViewer>
          } />
          <Route path='/bond-download' element={
            <PDFDownloadLink document={<Bond />} fileName="bond.pdf">
              {({ blob, url, loading, error }) => (loading ? <Loader /> : <Download />)}
            </PDFDownloadLink>
          } />

          <Route path='/moonlighting-input' element={<MoonlightingInput />} />
          <Route path='/moonlighting-view' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Moonlighting />
            </PDFViewer>
          } />
          <Route path='/moonlighting-download' element={
            <PDFDownloadLink document={<Moonlighting />} fileName="moonlighting.pdf">
              {({ blob, url, loading, error }) => (loading ? <Loader /> : <Download />)}
            </PDFDownloadLink>
          } />

          <Route path='/employee-handbook-input' element={<EmployeeHandbookInput />} />
          <Route path='/employee-handbook-view' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <EmployeeHandbook />
            </PDFViewer>
          } />
          <Route path='/employee-handbook-download' element={
            <PDFDownloadLink document={<EmployeeHandbook />} fileName="employee-handbook.pdf">
              {({ blob, url, loading, error }) => (loading ? <Loader /> : <Download />)}
            </PDFDownloadLink>
          } />

          <Route path='/invoice-input' element={<InvoiceInput />} />
          <Route path='/invoice-view' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Invoice />
            </PDFViewer>
          } />
          <Route path='/invoice-download' element={
            <PDFDownloadLink document={<Invoice />} fileName="invoice.pdf">
              {({ blob, url, loading, error }) => (loading ? <Loader /> : <Download />)}
            </PDFDownloadLink>
          } />

          <Route path='/custom-input' element={<CustomPDFInput />} />
          <Route path='/custom-view' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Invoice />
            </PDFViewer>
          } />
          <Route path='/custom-download' element={
            <PDFDownloadLink document={<Invoice />} fileName="customPDF.pdf">
              {({ blob, url, loading, error }) => (loading ? <Loader /> : <Download />)}
            </PDFDownloadLink>
          } />

        </Routes>
      </RecoilRoot>
    </>
  )
}

export default App
