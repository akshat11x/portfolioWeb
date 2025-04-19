import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  // Simple client-side routing - can be expanded with a router library if needed
  const path = window.location.pathname;
  
  return (
    <Layout>
      {path === '/' ? <Home /> : <NotFound />}
    </Layout>
  );
}

export default App;