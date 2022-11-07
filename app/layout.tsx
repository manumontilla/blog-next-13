import Header from "../components/Header";
import "../styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>My blog</title>
      </head>
      <body class="u-center">
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
