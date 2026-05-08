import "leaflet/dist/leaflet.css";

export const metadata = {
  title: "Invisible Heritage Site",
  description: "Heritage Discovery Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}