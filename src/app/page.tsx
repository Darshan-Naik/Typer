import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainTyping from "@/components/MainTyping";
import MobileNotSupported from "@/components/MobileNotSupported";

export default function Home() {
  return (
    <>
      <main className="flex h-full w-full flex-col max-w-screen-xl m-auto justify-between">
        <Header />
        <MobileNotSupported />
        <MainTyping />
        <Footer />
      </main>
    </>
  );
}
