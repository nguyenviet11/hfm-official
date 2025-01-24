import "./globals.css";

export const metadata = {
  title: 'Hfm Official Site',
  description: 'Hfm Official Site. We needs to review the security of your connection before proceeding Hfm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
