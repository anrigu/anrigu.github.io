import React from 'react';
import { publications } from '../data/publications';

const Publications = () => {
  return (
    <section className="publications" id="publications">
      <h2>Publications</h2>
      <p className="publication-note">* denotes equal contribution</p>
      {publications.map((pub, index) => (
        <div key={index} className="publication-item">
          <h3 className="publication-title">{pub.title}</h3>
          <p className="publication-authors">{pub.authors}</p>
          <p className="publication-citation">{pub.citation}</p>
          {pub.special && (
            <p className="publication-special">{pub.special}</p>
          )}
          {pub.link && (
            <a 
              href={pub.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="publication-link"
            >
              PDF
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default Publications;

