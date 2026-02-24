import { ReactNode } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import WhatsAppButton from "./WhatsAppButton";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <TopBar />
    <Navbar />
    <main className="flex-1">{children}</main>
    <WhatsAppButton />
  </div>
);

export default Layout;
