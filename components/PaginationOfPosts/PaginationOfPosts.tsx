import { isLastPage } from "../../lib/tsx";
import styles from "./PaginationOfPost.module.css";

export default function PaginationOfPosts({ page }: number) {
  return (
    <>
      <div className={styles.pagination_footer}>
        <div>
          {isLastPage(page) ? null : (
            <a href={"/posts/page/" + (+page + 1).toString()}>
              Entradas mas antiguas
            </a>
          )}
        </div>
        <div>
          {Number(page) === 2 ? (
            <a href={"/posts"}>Entradas mas nuevas</a>
          ) : page > 2 ? (
            <a href={"/posts/page/" + (+page - 1).toString()}>
              Entradas mas nuevas
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
}
