import React, { useState, useEffect } from 'react';
import '../Styles/Intro.css';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
//import '../Styles/Page.css';

const pages = [<Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />];

function Intro() {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPreviousPage = () => {
    const newIndex = (currentPage === 0) ? pages.length - 1 : currentPage - 1;
    setCurrentPage(newIndex);
  };

  const goToNextPage = () => {
    const newIndex = (currentPage === pages.length - 1) ? 0 : currentPage + 1;
    setCurrentPage(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main">

							<section id="intro" class="main">
								<div class="spotlight">
									<div class="content">
										<header class="major">
											<center><h2>Home</h2></center>
										</header>
										<p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
										adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
										Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
									</div>
									
								</div>
							</section>

					
							<section id="first" class="main special">
								<header class="major">
									<h2>Content</h2>
								</header>
							</section>

					
							<section id="second" class="main special">
								<header class="major">
									<h2>Taxonomy</h2>
									<p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
									posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
								</header>
								
								<p class="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
							
							</section>

						
							<section id="cta" class="main special">
								<header class="major">
									<h2>Team</h2>
                  <section id="style">
                    {pages[currentPage]}
									  {/*<p>{pages[currentPage].content}</p>*/}
                    <div className="arrow left-arrow" onClick={goToPreviousPage}>
                  &#10094;
                </div>
                <div className="arrow right-arrow" onClick={goToNextPage}>
                  &#10095;
                </div>
                  </section>
                  
								</header>
								
							</section>

					</div>
  );
}

export default Intro;
