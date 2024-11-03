import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function About() {
    const coreValues = [
        {
          title: "Integrity",
          icon: "bi bi-shield-lock",
          content: "We adhere to the highest ethical standards, fostering trust and transparency in every client interaction and business decision we make."
        },
        {
          title: "Innovation",
          icon: "bi bi-lightbulb",
          content: "Our team constantly seeks new and creative solutions, staying ahead of technological advancements to offer cutting-edge services."
        },
        {
          title: "Customer Focus",
          icon: "bi bi-people",
          content: "We prioritize our clients' needs, striving to exceed expectations and deliver solutions that genuinely address their unique challenges and goals."
        },
        {
          title: "Excellence",
          icon: "bi bi-star-fill",
          content: "We are committed to the highest standards of quality and performance in everything we do, ensuring reliability and consistency in our work."
        },
        {
          title: "Collaboration",
          icon: "bi bi-people-arrows",
          content: "We believe in teamwork and collaboration, both within our company and with our clients, to achieve the best outcomes together."
        },
        {
          title: "Continuous Learning",
          icon: "bi bi-book",
          content: "We foster a culture of growth and improvement, encouraging our team to continuously learn and adapt to the ever-evolving tech landscape."
        }
      ];
      
  return (
   <section className="about">
    <div className="about-hero p-3 p-md-5">
        <h1 className="display-3 fw-bold">
        <span className="text-main">Empowering</span> <br /> Innovation
        </h1>
        <p className="fs-4 text-secondary">
        Discover the story behind Highbrow Technology and our <br /> commitment to excellence.
        </p>
    </div>
    <h1 className="my-4 text-center fs-1 fw-bold">
    Who We Are
    </h1>
    <div className="container-fluid p-3 p-md-5">
        <div className="row">
            <div className="col-md-6">
                <p className="fs-5 j">
                Apexion Global Solutions is a trusted leader in technology and consulting, dedicated to empowering businesses to thrive in today’s fast-evolving digital world. With over a decade of expertise, we specialize in delivering end-to-end solutions that combine innovation, security, and efficiency. From Digital Transformation strategies that future-proof organizations, to Application Development for mobile, web, and cloud platforms, we ensure our clients stay at the forefront of technology.
                </p>
                <p className="fs-5  j">
                Our comprehensive services span Enterprise Software Solutions to optimize internal workflows, Data Analytics and Business Intelligence to leverage insights for growth, and Artificial Intelligence and Machine Learning to unlock new possibilities through automation and predictive analytics. In a world where digital threats are ever-present, our Cybersecurity solutions are designed to protect your data and build resilience into your operations.
                </p>
                <br />
                <Link className='main-btn px-5'>Contcat us</Link>
            </div>
            <div className="col-md-6 mt-3">
                <img src="https://img.freepik.com/free-photo/close-up-businesspeople-stacking-hands-meeting-office_23-2147923361.jpg?ga=GA1.1.1471963966.1728382128&semt=ais_siglip" alt="about-us" className="w-100 rounded-4" />
            </div>
        </div>
        <p className="fs-5 mt-3  j">
        Apexion Global Solutions is also a recognized leader in Cloud Computing with expertise across AWS, Azure, and Google Cloud, helping businesses scale and remain agile in dynamic markets. Our IT Consulting services offer strategic guidance to help clients overcome complex technology challenges, while our DevOps solutions foster collaboration and accelerate development cycles, ensuring faster time-to-market and consistent deployment.
        </p>
        <p className="fs-5 j">
        Our commitment to quality is evident in our Quality Assurance and Testing services, where we rigorously test solutions to ensure they meet the highest standards of functionality, security, and reliability. At Apexion Global Solutions, we are more than just a service provider—we are a partner dedicated to your success, helping you navigate the complexities of digital transformation with confidence and clarity.
        </p>
    </div>

    <div className="bg-light p-md-5 p-3">
        <div className="card bg-light border-0 p-3 shadow-sm">
            <h1 className="fs-1 text-main">Our Mission</h1>
            <p className="fs-5 j">At Apexion Global Solutions, our mission is to empower businesses by delivering innovative technology solutions that drive growth, enhance efficiency, and build resilience in a rapidly evolving digital landscape. We are committed to fostering long-term partnerships with our clients, understanding their unique needs, and providing tailored services that transform their vision into reality.</p>
            <p className="fs-5  j">
            Our focus is on excellence and integrity in every project we undertake. By leveraging our expertise in Digital Transformation, Application Development, Data Analytics, AI & Machine Learning, Cybersecurity, Cloud Computing, IT Consulting, DevOps, and Quality Assurance, we strive to be a catalyst for positive change. Our goal is to equip businesses with the tools and insights they need to thrive, adapt, and succeed in a technology-driven world.
            </p>
        </div>
     
    </div>
    <div className="bg-light p-3 p-md-5">
            <div className="card border-0 p-3 shadow-sm">
                <h1 className="fs-1 text-main">Our Vission</h1>
                <p className="fs-5 j">
                Our vision at Apexion Global Solutions is to be a global leader in transformative technology solutions, setting the standard for innovation, reliability, and excellence. We aspire to create a world where businesses, empowered by advanced technology, operate seamlessly, sustainably, and with resilience against future challenges.
                </p>
             
            </div>
            <p className="fs-5 fw-bold text-main mt-4">We envision a future where:</p>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Digital Transformation enables businesses of all sizes to achieve unprecedented agility and growth.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Application Development integrates seamlessly across mobile, web, and cloud platforms, delivering unmatched user experiences.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Data Analytics and AI & Machine Learning turn insights into impactful strategies, fueling data-driven decision-making.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Cybersecurity protects and fortifies every layer of business, ensuring trust and peace of mind.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Cloud Computing solutions optimize performance, scalability, and cost-efficiency, driving sustainable growth.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            IT Consulting and DevOps practices empower businesses to embrace operational excellence and innovation.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <div className="card shadow-sm p-3 h-100 d-flex align-items-center  border-0">
                            <p className="fs-6">
                            Quality Assurance upholds the highest standards, ensuring that every product and solution is robust, secure, and reliable.
                            </p>
                        </div>
                    </div>
                    
                </div>
        </div>

      <div className="container-fluid p-3 p-md-5 bg-light">
      <h1 className="text-center fs-1 fw-bold">Our Core Values</h1>
        <div className="row mt-5">
            {
                coreValues.map((item, index)=>(
                    <div className="col-md-4 mb-3">
                        <div className="core-card bg-white p-3 h-100">
                            <div className="service-icon">
                                <i className={item.icon}></i>
                            </div>
                            <h1 className="fs-3 fw-bold">{item.title}</h1>
                            <p className="fs-6">{item.content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
   </section>
  )
}

export default About