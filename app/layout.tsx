// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Home from "./components/Home";
// import Header from "./components/Header";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-900 text-white p-12">
//         <header>
//           <Header/>
//           <Home/>
//         </header>
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }


"use client"

// layout.tsx
import { useState } from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Home from './components/Home';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <html lang="en">
      <body className={`bg-${isDarkMode ? 'gray-900' : 'white'} text-${isDarkMode ? 'white' : 'black'} p-10 `}>
        {/* Toggle Button */}
        <div className="fixed top-4 right-4 z-10">
          <button 
            className={`text-white bg-sky-500 px-4 py-2 rounded-full`}
            onClick={toggleTheme}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {/* Header and Home components */}
        <header>
          <Header/>
          <Home  isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
        </header>
        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
