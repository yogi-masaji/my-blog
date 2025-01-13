import "@/app/globals.css";
import Navbar from "@/app/(frontend)/components/layout/navbar";
import Footer from "@/app/(frontend)/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}