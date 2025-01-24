import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

// Home.js
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

// About.js
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
//If you have other route components such as  Contact, Services etc. they should be added here
//In routes tag only.  This will throw an error, because the path is not defined for the given component
