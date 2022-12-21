import ListOfPost from "../ListOfPosts/ListOfPost";
import PaginationOfPosts from "../PaginationOfPosts/PaginationOfPosts";
import Image from "next/image";
import styles from "./postPage.module.css";
import avatar from "../../public/about_me/about_me.png";

export async function PostPageComponent(params: any) {
  console.log("component", params.page);
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <section className={styles.container_list_post}>
          <ListOfPost page={params.page} />
        </section>
        <PaginationOfPosts page={params.page} />
        {/* page={params} */}
      </main>
      <aside>
        <div className={styles.about_me}>
          <div className={styles.header}>ABOUT ME</div>
          <Image alt="about_me" src={avatar} placeholder="blur" />
          <p className={styles.description}>
            Desarrollador software, gestion de proyectos y desarrollo de equipo,
            y ahora (por cuarta vez) escritor de blogs
          </p>
          <p className={styles.signature}>Manuel Montilla</p>
        </div>
      </aside>
    </div>
  );
}

export default PostPageComponent;
