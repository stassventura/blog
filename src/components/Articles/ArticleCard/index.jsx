import React from 'react'
import styles from '../Articles.module.scss'


const ArticleCard = ({articleItem}) => {
  return (
    <div className={styles.articleCard} key={articleItem.id}>
    <div className={styles.articleCardImg}>
        <img src={articleItem.image} alt={articleItem.title} />
    </div>
    <div className={styles.articleCardBody}>
    <h1 className={styles.articleCardTitle} onClick={()=>console.log(articleItem.id)}>
       {articleItem.title.length > 23 ? (<>{articleItem.title.slice(0, 23)}...</>) : articleItem.title}

    </h1>
    <p className={styles.articleCardSubtitle}>
       {articleItem.content.length > 78 ? (<>{articleItem.content.slice(0, 72)}...</>) : articleItem.subtitle}
    </p>
    <button className={styles.readMore}>Read more</button>
    </div>
</div>
  )
}

export default ArticleCard
