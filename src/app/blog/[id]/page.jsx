import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import { notFound } from "next/navigation"

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
    catch: "no-store", 
  });

  if (!res.ok) {
    return notFound()
  }
 
  return res.json();
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis voluptas enim recusandae voluptate saepe vitae mollitia, fugiat corrupti harum.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/821748/pexels-photo-821748.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/7245252/pexels-photo-7245252.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim iusto aliquam temporibus quisquam inventore illo, magni numquam ipsam officiis.
        </p>
      </div>
    </div>
  )
}

export default BlogPost