import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Tamayo Portfolio',
  description: 'Next.js + Tailwind Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
       <Navbar />
        <main className="min-h-screen p-2 sm:p-0 pt-24 sm:pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}