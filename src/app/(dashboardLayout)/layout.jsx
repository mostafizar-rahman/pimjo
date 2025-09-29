import Header from "@/component/dashboardSection/header";
import Sidebar from "@/component/dashboardSection/sidebar";

const Layout = ({ children }) => {
  return (
    <div className="grid xl:grid-cols-[291px_auto] bg-background-dash text-foreground-dash">
      <Sidebar />
      <div className="min-w-0">
        <Header />
        <div className="lg:p-6 p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
