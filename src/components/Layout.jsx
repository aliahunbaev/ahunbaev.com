import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <div className="max-w-xl tracking-wide min-h-screen leading-relaxed mx-auto px-4 py-4 space-y-20 font-light text-md font-sans text-gray-900">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
