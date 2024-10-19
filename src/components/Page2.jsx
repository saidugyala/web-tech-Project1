import React from 'react';
import BrijithaImage from '../Images/Brijitha_profile.jpeg';
function Page2() {
  return (
    <div className="Page-content">
      <h2>Brijitha Tialu</h2>
      <img src={BrijithaImage} style={{'height': '200px', 'width': '200px'}} alt="Brijitha Image" />
      <p>
        <strong>Role:</strong>
        Reporting and Delivery Lead
      </p>
      <p>I’m currently pursuing a Master’s degree in Computer Science at Saint Louis University. As a 
        tech lead and software engineer, I’m leading the development of a volunteer scheduling platform 
        for homeless shelters using React, Flask, and MongoDB. I have a strong foundation in databases,
        software development, and performance analysis, and I'm skilled in programming languages like 
        Python, Java, and JavaScript. In addition to my technical work, I have experience in event planning 
        and open source contributions. I am the project's delivery and reporting lead and am also assisting 
        with web development.
      </p>
      <p className='my-links'>
        <h3>Papers worked upon:</h3>
        <ul>
          <li>
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0925231221017185?casa_token=_WjpCjED%20HWAAAAAA:x-ChUhNlik0QC0FxxHFFda-4hu2dfWzpC5Wiqj6n9c6FQ_eylfXDiJBkJV4B73gcJyT%20z04jbNxE">
            A Survey Of Recommender Systems With Multi Objective Optimization
            </a>
          </li>
          <li>
            <a href="https://link.springer.com/article/10.1007/s11280-024-01291-2">
            A Survey On Large Language Models For Recommendation
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/pdf/2211.11518">
            Evaluating Web Search Engines Results For Personalization And User Tracking
            </a>
          </li>
          <li>
            <a href="https://www.researchgate.net/publication/370549900_Search_Engine_Optimization_A_Review_about_Concepts_Techniques_and_Algorithms">
            Search Engine Optimization: A Review About Concepts,Techniques And Algorithms
            </a>
          </li>
        </ul>
      </p>


    </div>
  );
}

export default Page2;
