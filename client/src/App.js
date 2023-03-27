import './App.css';
import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { PlaceProvider } from './contexts/PlaceContext';

import Navigation from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

import Profile from './components/User/Profile/Profile';
import Login from './components/User/Login/Login';
import Logout from './components/User/Logout/Logout';
import Register from './components/User/Register/Register';

import Catalog from './components/Places/Catalog/Catalog';
import All from './components/Places/AllFears/All';
import Water from './components/Places/WaterFears/Water';
import Animals from './components/Places/AnimalsFears/Animals';
import Height from './components/Places/HeightFears/Height';
import Other from './components/Places/OtherFears/Other';
import Details from './components/Places/Details/Details';
import Create from './components/Places/Create/Create';
import Delete from './components/Places/Delete/Delete';
import Edit from './components/Places/Edit/Edit';




function App() {
  return (
    <>
      <PlaceProvider >
        <AuthProvider>
          <Navigation />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<ContactUs />} />

              <Route path="/fears" element={<Catalog />} />
              <Route path="/fears/all" element={<All />} />
              <Route path="/fears/other" element={<Other />} />
              <Route path="/fears/water" element={<Water />} />
              <Route path="/fears/animals" element={<Animals />} />
              <Route path="/fears/height" element={<Height />} />
              <Route path="/fears/:fearId" element={<Details />} />
              <Route path="/create" element={<Create />} />
              <Route path="/fears/:fearId/delete" element={<Delete />} />
              <Route path="/fears/:fearId/edit" element={<Edit />} />

              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </PlaceProvider>
    </>
  );
}

export default App;
