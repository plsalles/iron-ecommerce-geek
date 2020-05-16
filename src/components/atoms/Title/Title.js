import React from 'react';
import './Title.css';

const Title = ({ htmlType, children, styles }) => {
  switch (htmlType) {
    case "H1":
      return <h1 className={styles && styles.join(' ')}>{children}</h1>;
    case "H2":
      return <h2 className={styles && styles.join(' ')}>{children}</h2>;
    case "H3":
      return <h3 className={styles && styles.join(' ')}>{children}</h3>;
    case "H4":
      return <h4 className={styles && styles.join(' ')}>{children}</h4>;
    case "H5":
      return <h5 className={styles && styles.join(' ')}>{children}</h5>;
    case "H6":
      return <h6 className={styles && styles.join(' ')}>{children}</h6>;
    default:
      return <h1 className={styles && styles.join(' ')}>{children}</h1>;
  }
};

export default Title;
