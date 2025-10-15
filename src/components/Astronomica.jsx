import React, { useEffect, useRef } from 'react';
import pic2 from '../assets/images/pic2.jpg';
import astronaut from '../assets/images/astronaut.png';
import logo from '../assets/images/logo.png';
import blackHoleVideo from '../assets/images/black-hole.mp4';
import '../styles/Astronomica.css';

const Astronomica = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: 1,
      title: "Stellar Night",
      content: "Apart from our exclusive activities AstroNITR also participates in INNOVISION, the Annual Techno-Management Fest of NIT Rourkela, which also happens to be the largest Tech-Fest in Eastern India, where we organize STELLAR NIGHT which is crowned as a Flagship Event, which gets a footfall of over 2500 space-enthusiasts. An Open Telescopic Session for all the tech-fest participants is planned every year, where they observe celestial bodies including Saturn, Jupiter, Orion Nebula Earth's own Moon, and much more.",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
      stats: "2500+ Space Enthusiasts",
      icon: "🌟"
    },
    {
      id: 2,
      title: "Star Talk",
      content: "AstroNITR also organise Astro Talks during the fest where we invite prominent astrophotographers, influencers, professors, and scientists such as Prathmesh Jaju, Kaushik Bhattacharjee, Abhay Pratap Yadav, and many others to enlighten our participants and give insights on the current and upcoming scenario of Space Science.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      stats: "Expert Speakers",
      icon: "🎤"
    },
    {
      id: 3,
      title: "Star Gazing",
      content: "At AstroNITR, we curate truly mesmerizing experiences that transcend the ordinary, harnessing the unparalleled capabilities of our two extraordinary telescopes: The Celestron CPC 800GPS (XLT) and Nexstar 130SLT Computerized Telescope. Our celestial gatherings promise to leave an indelible mark, inviting you to immerse yourself in the infinite wonders of the cosmos. Amidst the twinkling stars and distant galaxies, our interactive learning sessions offer a captivating journey into the art and science of telescope operation, ensuring that every moment spent with us is as enriching as it is awe-inspiring.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      stats: "2 Premium Telescopes",
      icon: "🔭"
    },
    {
      id: 4,
      title: "Workshop",
      content: "One of the most fundamental and quintessential aspects of our club is peer learning and focused analogy. In recent years, our lineup of workshops has been diverse and engaging. Among these, AstroNITR proudly collaborated with the Space Academy to host a Model Rocketry Workshop, offering participants hands-on experience in crafting model rockets with cutting-edge software like SPACECAD and SOLIDWORKS. Additionally, we were honoured to host \"Exposure,\" a session led by the esteemed Master Prathamesh Jaju. Renowned for his amazing moon photography, Master Jaju shared invaluable insights into capturing celestial beauty and elevating images through advanced post-processing techniques.",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
      stats: "Hands-on Learning",
      icon: "🚀"
    },
    {
      id: 5,
      title: "Webinar",
      content: "AstroNITR have organized an array of engaging webinars, featuring captivating talks like \"Exploring Multiple Star Systems\" with Ayush Moharana, a Ph.D. Scholar at Nicolas Copernicus Astronomical Centre, \"Introduction to Gravitational Wave Astronomy\" by Dr. Anuj Mishra, a Ph.D. Scholar at Inter-University Centre of Astronomy and Astrophysics, \"Astrobiology and Space Medicine\" by Deepsundar Sahoo, a graduate of the University of Texas, and \"The Birth, Evolution, and Final Fate of Stars\" led by our esteemed professor, Dr. Abhay Pratap Yadav, alongside numerous other thought-provoking sessions. Moreover, we've extended invitations to esteemed professors to host an enlightening Astro-talk series titled 'Stellar Odyssey'.",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&h=400&fit=crop",
      stats: "Expert Webinars",
      icon: "💻"
    },
    {
      id: 6,
      title: "Astrophotography",
      content: "During our celestial observation expeditions, AstroNITR meticulously capture stunning images of celestial phenomena and events, which are subsequently showcased on our website and Instagram platforms. Our gallery features an array of breathtaking photographs, including captures of Saturn, Jupiter, the Moon, and its intricate craters, the Sun with its dynamic sunspots, mesmerizing solar eclipses, the awe-inspiring Orion Nebula, and even the elusive Comet C2022/E3, widely known as the green comet, among numerous others. To achieve these remarkable images, we utilize cutting-edge equipment, including the Celestron CPC 800GPS (XLT) and Nexstar 130SLT Computerized Telescopes, specially tailored for astrophotography. Through advanced techniques such as stacking and processing multiple long and short-exposure images, AstroNITR strive to present a refined and enhanced perspective of these celestial wonders. Join us in exploring the wonders of the universe through our meticulously crafted astrophotography.",
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=600&h=400&fit=crop",
      stats: "Celestial Captures",
      icon: "📸"
    }
  ];

  return (
    <div className="astronomica-page">
      {/* Background */}
      <div className="astronomica-background">
        <video 
          className="background-video" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={blackHoleVideo} type="video/mp4" />
        </video>
        <div className="background-overlay"></div>
      </div>

      {/* Particle Effects */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 4}`}></div>
        ))}
      </div>

      <div className="astronomica-content">
        {/* Header */}
        <div className="astronomica-header">
          <h1 className="astronomica-title">
            {'ASTRONOMICA'.split('').map((letter, index) => (
              <span key={index} className="wave-letter">
                {letter}
              </span>
            ))}
          </h1>
          <div className="chronicles-subtitle">
            <h2 className="chronicles-title">AstroNITR's Celestial Chronicles</h2>
            <p className="chronicles-description">
              Journey through our cosmic adventures and astronomical discoveries
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="sections-container">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`section scroll-section ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
            >
              <div className="section-content">
                <div className="section-image">
                  <img src={section.image} alt={section.title} />
                  <div className="image-overlay">
                    <div className="section-icon">{section.icon}</div>
                    <div className="section-stats">{section.stats}</div>
                  </div>
                </div>
                
                <div className="section-text">
                  <h3 className="section-title">{section.title}</h3>
                  <p className="section-description">{section.content}</p>
                  <div className="section-accent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to Explore the Cosmos?</h3>
            <p>Join AstroNITR and become part of our astronomical journey</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Join Us</button>
              <button className="cta-btn secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astronomica;
