import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch,
  faRocket,
  faBook,
  faCreditCard,
  faCode,
  faUser,
  faSun, 
  faMoon 
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { categories, articles } from '../data';
import styles from '../styles/Home.module.css';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

const iconMap = {
  'rocket': faRocket,
  'book': faBook,
  'credit-card': faCreditCard,
  'code': faCode
};

export default function Home() {
  const [query, setQuery] = useState('');
  const { theme, toggleTheme } = useTheme(); // Use theme context
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Acme Corp</Link>
        <button onClick={toggleTheme} className={styles.themeToggle}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </button>
      </header>
      <main className={styles.main}>
        <div className={styles.searchContainer}>
          <h1>Advice and answers from the Acme Corp Team</h1>
          <div className={styles.searchWrapper}>
            <label htmlFor="search-input" className={styles.visuallyHidden}>
              Search help articles
            </label>
            <FontAwesomeIcon 
              icon={faSearch} 
              className={styles.searchIcon}
              aria-hidden="true"
            />
            <input
              id="search-input"
              type="text"
              placeholder="Search for articles..."
              className={styles.search}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search help articles"
              role="searchbox"
            />
          </div>
        </div>
        {query ? (
          <ul className={styles.searchResults}>
            {filteredArticles.map((article) => (
              <li key={article.id}>
                <Link href={`/article/${article.id}`}>{article.title}</Link>
              </li>
            ))}
            {filteredArticles.length === 0 && <li>No results found.</li>}
          </ul>
        ) : (
          <div className={styles.categories}>
            {categories.map(cat => {
              const categoryArticles = articles.filter(article => article.category === cat.id);
              return (
                <Link key={cat.id} href={`/category/${cat.id}`} className={styles.categoryCard}>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={iconMap[cat.icon]} />
                  </div>
                  <h2>{cat.title}</h2>
                  <p>{cat.description}</p>
                  <div className={styles.articleCount}>
                    {categoryArticles.length} articles
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <nav className={styles.footerNav}>
          <Link href="/chatgpt" className={styles.footerLink}>ChatGPT</Link>
          <Link href="/api" className={styles.footerLink}>API</Link>
          <Link href="/dall-e" className={styles.footerLink}>DALL·E</Link>
          <Link href="/status" className={styles.footerLink}>Service Status</Link>
        </nav>
        <div className={styles.socialLinks}>
          <a href="https://twitter.com/acmecorp" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com/company/acmecorp" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </footer>
    </div>
  );
}