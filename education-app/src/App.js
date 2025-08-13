import { CardProvider } from "./CardContext";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import CoursesPage from "./CourseDescription";
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
