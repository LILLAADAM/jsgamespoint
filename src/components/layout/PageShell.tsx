import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type PageShellProps = {
  children: React.ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-black pt-24 pb-16">{children}</main>
      <Footer />
    </>
  );
}
