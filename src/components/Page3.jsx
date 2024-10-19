import React from 'react';
import NehaImage from '../Images/Neha_profile.jpeg';
function Page3() {
  return (
    <div className="Page-content">
      <h2>Yashaswini Sree Neha Garapati</h2>
      <img src={NehaImage} style={{'height': '200px', 'width': '200px'}} alt="Neha Image" />
      <p>
        <strong>Role:</strong>
        Content Validator
      </p>
      <p>I am Yashaswini Sree Neha Garapati a Graduate Student From Computer Science Department.
        My Hobbies are Swimming, Watching Movies, Travelling.I have worked as software Engineer 
        for 2.3 Years and I am Interested In Learning Front End and Back End Technologies to work 
        and get more experience in  real time projects.
      </p>
      <p className='my-links'>
        <h3>Papers worked upon:</h3>
        <ul>
          <li>
            <a href="https://link.springer.com/article/10.1186/s40537-022-00592-5">
            A Systematic Review And Research Perspective On Recommender Systems
            </a>
          </li>
          <li>
            <a href="https://sciencescholar.us/journal/index.php/ijhs/article/view/6333">
            Web Page Recommendation System Using Bat Optimization and Weighted Support Vector
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2407.01712">
            A Survey On Retrieval Algorithms in Ad and Content Recommendation Systems
            </a>
          </li>
          <li>
            <a href="https://link.springer.com/article/10.1007/s10115-020-01522-8">
            E Recruitment Recommender Systems: a Systematic Review
            </a>
          </li>
          <li>
            <a href="https://www.emerald.com/insight/content/doi/10.1108/OIR-05-2022-0276/full/html">
            Search engine optimization (SEO) for digital marketers: exploring determinants of online search visibility for blood bank service
            </a>
          </li>
        </ul>
      </p>

    </div>
  );
}

export default Page3;
