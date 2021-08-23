import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="h-screen w-screen bg-zep-dark text-gray-50 flex flex-col items-center justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
