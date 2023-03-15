import Header from "../components/Header";
import Header2 from "../components/Header2";
import "../styles/globals.css";
import { Atkinson_Hyperlegible } from "@next/font/google";
const atikson = Atkinson_Hyperlegible({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={atikson.className}>
        {/* <Header></Header> */}
        <Header2></Header2>
        {children}
      </body>
    </html>
  );
}
