import React, {useEffect, useState} from 'react'
import ArticleCard from './ArticleCard'
import styles from './Articles.module.scss'
import axios from 'axios'
import server_url from '../../config'
const ArticlesList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
      axios.get(`${server_url}/articles/`)
          .then(response => {
              const articles = response.data.results
              setArticles(articles)
          })
          .catch(error => {
              console.error("Error fetching articles:", error);
          });
  }, []);
  

  return (
    <section>
      <div className={styles.container}>
        {articles && articles.length > 0 && articles.map((articleItem)=>(
            <ArticleCard articleItem={articleItem} key={articleItem.id}/>
        ))}
      </div>
    </section>
  )
}

export default ArticlesList
