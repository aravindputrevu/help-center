import Link from 'next/link';
import { categories, articles } from '../../data';
import styles from '../../styles/Category.module.css';

export async function getStaticPaths() {
  const paths = categories.map(cat => ({ params: { categoryId: cat.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = categories.find(cat => cat.id === params.categoryId);
  const categoryArticles = articles.filter(article => article.category === category.id);
  return { props: { category, articles: categoryArticles } };
}

export default function CategoryPage({ category, articles }) {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>← Back to Home</Link>
      <h1 className={styles.title}>{category.title}</h1>
      <p className={styles.description}>{category.description}</p>
      <ul className={styles.articles}>
        {articles.map(article => (
          <li key={article.id}>
            <Link href={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}