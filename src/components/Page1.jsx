import React from 'react';
import saiTejaImage from '../Images/saidugyala_profile.jpg';

function Page1() {
  return (
    <div className="Page-content" >
      <h2>Sai Teja Dugyala</h2>
      <img src={saiTejaImage} style={{'height': '200px', 'width': '200px'}} alt="Sai Teja Image" />
      <p>
        <strong>Role:</strong>
        Website Developer
      </p>
      <p>I am currently pursuing a Master’s degree in Software Engineering with a strong focus on 
        full-stack development. Skilled in Java, Python, SQL, HTML and CSS. I aim to become 
        a proficient full-stack developer. Outside of academics, I enjoy playing cricket, watching 
        movies, and gardening.
      </p>
      <p className='my-links'>
        <h3>Papers worked upon:</h3>
        <ul>
          <li>
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0306437923000698?casa_token=VS2VDfM5%20VUwAAAAA:3FlpuQNogEmV2oFgMiaTOr_y2gefIgs7qkGDT5tkoj1hGDSsm2yRpFahZqjNKU1ki%203zGGE3pmEg">
            Multi Objective Optimization With Recommender Systems: A Systematic Review
            </a>
          </li>
          <li>
            <a href="https://lutpub.lut.fi/bitstream/handle/10024/74639/thesis_AbrarSohail.pdf">
            Search Engine Optimization Methods And Search Engine Indexing For CMS
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S1566253521000178">
            A Survey On Recommender Systems For Energy Efficiency In Buildings, Principles,
            Challenges And Prospects
            </a>
          </li>
          <li>
            <a href="https://www.ijcit.com/index.php/ijcit/article/view/267">
            Development And Implementation Of Search Engine Optimization Algorithm Using
            Angular FrameWork
            </a>
          </li>
          <li>
            <a href="https://dl.acm.org/doi/full/10.1145/3627826">
            Trustworthy Recommender Systems
            </a>
          </li>
        </ul>
      </p>

    </div>
  );
}

export default Page1;