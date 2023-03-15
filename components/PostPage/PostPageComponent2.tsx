import ListOfPost from "../ListOfPosts/ListOfPost";
import PaginationOfPosts from "../PaginationOfPosts/PaginationOfPosts";
import Image from "next/image";
import styles from "./postPage2.module.css";
import avatar from "../../public/about_me/about_me.webp";
import avatar2 from "../../public/about_me/test.webp";

export async function PostPageComponent(params: any) {
  console.log("component", params.page);
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <div className={styles.zig_zag}>
          <h2 className={styles.ultimas_entradas}>{/* Ultimas entradas */}</h2>
        </div>
        <section className={styles.container_list_post}>
          <ListOfPost page={params.page} />
        </section>
        <PaginationOfPosts page={params.page} />
        {/* page={params} */}
      </main>
      <aside>
        <div className={styles.about_me}>
          {/* <div className={styles.header}>ABOUT ME</div> */}
          <Image alt="about_me" src={avatar2} placeholder="blur" />
          {/* <p className={styles.description}>
            Desarrollador software, gestion de proyectos y desarrollo de equipo,
            y ahora (por cuarta vez) escritor de blogs
          </p> */}
          {/* <p className={styles.signature}>Manuel Montilla</p> */}
        </div>
      </aside>
    </div>
  );
}

export default PostPageComponent;
