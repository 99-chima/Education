import { CardProvider } from "./CardContext";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CoursesPage from "./CourseDescription";
import About from "./About";
import Testimonial from "./testimonial";
import Contact from "./Contact";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <CardProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
              <NavBar />
              <Home />
              <About />
              <Testimonial />
                <Contact />
                <Footer />
              </>
            }          
/>
          <Route
            path="/course/:id"
            element={<CoursesPage />}
          />
        </Routes>
      </Router>
    </CardProvider>
  );
}

export default App;
