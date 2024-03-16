import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import OfferLetter from './components/OfferLetter';
import OfferLetterInput from './components/OfferLetterInput';
import NDA from './components/NDA';
import NDAInput from './components/NDAInput';
import Bond from './components/Bond';
import BondInput from './components/BondInput';
import Moonlighting from './components/Moonlighting';
import MoonlightingInput from './components/MoonlightingInput';
import Invoice from './components/Invoice';
import InvoiceInput from './components/InvoiceInput';
import { PDFViewer } from '@react-pdf/renderer';
import { Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import { MobilePDFReader, PDFReader  } from 'react-read-pdf';

function App() {

  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />

          <Route path='/offer-letter-input' element={<OfferLetterInput />} />
          <Route path='/offer-letter' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <OfferLetter />
            </PDFViewer>
          } />

            {/* http://localhost:5173/nda */}
          <Route path='/nda-input' element={<NDAInput />} />
          <Route path='/nda' element={
            <PDFViewer height={window.innerHeight} width={window.innerWidth}>
              <NDA />
            </PDFViewer>
          } />

          <Route path='/bond-input' element={<BondInput />} />
          <Route path='/bond' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Bond />
            </PDFViewer>
          } />

          <Route path='/moonlighting-input' element={<MoonlightingInput />} />
          <Route path='/moonlighting' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <Moonlighting />
            </PDFViewer>
          } />

        </Routes>
      </RecoilRoot>
    </>
  )
}

export default App
