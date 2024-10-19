import React from 'react';
import shafeeqImage from '../Images/Shaffeq_profile.jpeg';
function Page4() {
  return (
    <div className="Page-content">
      <h2>Shafeeq sadiq</h2>
      <img src={shafeeqImage} style={{'height': '200px', 'width': '200px'}} alt="Shafeeq Image" />
      <p>
        <strong>Role:</strong>
        Website Developer
      </p>
      <p>I'm Shafeeq Sadiq, a computer science graduate student from the southern part of India (Chennai). 
        My hobbies include playing football (soccer), photography, and travelling. I have previously worked 
        as a data analyst and am interested in learning more about predictive modeling and computer vision. 
        I have completed a few projects featuring machine learning (CNN), mobile app development (Kotlin), and IoT.
      </p>
      <p className='my-links'>
        <h3>Papers worked upon:</h3>
        <ul>
          <li>
            <a href="https://www.mdpi.com/2079-9292/12/12/2661" target='/1'>
            : Recommender Systems Metaheuristic For Optimizing Decision Making Computation
            </a>
          </li>
          <li>
            <a href="https://www.frontiersin.org/journals/big-data/articles/10.3389/fdata.2023.1157899/full" target='/2'>
            A Survey On Multi Objective Recommender Systems
            </a>
          </li>
          <li>
            <a href="https://onlinelibrary.wiley.com/doi/full/10.1155/2022/4277909" target='/3'>
            Web Search Composition Optimization With the Improved Fireworks Algorithm
            </a>
          </li>
          <li>
            <a href="https://link.springer.com/article/10.1007/s10462-023-10470-y" target='/4'>
            An Exhaustive Review Of The MetaHeuristic Algorithms For Search and
            Optimization: Taxonomy, Applications, And Open Challenges
            </a>
          </li>
        </ul>
      </p>

    </div>
  );
}

export default Page4;
