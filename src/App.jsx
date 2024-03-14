import './App.css'
import Form from './components/Form'
import Login from './components/Login';
import Home from './components/Home';
import OfferLetter from './components/OfferLetter';
import OfferLetterInput from './components/OfferLetterInput';
import NDABond from './components/NDABond';
import NDABondInput from './components/NDABondInput';
import Moonlighting from './components/Moonlighting';
import MoonlightingInput from './components/MoonlightingInput';
import Invoice from './components/Invoice';
import InvoiceInput from './components/InvoiceInput';
import Template from './components/Template'
import { PDFViewer } from '@react-pdf/renderer';
import { Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil';

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

          <Route path='/nda-bond-input' element={<NDABondInput />} />
          <Route path='/nda-bond' element={
            <PDFViewer height={window.innerHeight} width={'100%'}>
              <NDABond />
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
