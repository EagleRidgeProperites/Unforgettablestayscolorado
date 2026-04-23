export const metadata = {
  title: "Unforgettable Stays Colorado",
  description: "Private, spa-like mountain escapes in Colorado.",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
