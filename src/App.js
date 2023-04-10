import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import Alert from './components/alert/Alert';
import Footer from './components/footer/Footer';

import Home from "./pages/home/Home";
import Theme from './components/theme/Theme';
import Layout from './components/layout/Layout';
import Navigation from './components/navigation/Navigation';
import useStateProvider from './hooks/useStateProvider';
import useWindowDimensions from './hooks/useWindowDimmensions';
import NotFound from './components/notFound/NotFound';
import Favorites from './pages/favorites/Favorites';

function App() {

  const { width } = useWindowDimensions();

  const { alert } = useStateProvider();

  return (
    <Router>
      <Routes>
        <Route
          element={
            <>
              <Theme>
                <Navigation expand={width >= 750 ? 'md' : false} />
                <Layout>
                  <Outlet />
                </Layout>
                <Footer />
              </Theme>
            </>
          }
        >

          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='*' element={<NotFound/>} />
        </Route>

      </Routes>
      {alert && <Alert message={alert.message} type={alert.type} />}

    </Router>

  );
}

export default App;
