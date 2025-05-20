import Link from 'next/link';
import { categories, articles } from '../../data';
import styles from '../../styles/Article.module.css';

export async function getStaticPaths() {
  const paths = articles.map(article => ({ params: { articleId: article.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const article = articles.find(a => a.id === params.articleId);
  const category = categories.find(cat => cat.id === article.category);
  return { props: { article, category } };
}

export default function ArticlePage({ article, category }) {
  return (
    <div className={styles.container}>
      <Link href={`/category/${category.id}`} className={styles.backLink}>← {category.title}</Link>
      <h1 className={styles.title}>{article.title}</h1>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}