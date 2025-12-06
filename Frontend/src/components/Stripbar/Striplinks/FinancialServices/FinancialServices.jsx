import React, { useState } from 'react';
import './FinancialServices.css';

const FinancialServices = () => {
  const [activeTab, setActiveTab] = useState('grants');
  const [activeStory, setActiveStory] = useState(null);

  const renderTabContent = () => {
    switch(activeTab) {
      case 'grants':
        return (
          <div className="tab-content grants-content">
            <h3>Community Development Grants</h3>
            <div className="grant-cards">
              <div className="grant-card">
                <div className="grant-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <h4>Small Business Startup Grant</h4>
                <p>Funding for new local businesses that create jobs and contribute to community development.</p>
                <ul className="grant-details">
                  <li><span>Amount:</span> Up to ₹500,000</li>
                  <li><span>Eligibility:</span> New businesses less than 1 year old</li>
                  <li><span>Application Period:</span> Quarterly</li>
                </ul>
                <button className="apply-btn">Apply Now</button>
              </div>

              <div className="grant-card">
                <div className="grant-icon">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h4>Social Innovation Fund</h4>
                <p>Supporting innovative solutions to social problems in healthcare, education, and welfare.</p>
                <ul className="grant-details">
                  <li><span>Amount:</span> ₹200,000 - ₹1,000,000</li>
                  <li><span>Eligibility:</span> NGOs and social enterprises</li>
                  <li><span>Application Period:</span> January & July</li>
                </ul>
                <button className="apply-btn">Apply Now</button>
              </div>

              <div className="grant-card">
                <div className="grant-icon">
                  <i className="fas fa-solar-panel"></i>
                </div>
                <h4>Green Energy Initiative Grant</h4>
                <p>Funding for projects that promote renewable energy and sustainable practices in the community.</p>
                <ul className="grant-details">
                  <li><span>Amount:</span> Up to ₹800,000</li>
                  <li><span>Eligibility:</span> All organizations with green initiatives</li>
                  <li><span>Application Period:</span> March & September</li>
                </ul>
                <button className="apply-btn">Apply Now</button>
              </div>

              <div className="grant-card">
                <div className="grant-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Education & Skill Development Grant</h4>
                <p>Supporting programs that enhance skills and provide educational opportunities in underserved areas.</p>
                <ul className="grant-details">
                  <li><span>Amount:</span> Up to ₹600,000</li>
                  <li><span>Eligibility:</span> Educational institutions & training centers</li>
                  <li><span>Application Period:</span> Year-round</li>
                </ul>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>

            <div className="grant-process">
              <h3>Application Process</h3>
              <div className="process-steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Eligibility Check</h4>
                  <p>Review requirements and confirm your project meets the criteria</p>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Application Submission</h4>
                  <p>Complete the online form with project details and funding requirements</p>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Review & Assessment</h4>
                  <p>Expert panel evaluates proposals based on impact and feasibility</p>
                </div>
                <div className="step">
                  <div className="step-number">4</div>
                  <h4>Award & Implementation</h4>
                  <p>Successful applicants receive funding and begin project execution</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'loans':
        return (
          <div className="tab-content loans-content">
            <h3>Community Loan Programs</h3>
            <div className="loan-cards">
              <div className="loan-card">
                <div className="loan-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h4>Micro-Enterprise Loan</h4>
                <p>Low-interest loans for small-scale entrepreneurs and micro-businesses.</p>
                <ul className="loan-details">
                  <li><span>Amount:</span> ₹50,000 - ₹300,000</li>
                  <li><span>Interest Rate:</span> 4% - 6%</li>
                  <li><span>Term:</span> Up to 5 years</li>
                </ul>
                <button className="apply-btn">Learn More</button>
              </div>

              <div className="loan-card">
                <div className="loan-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Self-Help Group Loan</h4>
                <p>Collective loans for women's groups and community collectives.</p>
                <ul className="loan-details">
                  <li><span>Amount:</span> Up to ₹500,000</li>
                  <li><span>Interest Rate:</span> 3% - 5%</li>
                  <li><span>Term:</span> Up to 4 years</li>
                </ul>
                <button className="apply-btn">Learn More</button>
              </div>

              <div className="loan-card">
                <div className="loan-icon">
                  <i className="fas fa-tractor"></i>
                </div>
                <h4>Agricultural Development Loan</h4>
                <p>Financing for farmers and agricultural initiatives to enhance productivity.</p>
                <ul className="loan-details">
                  <li><span>Amount:</span> ₹100,000 - ₹700,000</li>
                  <li><span>Interest Rate:</span> 4.5% - 7%</li>
                  <li><span>Term:</span> Up to 7 years</li>
                </ul>
                <button className="apply-btn">Learn More</button>
              </div>

              <div className="loan-card">
                <div className="loan-icon">
                  <i className="fas fa-home"></i>
                </div>
                <h4>Housing Improvement Loan</h4>
                <p>Affordable financing for home repairs and essential improvements.</p>
                <ul className="loan-details">
                  <li><span>Amount:</span> ₹100,000 - ₹500,000</li>
                  <li><span>Interest Rate:</span> 5% - 7.5%</li>
                  <li><span>Term:</span> Up to 10 years</li>
                </ul>
                <button className="apply-btn">Learn More</button>
              </div>
            </div>

            <div className="loan-eligibility">
              <h3>Eligibility & Requirements</h3>
              <div className="eligibility-container">
                <div className="eligibility-item">
                  <div className="eligibility-icon"><i className="fas fa-id-card"></i></div>
                  <div className="eligibility-content">
                    <h4>Identification</h4>
                    <p>Valid ID proof, address verification, and photographs</p>
                  </div>
                </div>
                <div className="eligibility-item">
                  <div className="eligibility-icon"><i className="fas fa-file-alt"></i></div>
                  <div className="eligibility-content">
                    <h4>Documentation</h4>
                    <p>Income proof, business plan (if applicable), and property documents</p>
                  </div>
                </div>
                <div className="eligibility-item">
                  <div className="eligibility-icon"><i className="fas fa-chart-line"></i></div>
                  <div className="eligibility-content">
                    <h4>Financial History</h4>
                    <p>Credit score assessment and repayment capacity evaluation</p>
                  </div>
                </div>
                <div className="eligibility-item">
                  <div className="eligibility-icon"><i className="fas fa-shield-alt"></i></div>
                  <div className="eligibility-content">
                    <h4>Guarantors</h4>
                    <p>Co-signer or collateral based on loan type and amount</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'advisory':
        return (
          <div className="tab-content advisory-content">
            <h3>Financial Advisory Services</h3>
            <div className="advisory-intro">
              <p>Our team of financial experts provides guidance and support to help individuals and businesses make informed financial decisions and achieve their financial goals.</p>
            </div>

            <div className="advisory-cards">
              <div className="advisory-card">
                <div className="advisory-icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <h4>Budget Planning</h4>
                <p>Personalized guidance to create sustainable budgets and financial plans tailored to your needs.</p>
                <ul className="service-includes">
                  <li>Income and expense analysis</li>
                  <li>Priority-based budgeting</li>
                  <li>Debt management strategies</li>
                  <li>Savings plan development</li>
                </ul>
                <button className="schedule-btn">Schedule Consultation</button>
              </div>

              <div className="advisory-card">
                <div className="advisory-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <h4>Business Financial Planning</h4>
                <p>Expert advice for businesses on cash flow management, investment, and expansion strategies.</p>
                <ul className="service-includes">
                  <li>Business plan development</li>
                  <li>Cash flow optimization</li>
                  <li>Risk assessment</li>
                  <li>Growth financing options</li>
                </ul>
                <button className="schedule-btn">Schedule Consultation</button>
              </div>

              <div className="advisory-card">
                <div className="advisory-icon">
                  <i className="fas fa-piggy-bank"></i>
                </div>
                <h4>Savings & Investment</h4>
                <p>Guidance on building savings and making smart investments for long-term financial security.</p>
                <ul className="service-includes">
                  <li>Emergency fund planning</li>
                  <li>Investment options analysis</li>
                  <li>Risk tolerance assessment</li>
                  <li>Retirement planning</li>
                </ul>
                <button className="schedule-btn">Schedule Consultation</button>
              </div>

              <div className="advisory-card">
                <div className="advisory-icon">
                  <i className="fas fa-chalkboard-teacher"></i>
                </div>
                <h4>Financial Literacy Workshops</h4>
                <p>Educational sessions for groups and communities to enhance financial knowledge and skills.</p>
                <ul className="service-includes">
                  <li>Basic financial concepts</li>
                  <li>Debt and credit management</li>
                  <li>Investment fundamentals</li>
                  <li>Digital financial tools</li>
                </ul>
                <button className="schedule-btn">Schedule Workshop</button>
              </div>
            </div>

            <div className="expert-team">
              <h3>Our Financial Experts</h3>
              <div className="experts-container">
                <div className="expert">
                  <div className="expert-image"></div>
                  <h4>Priya Sharma</h4>
                  <p className="expert-title">Senior Financial Advisor</p>
                  <p>15+ years of experience in personal finance and investment planning</p>
                </div>
                <div className="expert">
                  <div className="expert-image"></div>
                  <h4>Rajiv Mehta</h4>
                  <p className="expert-title">Business Finance Specialist</p>
                  <p>Expert in SME financing and business development strategy</p>
                </div>
                <div className="expert">
                  <div className="expert-image"></div>
                  <h4>Anita Desai</h4>
                  <p className="expert-title">Microfinance Consultant</p>
                  <p>Specialist in community-based financial inclusion programs</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'schemes':
        return (
          <div className="tab-content schemes-content">
            <h3>Government Financial Schemes</h3>
            <div className="schemes-intro">
              <p>We help citizens access and benefit from various government financial schemes and programs aimed at economic empowerment and social welfare.</p>
            </div>

            <div className="schemes-cards">
              <div className="scheme-card">
                <div className="scheme-icon">
                  <i className="fas fa-user-graduate"></i>
                </div>
                <h4>Education Scholarship Programs</h4>
                <p>Various scholarships and education financing options from government sources.</p>
                <ul className="scheme-details">
                  <li><span>Eligibility:</span> Students from low-income families</li>
                  <li><span>Coverage:</span> Tuition fees, books, and living expenses</li>
                  <li><span>Application:</span> Through school or directly online</li>
                </ul>
                <button className="details-btn">View Details</button>
              </div>

              <div className="scheme-card">
                <div className="scheme-icon">
                  <i className="fas fa-industry"></i>
                </div>
                <h4>MSME Development Programs</h4>
                <p>Government initiatives to support micro, small, and medium enterprises.</p>
                <ul className="scheme-details">
                  <li><span>Eligibility:</span> Registered MSMEs with valid certification</li>
                  <li><span>Benefits:</span> Subsidized loans, tax benefits, training</li>
                  <li><span>Application:</span> Through district industry centers</li>
                </ul>
                <button className="details-btn">View Details</button>
              </div>

              <div className="scheme-card">
                <div className="scheme-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h4>Social Security Pensions</h4>
                <p>Monthly financial assistance for elderly, widows, and differently-abled individuals.</p>
                <ul className="scheme-details">
                  <li><span>Eligibility:</span> Based on age, income, and disability status</li>
                  <li><span>Amount:</span> ₹1,200 - ₹3,000 per month</li>
                  <li><span>Application:</span> Through local government offices</li>
                </ul>
                <button className="details-btn">View Details</button>
              </div>

              <div className="scheme-card">
                <div className="scheme-icon">
                  <i className="fas fa-female"></i>
                </div>
                <h4>Women Empowerment Schemes</h4>
                <p>Financial support and skill development programs for women entrepreneurs.</p>
                <ul className="scheme-details">
                  <li><span>Eligibility:</span> Women from all backgrounds</li>
                  <li><span>Benefits:</span> Interest subsidies, training, market linkages</li>
                  <li><span>Application:</span> Online or through women development centers</li>
                </ul>
                <button className="details-btn">View Details</button>
              </div>
            </div>

            <div className="document-assistance">
              <div className="assistance-content">
                <h3>Application Assistance</h3>
                <p>Need help applying for government schemes? Our team can assist with documentation, form filling, and submission processes.</p>
                <div className="assistance-options">
                  <button className="assistance-btn"><i className="fas fa-calendar-alt"></i> Schedule Appointment</button>
                  <button className="assistance-btn"><i className="fas fa-phone"></i> Get Phone Assistance</button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="financial-services-container">
      <div className="financial-header">
        <div className="header-content">
          <h1>Financial Services</h1>
          <p>Empowering communities through accessible financial solutions</p>
        </div>
      </div>

      <div className="services-tabs">
        <button 
          className={activeTab === 'grants' ? 'active' : ''}
          onClick={() => setActiveTab('grants')}
        >
          <i className="fas fa-hand-holding-usd"></i>
          Grants & Funding
        </button>
        <button 
          className={activeTab === 'loans' ? 'active' : ''}
          onClick={() => setActiveTab('loans')}
        >
          <i className="fas fa-landmark"></i>
          Loan Programs
        </button>
        <button 
          className={activeTab === 'advisory' ? 'active' : ''}
          onClick={() => setActiveTab('advisory')}
        >
          <i className="fas fa-comments-dollar"></i>
          Financial Advisory
        </button>
        <button 
          className={activeTab === 'schemes' ? 'active' : ''}
          onClick={() => setActiveTab('schemes')}
        >
          <i className="fas fa-university"></i>
          Government Schemes
        </button>
      </div>

      <div className="services-content">
        {renderTabContent()}
      </div>

      <div className="success-stories">
        <div className="stories-header">
          <h2>Success Stories</h2>
          <p>Real-life examples of how our financial services have transformed lives and communities</p>
        </div>
        
        <div className="stories-container">
          <div className="story-card">
            <div className="story-image image1"></div>
            <div className="story-content">
              <h3>Women's Cooperative Thrives With Micro-Financing</h3>
              <p>A group of 15 women from Rajnagar village established a successful textile cooperative with the help of a self-help group loan, increasing their household incomes by over 60%.</p>
              <button className="read-more" onClick={() => window.open('/success-stories/womens-cooperative', '_blank')}>Read Full Story</button>
            </div>
          </div>
          
          <div className="story-card">
            <div className="story-image image2"></div>
            <div className="story-content">
              <h3>Organic Farmer Expands with Agricultural Loan</h3>
              <p>Ramu, a small-scale farmer, transformed his traditional farm into a thriving organic produce business with the help of our agricultural development loan program.</p>
              <button className="read-more" onClick={() => window.open('/success-stories/organic-farmer', '_blank')}>Read Full Story</button>
            </div>
          </div>
          
          <div className="story-card">
            <div className="story-image image3"></div>
            <div className="story-content">
              <h3>Tech Training Center Opens with Innovation Grant</h3>
              <p>A community tech training center was established using our social innovation grant, providing digital skills training to over 500 youth from underserved backgrounds.</p>
              <button className="read-more" onClick={() => window.open('/success-stories/tech-training-center', '_blank')}>Read Full Story</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="financial-contact">
        <div className="contact-content">
          <h2>Get Personalized Financial Guidance</h2>
          <p>Our team is ready to help you navigate financial options and find solutions tailored to your needs.</p>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <select required>
                <option value="" disabled selected>Select Service of Interest</option>
                <option value="grants">Grants & Funding</option>
                <option value="loans">Loan Programs</option>
                <option value="advisory">Financial Advisory</option>
                <option value="schemes">Government Schemes</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Brief Description of Your Financial Needs" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Request Consultation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;
