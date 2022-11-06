import { Counter } from "./Counter";
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Counter /> */}
      Home &bull; Posts
      {children}
    </div>
  );
}
