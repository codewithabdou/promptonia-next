import '@styles/globals.css';
import { Nav,Provider } from '@components';
export const metadata = {
  title: "Promptopia",
  description: "Discover & share new AI prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav/>
          {children}</main>
      </body>
    </html>
  );
}
