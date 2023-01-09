import "../styles/globals.css";
import Header from "./components/Header";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="lofi">
      <head />
      <body>
        <Providers>
          <div className="m-2">
            <Header />
            <main className="flex items-center justify-center">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
