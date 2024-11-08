import React, { useRef, useState } from 'react';
import './style.css';

const testimonials = [
    {
        icon: 'bi bi-cloud', // Cloud computing icon
        title: 'Cloud Solutions',
        content: 'Empowering businesses with scalable and secure cloud infrastructure.'
    },
    {
        icon: 'bi bi-graph-up', // Data analytics icon
        title: 'Data Analytics',
        content: 'Transforming data into actionable insights for informed decision-making.'
    },
    {
        icon: 'bi bi-shield-lock', // Cybersecurity icon
        title: 'Cybersecurity Services',
        content: 'Protecting your digital assets with comprehensive security measures.'
    },
    {
        icon: 'bi bi-people', // Team collaboration icon
        title: 'Team Collaboration',
        content: 'Enhancing teamwork through innovative collaboration tools.'
    },
    {
        icon: 'bi bi-lightbulb', // Innovation icon
        title: 'Innovative Solutions',
        content: 'Driving innovation with tailored tech solutions for your business.'
    },
    {
        icon: 'bi bi-basket', // E-commerce icon
        title: 'E-commerce Development',
        content: 'Building powerful online platforms for retail success.'
    },
    {
        icon: 'bi bi-telephone', // Customer support icon
        title: '24/7 Support',
        content: 'Providing round-the-clock support to ensure client satisfaction.'
    },
    {
        icon: 'bi bi-card-checklist', // Project management icon
        title: 'Project Management',
        content: 'Ensuring successful project delivery with expert management techniques.'
    },
    {
        icon: 'bi bi-cpu', // IT solutions icon
        title: 'IT Solutions',
        content: 'Delivering robust IT solutions tailored to your business needs.'
    },
    {
        icon: 'bi bi-geo-alt', // Location-based services icon
        title: 'Location-Based Services',
        content: 'Utilizing location data to enhance customer experiences.'
    }
];

function TestimonialSlider() {
    const [currentVideo, setCurrentVideo] = useState(null);
    const containerRef = useRef(null);

    const handlePlayClick = (video) => {
        setCurrentVideo(video);
    };

    const handleCloseVideo = () => {
        setCurrentVideo(null);
    };

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <section className='mt-5' id='stories'>
            <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center">
              
               <div className="p-3 pmd-5">
               <h1 className="fs-3 fw-bold text-main "><span className="text-dark">Empowering Businesses</span> Through <br /> </h1>
               <p className="fs-6">Innovative Technology Solutions</p>
               </div>
              
            </div>
            <div className="testimonial-slider py-5 mt-5">
                <div className="testimonial-container" ref={containerRef}>
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-card mt-5 p-3 d-flex flex-column justify-content-between" key={index}>
                            <div className="icon">
                                <i className={`${testimonial.icon} fs-3 text-white`}></i>
                            </div>
                            <h3 className='fs-5 text-main fw-bold'>{testimonial.title}</h3>
                            <p className="fs-6">{testimonial.content}</p>
                        </div>
                    ))}
                </div>

                <div className="buttons d-flex gap-3">
                    <button className="tg-btn" onClick={scrollLeft}>
                        <i className="bi bi-chevron-left text-main"></i>
                    </button>
                    <button className="tg-btn" onClick={scrollRight}>
                        <i className="bi bi-chevron-right text-main"></i>
                    </button>
                </div>

                {currentVideo && (
                    <div className="video-overlay" onClick={handleCloseVideo}>
                        <video className="video-player" controls src={currentVideo} autoPlay />
                    </div>
                )}
            </div>
        </section>
    );
}

export default TestimonialSlider;
