import React from 'react';
import './text.css';

const Text = ({ children, styles }) => <p className={styles && styles.join(' ')}>{children}</p>;

export default Text;
