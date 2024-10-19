import React, { useState, useEffect } from 'react';
import '../Styles/Intro.css';
import Nav from './Nav';
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
    }, 8000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main">
		<Nav />
							<section id="intro" className="main">
								<div className="spotlight">
									<div className="content">
										<header className="major">
											<center><h2>Home</h2></center>
										</header>
										<h2>Key Challenges</h2>
										<p>Web search personalization and recommender systems encounter several complicated issues that limit their effectiveness. Maintaining a balance between diversity and innovation and accuracy in recommender systems is still a major challenge because consumers prefer to look for a wider variety of choices rather than just the most well-liked ones. Furthermore, local optima are harder to avoid in multi-objective optimization, demanding comprehensive parameter tuning and Pareto optimality confirmation. Large language models (LLM's) biases can also produce unfair recommendations, which raises ethical issues. Similar problems with web search personalization include user privacy, which is frequently damaged by data tracking. The environment is further complicated by elements like search history and location, which might bias results and restrict user's access to a variety of content. </p>
										<br></br>
										<h2>Recent Trends</h2>
										<p>
										Advancements in recommender systems and SEO are drastically changing the landscape. In the field of SEO, mobile-first indexing and AI-powered content creation have become essential components of contemporary optimization strategies. The diversity and quality of recommendations for recommender systems are being enhanced by hybrid models that combine various reinforcement learning algorithms with recommendation techniques. People are becoming more aware of the privacy of their data, which is why DuckDuckGo and other privacy-focused search engines are gaining in popularity. Additionally, the growing popularity of VPNs emphasizes how important it is to be anonymous online. In addition, companies are increasingly employing White Hat SEO practices to keep up with search engine requirements and improve their online visibility.
										</p>
										<br></br>
										<h2>Future Directions</h2>
										<p>In the long run, recommender system research will concentrate on improving dynamic, real-time recommendations so that systems can more successfully adjust to changing user preferences. Another important area of research is improving LLM's ability to follow instructions, which will help models understand user intent in recommendation tasks more precisely. The development of techniques for balancing user privacy and personalization in web searches will be essential. The long-term effects of tailored search results on user behavior will also be studied by researchers, who hope to develop systems that offer useful content without compromising user diversity or privacy. The development of these technologies will be shaped by ongoing cooperation and innovation in these fields, opening the door to more morally and practically sound solutions. </p>
									</div>
									
								</div>
							</section>

							
							<section id="first" className="main special">
								<header className="major">
									<h2>Content</h2>
									<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.  </p>
								</header>
							</section>

					
							<section id="second" className="main special">
								<header className="major">
									<h2>Taxonomy</h2>
									<p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
									posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
								</header>
								
								<p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
							
							</section>

						
							<section id="cta" className="main special">
								<header className="major">
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
