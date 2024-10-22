import React from 'react';
import AnkithImage from '../Images/Ankith_profile.jpeg'
function Page5() {
  return (
    <div className="Page-content">
      <h2>Ankith</h2>
      <img src={AnkithImage} style={{'height': '200px', 'width': '200px'}} alt="Ankith Image" />
      <p>
        <strong>Role:</strong>
        Content Validator
      </p>
      <p>I am pursuing my Masters in Computer Science from Saint Louis University. My hobbies 
        include playing tennis, gaming and travelling. I have worked on a few exciting projects 
        such as visual light communication and hybrid Li-Fi and Wi-Fi environments. I also take 
        great interest in computer security and the different kinds of threats that can be mitigated 
        with the advancement of technology.
        My contribution for the project includes Validating the reaserch papers and survey paper on overleaf .
      </p>
      <p className='my-links'>
        <h3>Papers worked upon:</h3>
        <ul>
          <li>
            <a href="https://arxiv.org/abs/2205.10666">
            Multi BiSage: A Web Scale Recommendation System Using Multiple BiPartite Graphs
            At Pinterest
            </a>
          </li>
          <li>
            <a href="https://www.degruyter.com/document/doi/10.1515/jisys-2021-0263/html">
            Research On The Application Of Search Algorithm In Computer Communication
            Network
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2404.16924">
            A Survey of Generative Search And Recommendation In The Era Of Large Language
            Models
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/pdf/2206.02631v4">
            Contemporary Recommendation Systems on Big Data and Their Applications: A Survey
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2011.02260">
            Graph Neural Networks in Recommender Systems: A Survey
            </a>
          </li>
        </ul>
      </p>

    </div>
  );
}

export default Page5;
