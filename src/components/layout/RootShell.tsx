import Header from "./Header";
import Footer from "./Footer";

export default function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
    </>
  );
}
