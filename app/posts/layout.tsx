import { Counter } from "./Counter";
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Counter /> */}
      <h3>Ultimos post </h3>
      {children}
    </div>
  );
}
