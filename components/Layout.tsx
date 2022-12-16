import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="min-h-screen flex flex-col dark:bg-gray-800 bg-gray-100 ">
      <Header />
      <div className="mx-auto max-w-4xl px-2 pt-20 md:px-1">{children}</div>
    </section>
  );
};

export default Layout;
