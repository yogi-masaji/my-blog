import "@/app/globals.css";
import Navbar from "@/app/(frontend)/components/layout/navbar";
import Footer from "@/app/(frontend)/components/layout/footer";
import { jakartasans, climatecrisis } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartasans.variable} ${climatecrisis.variable} `} style={{scrollBehavior:'smooth'}} suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}