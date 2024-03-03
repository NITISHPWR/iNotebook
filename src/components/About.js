import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  // Check if the user is logged in (you may need to replace this with your actual authentication logic)
  const isLoggedIn = true; // Example, replace with your actual authentication check

  const handleGoBack = () => {
    if (isLoggedIn) {
      navigate(-1); // Go back to the previous page
    } else {
      navigate('/login'); // Redirect to the login page if not logged in
    }
  };

  return (
    <div className="container">
      <h2 className="my-3">About iNotebook</h2>
      <p>Welcome to iNotebook, your digital notebook solution! With iNotebook, you can easily create, edit, and manage your notes online.</p>
      <p>Key features of iNotebook include:</p>

      {/* Bootstrap Accordion */}
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Simple and intuitive user interface
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              iNotebook offers a user-friendly interface, making it easy for users to navigate and interact with their notes.
            </div>
          </div>
        </div>
        
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Secure authentication system for login and signup
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              iNotebook ensures the security of user accounts through a robust authentication system, protecting user data and privacy.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Ability to create, edit, and delete notes
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              iNotebook allows users to effortlessly create, edit, and delete notes, providing flexibility and control over their content.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Organize notes with tags
            </button>
          </h2>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              iNotebook allows users to organize their notes efficiently by adding tags, making it easier to categorize and find related content.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              Responsive design, accessible on all devices
            </button>
          </h2>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              iNotebook is built with responsive design principles, ensuring optimal viewing and interaction experience across various devices, including desktops, tablets, and smartphones.
            </div>
          </div>
        </div>
      </div>

      {/* Go Back button */}
      <button onClick={handleGoBack} className="mt-3 btn btn-primary">
        &larr;  Go Back
      </button>
    </div>
  );
};

export default About;
