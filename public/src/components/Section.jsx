import React from 'react';

function Section({ id, title }) {
  return (
    <section id={id} className="main special">
      <header className="major">
        <h2>{title}</h2>
      </header>
      <p></p>
    </section>
  );
}

export default Section;
