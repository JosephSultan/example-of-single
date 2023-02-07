import React, { useState } from "react";
import { initializeApp, auth } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const provider = new auth.GoogleAuthProvider();
      const result = await app.auth().signInWithPopup(provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    app.auth().signOut();
    setUser(null);
  };

  return (
    <header className="container flex justify-between shadow-md md:shadow-none h-20">
      <img
        className="md:hidden lg:inline-flex"
        src="./images/logo-full.svg"
        alt=""
        width="180"
      />
      <img
        className="hidden md:inline-block lg:hidden"
        src="./images/logo.svg"
        alt=""
        width="45"
      />
      <div className="flex items-center">
        <MenuIcon className="h-10 md:hidden" />
        <div className="hidden md:flex items-center space-x-3 lg:space-x-8">
          <p className="nav-item">Product</p>
          <p className="nav-item">Customers</p>
          <p className="nav-item">Pricing</p>
          <p className="nav-item">Resouces</p>
          {user ? (
            <button className="secondary-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="secondary-button" onClick={handleLogin}>
              Login
            </button>
          )}
          <button className="primary-button">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;