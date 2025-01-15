import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Faraz Khan",
  description: "Welcome to Faraz Khan's portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
        {/* <HeroSection /> */}
        {/* <AchievementsSection /> */}
        {/* <AboutSection /> */}
        {/* <ProjectsSection /> */}
        {/* <EmailSection /> */}
        {children}
      </div>
      <Footer />
    </main>
      </body>
    </html>
  )
}
