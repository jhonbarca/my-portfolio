// src/components/Layout.jsx
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
