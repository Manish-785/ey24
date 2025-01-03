import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "My App",
  description: "Welcome to My App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}