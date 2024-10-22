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
        movies, and gardening. My contribution for the project includes website development and worked on survey paper.
      </p>
      
        
      
      <p className='my-links'>
        <h3>Papers worked upon:</h3>
        <ul>
          <li>
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0306437923000698?casa_token=VS2VDfM5%20VUwAAAAA:3FlpuQNogEmV2oFgMiaTOr_y2gefIgs7qkGDT5tkoj1hGDSsm2yRpFahZqjNKU1ki%203zGGE3pmEg">
            Multi Objective Optimization With Recommender Systems: A Systematic Review.
            </a>
          </li>
          <li>
            <a href="https://d1wqtxts1xzle7.cloudfront.net/110118958/IJMECS-V13-N2-1-libre.pdf?1704564519=&response-content-disposition=inline%3B+filename%3DAnalyzing_the_Impact_of_Search_Engine_Op.pdf&Expires=1729536866&Signature=e~mYu6IeSU-AkUT-DdslYSNZ7bgFSmAA9j-i9ppdjq7yJsJ~l9uSJMi5P4MuwM5GtT1fexAu2ujhBahQk71W-tC-mXUwO9KPWoOi6p3KRf~wX-Q7f3RDIki9utK1KE3xmSdolIo1xOuO8ZW-NIHI-VVlS2pDEyQy2yUVxl3OakMWrTxLyCmIuEsMbzySGana0T13AoHoNfwpZ6L2q8CYk0MyWQgqYOfO2FJe7z3ylOSnxb5Tscuo4b6KE~KiD2PSXXJ8RQT8Vg-oSGQG6BlKInccGq5I95DynaWnVl0vv5blusCn1KECoQo2I3pccZxc8bt45cMYIgZqDB8O4dNz3w__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA">
            Analyzing the Impact of Search Engine Optimization Techniques on Web Development 
            Using Experiential and Collaborative Learning Techniques.
            </a>
          </li>
          <li>
            <a href="https://www.sciencedirect.com/science/article/pii/S1566253521000178">
            A Survey On Recommender Systems For Energy Efficiency In Buildings, Principles,
            Challenges And Prospects.
            </a>
          </li>
          <li>
            <a href="https://www.ijcit.com/index.php/ijcit/article/view/267">
            Development And Implementation Of Search Engine Optimization Algorithm Using
            Angular FrameWork.
            </a>
          </li>
          <li>
            <a href="https://dl.acm.org/doi/full/10.1145/3627826">
            Trustworthy Recommender Systems.
            </a>
          </li>
        </ul>
      </p>

    </div>
  );
}

export default Page1;