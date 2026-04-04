import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend &amp; UI/UX Developer</h4>
                <h5>KGT Solutions · Noida · Dec 2025 – Present</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and developing responsive interfaces with React, HTML, CSS,
              and JavaScript, with a strong focus on usability and performance.
              Translating high-fidelity Figma designs into pixel-perfect components
              while keeping design systems consistent. Building reusable UI,
              improving dashboard workflows, and shipping animations and
              micro-interactions with GSAP and CSS. Collaborating across teams and
              optimizing layouts and rendering across devices and browsers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Corover.ai · Bangalore · Jan – Nov 2025</h5>
              </div>
              <h3>01–11/2025</h3>
            </div>
            <p>
              Led front-end work on the flagship chatbot in React, improving UI/UX
              and engagement. Integrated Express.js for real-time intelligent
              responses and built RESTful API integrations. Optimized component
              rendering to reduce initial load time, introduced Redux and React
              Router, and delivered responsive UIs from Figma in agile squads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
