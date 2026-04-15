import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Komponentlər
import Navbar from './Components/Navbar'
import Logo from './Components/Logo'
import Ribbon from './Components/Ribbon'
import Footer from './Components/Footer'
import Newest from './Components/Newest'
import Projects from './Components/Projects'
import MustRead from './Components/MustRead'
import InternationalSector from './Components/InternationalSector'
import CountryPage from './Components/CountryPage'

// Route (Səhifə) Komponentləri
import Articles from './Routes/Articles'
import About from './Routes/About'
import Approval from './Routes/Approval'
import Charter from './Routes/Charter'
import Contact from './Routes/Contact'
import Media from './Routes/Media'
import Transitions from './Routes/Transitions'
import SearchPage from './Components/SearchPage'
const App = () => {
  return (
    <div>
      <Routes>
        {/* ── ANA SƏHİFƏ ── */}
        <Route path="/" element={
          <>
            <Navbar />
            <Logo />
            <Ribbon />
            <Newest />
            <Projects />
            <Articles />
            <InternationalSector />
            <MustRead />
            <Footer />
          </>
        } />

        {/* ── NAVBAR SAİT ROUTE-LARI ── */}
        <Route path="/haqqinda"  element={<About />} />
        <Route path="/beyenname" element={<Approval />} />
        <Route path="/nizamname" element={<Charter />} />
        <Route path="/elaqe"     element={<Contact />} />
        <Route path="/media"     element={<Media />} />
        <Route path="/kecidler"  element={<Transitions />} />

        {/* ── ORTA ASİYA (Region və Ölkələr) ── */}
        <Route path="/orta-asiya" element={<CountryPage country="Orta Asiya" region="Orta Asiya" isRegion={true} />} />
        <Route path="/orta-asiya/qazaxistan"   element={<CountryPage country="Qazaxıstan"   region="Orta Asiya" />} />
        <Route path="/orta-asiya/turkmenistan"  element={<CountryPage country="Türkmənistan"  region="Orta Asiya" />} />
        <Route path="/orta-asiya/qirgisistan"   element={<CountryPage country="Qırğızıstan"   region="Orta Asiya" />} />
        <Route path="/orta-asiya/ozbakistan"    element={<CountryPage country="Özbəkistan"    region="Orta Asiya" />} />
        <Route path="/orta-asiya/tacikistan"    element={<CountryPage country="Tacikistan"    region="Orta Asiya" />} />

        {/* ── GÜNEY QAFQAZ (Region və Ölkələr) ── */}
        <Route path="/guney-qafqaz" element={<CountryPage country="Güney Qafqaz" region="Güney Qafqaz" isRegion={true} />} />
        <Route path="/guney-qafqaz/azerbaycan" element={<CountryPage country="Azərbaycan"   region="Güney Qafqaz" />} />
        <Route path="/guney-qafqaz/gurcustan"  element={<CountryPage country="Gürcüstan"    region="Güney Qafqaz" />} />
        <Route path="/guney-qafqaz/ermenistan" element={<CountryPage country="Ermənistan"   region="Güney Qafqaz" />} />

        {/* ── QONŞULAR (Region və Ölkələr) ── */}
        <Route path="/qonsular" element={<CountryPage country="Qonşular" region="Qonşular" isRegion={true} />} />
        <Route path="/qonsular/turkiye"      element={<CountryPage country="Türkiyə"      region="Qonşular" />} />
        <Route path="/qonsular/iran"         element={<CountryPage country="İran"         region="Qonşular" />} />
        <Route path="/qonsular/kuzeyqafqaz"  element={<CountryPage country="Kuzey Qafqaz" region="Qonşular" />} />

        {/* ── BEYNƏLXALQ (Region və Alt Bölmə) ── */}
        <Route path="/beynelxalq" element={<CountryPage country="Beynəlxalq" region="Beynəlxalq" isRegion={true} />} />
        <Route path="/beynelxalq/turkdunyasi" element={<CountryPage country="Beynəlxalq" region="Beynəlxalq" />} />

        {/* ── MƏQALƏLƏR (Region və Alt Bölmələr) ── */}
        <Route path="/meqaleler" element={<CountryPage country="Məqalələr" region="Məqalələr" isRegion={true} />} />
        <Route path="/meqaleler/layiheler" element={<CountryPage country="Layihələr"  region="Məqalələr" />} />
        <Route path="/meqaleler/bizimkose" element={<CountryPage country="Məqalələr"  region="Məqalələr" />} />

        {/* ── DİGƏR BÖLMƏLƏR ── */}
        <Route path="/xeberler" element={<CountryPage country="Xəbərlər" region="Xəbərlər" />} />
        <Route path="/qht-sektoru" element={<CountryPage country="QHT Sektoru" region="QHT Sektoru" />} />
<Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  )
}

export default App