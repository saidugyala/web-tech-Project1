import React, { useState, useEffect } from 'react';
import '../Styles/Intro.css';
import Nav from './Nav';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Evaluation from '../Images/Evaluation_metrics.jpeg';
import Multiple from '../Images/Multiple.jpeg';
import SEO from '../Images/SEO.jpg';
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

  const [showChallenges, setShowChallenges] = useState(false);
  const [showTrends, setShowTrends] = useState(false);
  const [showFuture, setShowFuture] = useState(false);
  
  const toggleChallenges = () => setShowChallenges(!showChallenges);
  const toggleTrends = () => setShowTrends(!showTrends);
  const toggleFuture = () => setShowFuture(!showFuture);

  return (
    <div id="main">
		<Nav />
							<section id="intro" className="main">
								<div className="spotlight">
									<div className="content">
										<header className="major">
											<center><h2>Home</h2></center>
										</header>
										<div>
											<strong>Web Search Optimization: </strong> Web Search Optimization, commonly known as Search Engine Optimization (SEO), refers to the techniques used to improve the visibility and ranking of websites on search engine results pages (SERPs). The goal is to increase organic traffic to a website by ensuring it appears higher when users search for relevant keywords. Key elements of SEO include keyword research, content quality, backlinking, site structure, page speed, and mobile-friendliness. Optimizing these factors helps search engines like Google, Bing, and Yahoo understand and rank web pages effectively.
										</div>
										<br />
										<strong>Recommendation Systems: </strong> Recommendation systems are algorithms used to suggest relevant items to users based on their preferences, behavior, and interactions. Commonly found in platforms like Netflix, Amazon, and YouTube, recommendation systems personalize the user experience by filtering and predicting items (e.g., movies, products, videos) that users are likely to be interested in. There are two main types of recommendation systems:
										<div><strong>   1. Collaborative Filtering: </strong>Based on user behavior and similarities between users or items (e.g., "users who liked this also liked...").</div>
										<div><strong>   2. Content-Based Filtering:</strong> Recommends items similar to ones the user has liked before, based on item features (e.g., genres, categories).</div>
										<br />
										<h3 className="buttontoggle" onClick={toggleChallenges}>1. Key Challenges</h3>
										{showChallenges && (
        									<div className="mycontent" style={{ display: showChallenges ? "block" : "none" }}>
												<p>
													Web search personalization and recommender systems encounter several complicated issues that limit their effectiveness. Maintaining a balance between diversity and innovation and accuracy in recommender systems is still a major challenge because consumers prefer to look for a wider variety of choices rather than just the most well-liked ones. Furthermore, local optima are harder to avoid in multi-objective optimization, demanding comprehensive parameter tuning and Pareto optimality confirmation. Large language models (LLM's) biases can also produce unfair recommendations, which raises ethical issues. Similar problems with web search personalization include user privacy, which is frequently damaged by data tracking. The environment is further complicated by elements like search history and location, which might bias results and restrict user's access to a variety of content.
												</p>
											</div>
										)}
										<br></br>
										<h3 className="buttontoggle" onClick={toggleTrends}>2. Recent Trends</h3>
										{showTrends && (
        									<div className="mycontent" style={{ display: showTrends ? "block" : "none" }}>
												<p>
													Advancements in recommender systems and SEO are drastically changing the landscape. In the field of SEO, mobile-first indexing and AI-powered content creation have become essential components of contemporary optimization strategies. The diversity and quality of recommendations for recommender systems are being enhanced by hybrid models that combine various reinforcement learning algorithms with recommendation techniques. People are becoming more aware of the privacy of their data, which is why DuckDuckGo and other privacy-focused search engines are gaining in popularity. Additionally, the growing popularity of VPNs emphasizes how important it is to be anonymous online. In addition, companies are increasingly employing White Hat SEO practices to keep up with search engine requirements and improve their online visibility.
												</p>
											</div>
										)}
										<br></br>
										<h3 className="buttontoggle" onClick={toggleFuture}>3. Future Directions</h3>
										{showFuture && (
        									<div className="mycontent" style={{ display: showFuture ? "block" : "none" }}>
												<p>In the long run, recommender system research will concentrate on improving dynamic, real-time recommendations so that systems can more successfully adjust to changing user preferences. Another important area of research is improving LLM's ability to follow instructions, which will help models understand user intent in recommendation tasks more precisely. The development of techniques for balancing user privacy and personalization in web searches will be essential. The long-term effects of tailored search results on user behavior will also be studied by researchers, who hope to develop systems that offer useful content without compromising user diversity or privacy. The development of these technologies will be shaped by ongoing cooperation and innovation in these fields, opening the door to more morally and practically sound solutions. </p>
											</div>
										)}
										</div>
									
								</div>
							</section>

							
							<section id="first" className="main special">
								<header className="major">
									<h2>Content</h2>
									</header>
								<div>
									<p>The surveyed literature on web optimization and recommendation systems encompasses a 
										diverse range of methodologies and approaches aimed at enhancing user experience through
										 improved accuracy, diversity, and fairness in recommendations. Key themes include the 
										evolution of algorithms from traditional collaborative filtering to advanced hybrid models
										 and deep learning techniques, which leverage user data more effectively. Many studies 
										 emphasize the importance of multi-objective optimization frameworks that balance competing 
										 goals, such as accuracy and diversity, while addressing challenges like data sparsity and 
										 the cold-start problem. The integration of generative models has emerged as a promising 
										 avenue for generating novel recommendations, thereby increasing user engagement. 
										 Additionally, metaheuristic algorithms have been highlighted for their ability to 
										 navigate complex optimization landscapes. User-centric design principles are increasingly 
										 recognized as vital for ensuring that systems meet real-world needs, with a focus on incorporating 
										 user feedback and addressing fairness issues. Overall, the literature underscores the necessity for 
										 ongoing research to develop robust, scalable, and user-friendly systems that can adapt to the dynamic 
										 nature of user preferences and behaviors.
										 </p>
										<br />
										<img src={Evaluation} style={{'height': '400px', 'width': '400px'}} alt="Evaluation Image" />
										<p>
										The flowchart outlines an approach to optimizing recommendation systems using multi-objective optimization 
										to balance accuracy, diversity, and fairness. First, key objectives like relevance, variety, and 
										novelty are defined. An optimization method, such as evolutionary algorithms or deep learning, 
										is chosen to balance these goals. The system collects user data, trains the model, and generates 
										recommendations. Trade-offs are evaluated using performance metrics, and the best solution is selected. 
										The system is then updated to adapt to user preferences, with iterative refinement for continuous improvement.
										</p>
										<br />
										<img src={Multiple} style={{'height': '400px', 'width': '400px'}} alt="Multiple Image" />
										<p>
										The flowchart presents a structured approach to evaluating recommender systems for continuous improvement. 
										It begins by defining key metrics like accuracy, diversity, and user satisfaction. Offline testing is 
										conducted using historical data, followed by online experiments such as A/B testing to gather real-time 
										feedback. The results are analyzed to identify strengths and areas for improvement. Based on this analysis, 
										specific enhancements are implemented, and the process iterates, ensuring the system evolves and improves over time.
										</p>
										<br />
										<img src={SEO} style={{'height': '400px', 'width': '400px'}} alt="SEO Image" />
										<p>
										This survey explores the critical components of Search Engine Optimization (SEO) and their 
										interrelationships. Central to the discussion is SEO itself, with surrounding elements such as 
										backlinks, analysis, content, ranking, site architecture, and traffic. Each of these factors 
										plays a vital role in enhancing online visibility and search engine performance. By examining 
										how these elements interact, the survey aims to provide insights into effective SEO strategies 
										that can lead to improved website rankings and increased organic traffic.
										</p>
									</div>
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
