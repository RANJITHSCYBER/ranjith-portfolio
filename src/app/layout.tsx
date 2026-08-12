import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ranjith S — Mechatronics, Robotics & Embedded Systems",
  description:
    "Portfolio of Ranjith S — a mechatronics and robotics builder working across embedded systems, IoT, automation, drones and intelligent machines.",
  openGraph: {
    title: "Ranjith S — Mechatronics, Robotics & Embedded Systems",
    description:
      "Portfolio of Ranjith S — a mechatronics and robotics builder working across embedded systems, IoT, automation, drones and intelligent machines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranjith S — Mechatronics, Robotics & Embedded Systems",
    description:
      "Portfolio of Ranjith S — a mechatronics and robotics builder working across embedded systems, IoT, automation, drones and intelligent machines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-bg text-text`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                  if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
                } catch (e) {}
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
