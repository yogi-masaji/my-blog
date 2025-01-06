import "@/app/globals.css";
import Navbar from "@/app/navbar";
import Footer from "@/app/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}