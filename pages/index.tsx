import { HiLightBulb } from "react-icons/hi"
import { FaComment } from "react-icons/fa"
import { PropsWithChildren } from "react"
import Post from "@/interfaces/post"
import CustomHeader from "@/components/CustomHeader"
import HomeLayout from "@/layouts/HomeLayout"
import styles from "@/styles/Home.module.scss"

export default function Home({ posts }: PropsWithChildren<{ posts: Post[] }>) {
  return (
    <HomeLayout>
      <CustomHeader />
      <aside className={styles.aside}>
        <div className={styles.banner}>My Product Name</div>
        <ul className={styles.filters}>
          <li>All</li>
          <li>UI</li>
          <li>UX</li>
          <li>Enhancement</li>
          <li>Bug</li>
          <li>Feature</li>
        </ul>
      </aside>
      <main className={styles.main}>
        <div className={styles.controller}>
          <HiLightBulb size={32} />
          <p className={styles["post-amount"]}>{posts.length} Suggestions</p>
          <p>Sort by: lorem ipsum</p>
          <button>+ Add Feedback</button>
        </div>
        <ul className={styles["posts-container"]}>
          {posts?.map(post => (
            <li key={post.id} className={styles.post}>
              <button className={styles.upvotes}>{post.upvotes}</button>
              <div className={styles["post-details"]}>
                <h3>{post.name}</h3>
                <p>{post.description}</p>
                <ul className={styles.filters}>
                  <li>Enhancement</li>
                </ul>
              </div>
              <div className={styles["comments-container"]}>
                <FaComment size={20} />
                <span>1</span>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </HomeLayout>
  )
}

export async function getStaticProps() {
  const posts = await (await fetch("http://localhost:5000/tasks")).json()

  return {
    props: {
      posts
    }
  }
}
