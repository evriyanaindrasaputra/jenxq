import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="min-h-screen flex flex-col dark:bg-gray-800 bg-gray-100 ">
      <header>Halo Header</header>
      {children}
      <footer>Hallo Footer</footer>
    </section>
  );
};

export default Layout;
