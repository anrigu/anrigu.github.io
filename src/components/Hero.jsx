import React from 'react';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section className="hero">
      <img 
        src={profile.avatar} 
        alt={profile.name}
        className="avatar"
      />
      <h1>{profile.name}</h1>
      <div className="links">
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer">github</a>
        <a href={`${profile.links.cv}?v=${Date.now()}`} target="_blank" rel="noopener noreferrer">cv</a>
        <a href={`mailto:${profile.email}`}>email</a>
        <a href={profile.links.googleScholar} target="_blank" rel="noopener noreferrer">scholar</a>
      </div>
      <div className="bio">
        <p>Computer Science PhD student at the University of Chicago advised by <a href="https://www.haifeng-xu.com/sigma/" target="_blank" rel="noopener noreferrer">Haifeng Xu</a>. I work on <em>AI for open-domain reasoning</em> (e.g., <em>forecasting</em>). In particular, I’m interested in how AI systems and other decision-makers reason and act in open-ended, strategic environments where information is incomplete or limited. Previously, I was an undergraduate at the University of Michigan, where I was advised by <a href="https://eecs.engin.umich.edu/people/wellman-michael/" target="_blank" rel="noopener noreferrer">Michael Wellman</a>.</p>
      </div>
    </section>
  );
};

export default Hero;

