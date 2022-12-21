import { isLastPage } from "../../lib/tsx";

export default function PaginationOfPosts({ page }: number) {
  return (
    <>
      {isLastPage(page) ? null : (
        <a href={"/posts/page/" + (+page + 1).toString()}>
          Entradas mas antiguas
        </a>
      )}
      {Number(page) === 2 ? (
        <a href={"/posts"}>Entradas mas nuevas</a>
      ) : page > 2 ? (
        <a href={"/posts/page/" + (+page - 1).toString()}>
          Entradas mas nuevas
        </a>
      ) : null}
    </>
  );
}
