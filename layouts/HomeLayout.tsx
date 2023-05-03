import { PropsWithChildren } from "react"
import styles from "../styles/HomeLayout.module.scss"

export default function HomeLayout({ children }: PropsWithChildren<any>) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
