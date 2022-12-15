import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="min-h-screen flex flex-col dark:bg-gray-800 bg-gray-100 ">
      <Header />
      {children}
      <footer>Hallo Footer</footer>
    </section>
  );
};

export default Layout;
