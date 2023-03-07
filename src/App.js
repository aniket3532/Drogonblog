import Navbar from './Navbar';
import HomeContent from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path = "/" element = { <HomeContent /> } />
            <Route path = "/create" element = { <Create /> } />
            <Route exact path = "/blogs/:id" element = { <BlogDetails /> } />
            <Route path = "*" element = { <NotFound /> } />
          </Routes>
        </div>
      </div>``
    </Router>
  );
}

export default App;
