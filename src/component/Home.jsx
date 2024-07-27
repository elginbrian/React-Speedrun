import React from "react";

function Home() {
  return (
    <div>
      <header>
        <nav>
          <img src="../../Logo.svg" alt="React Logo" />
        </nav>
      </header>

      <h1 className="text-3xl font-bold underline">Reasons I'm excited to learn React</h1>
      <ol>
        <li>Modularity and reusability</li>
        <li>Easier to learn and use</li>
        <li>Scalable and maintainable</li>
        <li>Community support and resources</li>
        <li>Potential for future projects</li>
      </ol>

      <footer>
        <small>Elgin Brian, 2024</small>
      </footer>
    </div>
  );
}

export default Home;
