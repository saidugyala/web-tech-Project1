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
								</header>
								<table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
									<thead>
									<tr>
										<th style={{ textAlign: 'center' }}>Paper</th>
										<th style={{ textAlign: 'center' }}>Problem Domain</th>
										<th style={{ textAlign: 'center' }}>Solution Approach</th>
										<th style={{ textAlign: 'center' }}>Web Arch. Type</th>
										<th style={{ textAlign: 'center' }}>Evaluation Methodology</th>
										<th style={{ textAlign: 'center' }}>Application Domain</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>An Exhaustive Review of Metaheuristic Algorithms for Search and Optimization</td>
										<td>Optimization Theory</td>
										<td>Systematic Review</td>
										<td style={{ textAlign: 'center' }}>N/A</td>
										<td>Literature Review</td>
										<td>Various</td>
									</tr>
									<tr>
										<td>Web Service Composition Optimization with the Improved Fireworks Algorithm</td>
										<td>Web Service Composition</td>
										<td>Improved Fireworks Algorithm</td>
										<td style={{ textAlign: 'center' }}>N/A</td>
										<td>Experiments</td>
										<td>Various</td>
									</tr>
									<tr>
										<td>A Survey on Multi-Objective Recommender Systems</td>
										<td>Recommender Systems</td>
										<td>Taxonomy of MORS</td>
										<td style={{ textAlign: 'center' }}>N/A</td>
										<td>Literature Review</td>
										<td>Various</td>
									</tr>
									<tr>
										<td>Recommender System Metaheuristic for Optimizing Decision-Making Computation</td>
										<td>Decision-Making Optimization</td>
										<td>RS-Based Metaheuristic</td>
										<td style={{ textAlign: 'center' }}>N/A</td>
										<td>Simulated Experiments</td>
										<td>Operations Research</td>
									</tr>
									<tr>
										<td>Search Engine Performance Optimization: Methods and Techniques</td>
										<td>Search Engine Optimization</td>
										<td>Azure-Based Techniques</td>
										<td style={{ textAlign: 'center' }}>Cloud</td>
										<td>Case Studies</td>
										<td>Information Retrieval</td>
									</tr>
									<tr>
										<td>Search Engine Optimization: A Review about Concepts, Techniques, and Algorithms</td>
										<td>SEO Optimization</td>
										<td>On-Page & Off-Page Strategies</td>
										<td style={{ textAlign: 'center' }}>N/A</td>
										<td>Performance Research</td>
										<td>Digital Marketing</td>
									</tr>
									<tr>
										<td>A Survey of Recommender Systems with Multi-Objective Optimization</td>
										<td>Multi-Objective Optimization</td>
										<td>Pareto Optimality Validation</td>
										<td style={{ textAlign: 'center' }}>N/A</td>
										<td>Experimental Evaluations</td>
										<td>Recommender Systems</td>
									</tr>
									<tr>
										<td>Evaluating Web Search Engines Results for Personalization and User Tracking</td>
										<td>Web Search Personalization</td>
										<td>Controlled Experiments</td>
										<td style={{ textAlign: 'center' }}>N/A</td>
										<td>Comparative Analysis</td>
										<td>Information Access</td>
									</tr>
									<tr>
										<td>A Survey on Large Language Models for Recommendation</td>
										<td>LLMs in Recommendation Systems</td>
										<td>Systematic Review</td>
										<td style={{ textAlign: 'center' }}>N/A</td>
										<td>Systematic Review</td>
										<td>Recommendation Systems</td>
									</tr>
									<tr>
										<td>Multi-Agent Personalized Recommendation System in E-Commerce Based on User</td>
										<td>Personalized Recommendations</td>
										<td>Multi-Agent Architecture</td>
										<td style={{ textAlign: 'center' }}>N/A</td>
										<td>Accuracy, Recall, Specificity</td>
										<td>E-Commerce</td>
									</tr>
									<tr>
										<td>Trustworthy Recommender System</td>
										<td>Recommender Systems</td>
										<td>Trustworthy RS Framework</td>
										<td style={{ textAlign: 'center' }}>N/A</td>
										<td>Four-Stage Evaluation</td>
										<td>Finance and Medicine</td>
									</tr>
									<tr>
										<td>Development and Implementation of Search Engine Optimization Algorithm using Angular Framework</td>
										<td>SEO Challenges</td>
										<td>Angular-based SEO Algorithm</td>
										<td style={{ textAlign: 'center' }}>Server-Side</td>
										<td>Algorithm Implementation</td>
										<td>Web Development</td>
									</tr>
									<tr>
										<td>A Survey of Recommender Systems for Energy Efficiency in Buildings: Principles, challenges and prospect</td>
										<td>Energy Efficiency in Buildings</td>
										<td>Context-Aware RS</td>
										<td style={{ textAlign: 'center' }}>IoT</td>
										<td>Evaluation Metrics</td>
										<td>Building Sector</td>
									</tr>
									<tr>
									<td>Multi-Objective Optimization with Recommender Systems: A Systematic Review</td>
									<td>Recommender Systems</td>
									<td>Multi-Objective Optimization</td>
									<td style={{ textAlign: 'center' }}>N/A</td>
									<td>Systematic Review</td>
									<td>Various Industries</td>
									</tr>
									<tr>
									<td>Analyzing the Impact of Search Engine Optimization Techniques on Web Development Using Experiential and Collaborative Learning Techniques</td>
									<td>SEO Education</td>
									<td>Experiential Learning Techniques</td>
									<td style={{ textAlign: 'center' }}>N/A</td>
									<td>Experiential and Collaborative Learning</td>
									<td>Education</td>
									</tr>
									<tr>
									<td>A Systematic Review and Research Perspective on Recommender Systems</td>
									<td>Recommendation Systems</td>
									<td>Collaborative Filtering</td>
									<td style={{ textAlign: 'center' }}>N/A</td>
									<td>Simulation and Theoretical Analysis</td>
									<td>General</td>
									</tr>
									<tr>
									<td>Web Page Recommendation System Using Bat Optimization and Weighted Support Vector Machine Algorithm for Health Care Service</td>
									<td>Web Page Recommendation</td>
									<td>BAO + WSVVM</td>
									<td style={{ textAlign: 'center' }}>N/A</td>
									<td>Real-World Prototyping</td>
									<td>Healthcare</td>
									</tr>
									<tr>
									<td>A Survey of Retrieval Algorithms in Ad and Content</td>
									<td>Content and Ad Delivery</td>
									<td>Hybrid Systems</td>
									<td style={{ textAlign: 'center' }}>N/A</td>
									<td>Empirical Analysis</td>
									<td>Digital Marketing</td>
									</tr>
									<tr>
									<td>e-Recruitment Recommender Systems: A Systematic Review</td>
									<td>E-Recruitment</td>
									<td>Hybrid Approaches</td>
									<td style={{ textAlign: 'center' }}>N/A</td>
									<td>Literature Review</td>
									<td>Recruitment</td>
									</tr>
									<tr>
									<td>Search Engine Optimization (SEO) for Digital Marketers: Exploring Determinants of Online Search Visibility for Blood Bank Services</td>
									<td>SEO for Blood Banks</td>
									<td>SEO Techniques</td>
									<td style={{ textAlign: 'center' }}>N/A</td>
									<td>Empirical Study</td>
									<td>Blood Bank Services</td>
									</tr>
									<tr>
									<td>MultipleBip: A Web-Scale Recommendation System Using Multiple Bipartite Graphs at Pinterest</td>
									<td>Recommendation Systems</td>
									<td>Deep Learning with Bipartite Graphs</td>
									<td style={{ textAlign: 'center' }}>Centralized Cloud</td>
									<td>User Engagement Metrics</td>
									<td>Social Media</td>
									</tr>
									<tr>
									<td>Research on the Application of Search Algorithm in Computer Communication Network</td>
									<td>Network Optimization</td>
									<td>Genetic Algorithm-Based Tabu Search</td>
									<td style={{ textAlign: 'center' }}>Distributed Edge-Cloud</td>
									<td>Simulation and Theoretical Analysis</td>
									<td>Communication Networks</td>
									</tr>
									<tr>
									<td>A Survey of Generative Search and Recommendation in the Era of Large Language Models</td>
									<td>Search and Recommendation Systems</td>
									<td>Generative Methods with LLMs</td>
									<td style={{ textAlign: 'center' }}>Hybrid (Cloud and Local)</td>
									<td>Case Studies and Empirical Evaluations</td>
									<td>Various Online Platforms</td>
									</tr>
									<tr>
									<td>Contemporary Recommendation Systems on Big Data and Their Applications: A Survey</td>
									<td>Recommendation Systems</td>
									<td>Content-Based, Collaborative Filtering, Hybrid Approaches</td>
									<td style={{ textAlign: 'center' }}>Cloud-Only</td>
									<td>Literature Review and Benchmarking Datasets</td>
									<td>E-commerce, Healthcare, Social Media</td>
									</tr>
									</tbody>
								</table>
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
