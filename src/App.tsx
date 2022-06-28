import { useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Layout } from 'shared';
import { Blog, BlogDetails, Home, Info } from 'views';

export const App: React.FC = () => {
  const [isLoggedIn, setIsLogggedIn] = useState<boolean>(false);

  function onLogin() {
    setIsLogggedIn(!isLoggedIn);
  }

  return (
    <Layout onLogin={() => onLogin()}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/blog" element={<Blog />}>
          <Route index element={<Blog />} />
          <Route path=":id" element={<BlogDetails />}></Route>
        </Route>
      </Routes>
      <Outlet />
    </Layout>
  );
};
