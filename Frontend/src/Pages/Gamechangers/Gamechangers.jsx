import React from "react";
import "./Gamechangers.css";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaUniversity,
  FaBriefcase,
  FaLightbulb,
  FaPeopleCarry,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "Nitish Kumar",
    position: "Chief Executive Officer",
    education: "IIT Delhi",
    experience: "7+ Years",
    image: "/nitish.jpg",
    bio: (
      <div className="bio-container">
        <p>
          <FaLightbulb className="bio-icon" />
          <strong> Nitish Kumar</strong> is the{" "}
          <strong>Chief Executive Officer</strong> of <strong>CivicSpot</strong>
          , where he brings a bold vision to the intersection of technology and
          civic engagement.
        </p>
        <p>
          <FaUniversity className="bio-icon" /> A graduate of{" "}
          <strong>IIT Delhi</strong>, one of India’s premier engineering
          institutions, Nitish has always been driven by the desire to use
          innovation for social good.
        </p>
        <p>
          <FaBriefcase className="bio-icon" /> With over{" "}
          <strong>7 years of experience</strong> in civic technology, he has led
          teams, built platforms, and championed initiatives that empower
          citizens and strengthen government accountability.
        </p>
        <p>
          <FaLightbulb className="bio-icon" /> Under his leadership, CivicSpot
          has grown into a powerful platform that bridges the gap between local
          authorities and communities—fostering <strong>transparency</strong>,{" "}
          <strong>trust</strong>, and real-time civic problem-solving.
        </p>
        <p>
          <FaPeopleCarry className="bio-icon" /> Known for his{" "}
          <strong>empathetic leadership</strong> and visionary thinking, Nitish
          continues to inspire teams and stakeholders with a mission-driven
          approach that blends human-centered design with smart technology.
        </p>
        <p>
          His journey stands as a testament to how purpose-driven innovation can
          bring about meaningful, lasting change in the lives of everyday
          people.
        </p>
      </div>
    ),
  },
  {
    name: "Rohit Sharma",
    position: "Chief Operating Officer",
    education: "NID Ahmedabad",
    experience: "5+ Years",
    image: "/rohit.jpg",
    bio: (
      <div className="bio-container">
        <p>
          <FaLightbulb className="bio-icon" />
          <strong> Rohit Sharma</strong> is the{" "}
          <strong>Chief Operating Officer</strong> of <strong>CivicSpot</strong>
          , leading operations with creativity and precision.
        </p>
        <p>
          <FaUniversity className="bio-icon" /> A graduate of{" "}
          <strong>NID Ahmedabad</strong>, Rohit brings a design-centric approach
          to solving operational challenges.He believes in the power of
          design-thinking to create efficient, user-friendly processes that
          empower teams and deliver measurable results.
        </p>
        <p>
          <FaBriefcase className="bio-icon" /> With over{" "}
          <strong>5 years of experience</strong> in operations and strategic
          management, Rohit has streamlined workflows, optimized processes, and
          driven scalable impact.
        </p>
        <p>
          <FaLightbulb className="bio-icon" /> His commitment to efficiency and
          design-thinking has significantly improved cross-functional
          collaboration and execution.
        </p>
        <p>
          <FaPeopleCarry className="bio-icon" /> Known for his hands-on
          leadership and pragmatic decision-making, Rohit plays a vital role in
          shaping CivicSpot’s internal culture and sustainable growth.
        </p>
        <p>
          Rohit’s operational excellence ensures that vision translates into
          real-world execution with speed and clarity. He ensures that every
          initiative is implemented seamlessly, turning strategic plans into
          tangible outcomes for CivicSpot and the communities it serves.He
          ensures that every initiative is implemented seamlessly, turning
          strategic plans into tangible outcomes for CivicSpot and the
          communities it serves.
        </p>
      </div>
    ),
  },
  {
    name: "Shreyas Iyer",
    position: "Head of Technology",
    education: "BITS Pilani",
    experience: "6+ Years",
    image: "/shreyas.jpg",
    bio: (
      <div className="bio-container">
        <p>
          <FaLightbulb className="bio-icon" />
          <strong> Shreyas Iyer</strong> is the{" "}
          <strong>Head of Technology</strong> at <strong>CivicSpot</strong>,
          driving technological innovation with clarity and purpose.
        </p>
        <p>
          <FaUniversity className="bio-icon" /> An alumnus of{" "}
          <strong>BITS Pilani</strong>, Shreyas is passionate about building
          scalable digital infrastructure.
        </p>
        <p>
          <FaBriefcase className="bio-icon" /> With{" "}
          <strong>6 years of experience</strong> in full-stack development,
          cloud architecture, and system design, Shreyas leads a tech team
          committed to excellence.Before civicspot he has worked with various startups and enterprises, where he honed his skills in creating robust, user-friendly applications that enhance civic engagement.
        </p>
        <p>
          <FaLightbulb className="bio-icon" /> He champions agile methodologies
          and believes in clean, modular code that drives future-proof
          solutions.
        </p>
        <p>
          <FaPeopleCarry className="bio-icon" /> Shreyas is admired for his
          calm, analytical approach and ability to translate business needs into
          technological outcomes.He is very well known for his calm,
          analytical approach and ability to translate business needs into opportunities.
        </p>
        <p>
          His contributions have helped position CivicSpot as a reliable,
          high-performance civic tech platform.Apart from his technical
          expertise, Shreyas is also a mentor to aspiring developers, sharing his experience and insights to foster the next generation of tech leaders.
        </p>
      </div>
    ),
  },
  {
    name: "Jasprit Bumrah",
    position: "Marketing Head",
    education: "IISc Bangalore",
    experience: "4+ Years",
    image: "/jasprit.jpg",
    bio: (
      <div className="bio-container">
        <p>
          <FaLightbulb className="bio-icon" />
          <strong> Jasprit Bumrah</strong> is the{" "}
          <strong>Marketing Head</strong> at <strong>CivicSpot</strong>,
          combining data-driven strategy with creative storytelling.It is combining data-driven strategy with creative storytelling. 
        </p>
        <p>
          <FaUniversity className="bio-icon" /> Educated at{" "}
          <strong>IISc Bangalore</strong>, Jasprit has a unique blend of
          technical and branding acumen.
        </p>
        <p>
          <FaBriefcase className="bio-icon" /> With{" "}
          <strong>4 years of experience</strong> in digital marketing, content
          strategy, and brand management, he has elevated CivicSpot’s public
          image.Also skilled in leveraging analytics, Jasprit crafts campaigns
          that resonate with diverse audiences, ensuring that CivicSpot’s
          message is both impactful and inclusive.
        </p>
        <p>
          <FaLightbulb className="bio-icon" /> Jasprit crafts campaigns that not
          only inform but inspire action—engaging citizens and stakeholders
          across platforms.
        </p>
        <p>
          <FaPeopleCarry className="bio-icon" /> He’s recognized for his
          collaborative mindset and for building communities through authentic
          engagement.Apart from his marketing expertise, Jasprit is also a
          passionate advocate for civic participation, always encouraging
          innovative ways for citizens to get involved and make a difference.
        </p>
        <p>
          Jasprit’s efforts ensure that CivicSpot’s mission reaches far and wide
          with clarity and impact.
        </p>
      </div>
    ),
  },
];

const Gamechangers = () => {
  return (
    <div className="gamechanger-container">
      <h1 className="page-title">Meet the GameChangers</h1>

      <div className="team-list">
        {teamMembers.map((member, idx) => (
          <div className="member-row" key={idx}>
            <div className="team-card">
              <img src={member.image} alt={member.name} className="team-img" />
              <h2>{member.name}</h2>
              <p className="role">{member.position}</p>
              <div className="info-row">
                <FaUniversity className="icon" />
                <span>{member.education}</span>
              </div>
              <div className="info-row">
                <FaBriefcase className="icon" />
                <span>{member.experience}</span>
              </div>
              <div className="social-icons">
                <FaLinkedin />
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>

            <div className="member-description">
              {typeof member.bio === "string" ? (
                <p>{member.bio}</p>
              ) : (
                member.bio
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gamechangers;
