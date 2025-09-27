import Footer from "@/component/client/footer";
import Header from "@/component/client/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
