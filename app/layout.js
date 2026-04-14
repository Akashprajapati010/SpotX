import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from '@clerk/ui/themes'
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ['latin'],
});


export const metadata = {
  title: "SpotX-AI",
  description: "Discover and create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white ${inter.className}`}>

         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <ClerkProvider
          appearance={{
          theme: shadesOfPurple,
         }}
          >
           <ConvexClientProvider>
          
        {/* Header */}
        <Header />
        
        {/* <main className="relative min-h-screen container mx-auto pt-40 md:pt-32 ">
          
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
             <div className="absolute top-0 left-1/5 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"/>
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"/>

          </div>

          <div className="relative z-10 min-h-[70vh]">{children}</div>

         
          <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7x1 mx-auto">
            <div className="text-sm text-gray-400">
              Made with ❤️ by SpotX-AI Team
            </div>
          </footer>
          <Toaster richColors />
        </main> */}
        
        <main className="relative min-h-screen pt-40 md:pt-32">

  {/* glow */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-0 left-1/5 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"/>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"/>
  </div>

  {/* GLOBAL WIDTH SYSTEM */}
  <div className="max-w-[1350px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

    <div className="relative z-10 min-h-[70vh]">{children}</div>

    {/* Footer */}
    <footer className="border-t border-gray-800/50 py-8">
      <div className="text-sm text-gray-400">
        Made with ❤️ by SpotX-AI Team
      </div>
    </footer>

  </div>

  <Toaster richColors />
</main>
           </ConvexClientProvider>
          </ClerkProvider>
          </ThemeProvider>
        
        {/* Footer */}
        </body>
    </html>
  );
}
