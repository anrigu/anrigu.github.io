import React from 'react';
import { profile } from '../data/profile';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <img 
        src={profile.avatar} 
        alt={profile.name}
        className="avatar"
      />
      <h1>{profile.name}</h1>
      <div className="links">
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer">github</a>
        <a href={profile.links.cv} target="_blank" rel="noopener noreferrer">cv</a>
        <a href={`mailto:${profile.email}`}>email</a>
        <a href={profile.links.googleScholar} target="_blank" rel="noopener noreferrer">scholar</a>
      </div>
      <div className="bio">
        <p>I am a 1st year PhD student in Computer Science at the University of Chicago fortunate to be advised by <a href="https://www.haifeng-xu.com/sigma/" target="_blank" rel="noopener noreferrer">Haifeng Xu</a>. Previously, I was an undergraduate student at the University of Michigan studying Computer Science and Economics, where I was advised by <a href="https://eecs.engin.umich.edu/people/wellman-michael/" target="_blank" rel="noopener noreferrer">Michael Wellman</a>. Broadly speaking, I'm interested in <em>algorithmic game theory</em> and <em>multi-agent systems</em>. In particular, I'm interested in analyzing strategic environments where decision-makers have incomplete or limited access to information, both from theoretical and empirical standpoints.</p>
      </div>
    </section>
  );
};

export default Hero;

