// src/components/HiddenResume.jsx
import React from "react";

const HiddenResume = () => {
  return (
    <div
      id="resume"
      className="fixed -left-[10000px] invisible"
      style={{
        width: "1000px",
        backgroundColor: "white",
        color: "black",
      }}
    >
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          MELESE ABRHAM JENBERU
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden bg-gray-900 shadow-lg">
              <img
                src="/assets/project/profile.png"
                alt="Melese Abrham"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
              />
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-primary mb-4">
                PERSONAL DETAIL
              </h2>
              <ul className="space-y-2">
                <li>
                  <strong>Sex:</strong> Male
                </li>
                <li>
                  <strong>Birth Date:</strong> August 01, 2000
                </li>
                <li>
                  <strong>Health Status:</strong> Normal
                </li>
                <li>
                  <strong>Nationality:</strong> Ethiopian
                </li>

                <li>
                  <strong>Current Resident:</strong> A.A
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">CONTACT</h2>
              <ul className="space-y-2">
                <li>+251929527564</li>
                <li>+251951939566</li>
                <li>
                  <a
                    href="mailto:Meleseabrham17@gamil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Meleseabrham17@gamil.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://personal-website-5ugp.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                   https://personal-website-5ugp.vercel.app/
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">PORTFOLIO</h2>
              <p>
                <a
                  href="https://github.com/meleseabrham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  github.com/meleseabrham
                </a>
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">HOBBIES</h2>
              <ul className="list-disc pl-4 space-y-2">
                <li>Writing code (coding)</li>
                <li>Viewing stratified customer through my skill</li>
                <li>Reading books</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold border-b-2 border-primary mb-4">
                Education
              </h2>
              <div className="space-y-2">
                <p>
                  <strong>Field Of Study:</strong> B.Sc. Degree in Computer
                  Science
                </p>
                <p>
                  <strong>Institution:</strong> Assosa University
                </p>
                <p>
                  <strong>Date:</strong> May 25, 2020 – Jun 01, 2024
                </p>
                <p>
                  <strong>CGPA:</strong> 3.79
                </p>
                <p>
                  <strong>Exit Exam:</strong> 77%
                </p>
                <p>
                  <strong>Graduation Year:</strong> Jun 01, 2024
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold border-b-2 border-primary mb-4">
                Work Experience
              </h2>
              <div className="space-y-6">
                <div>
                  <p>
                    <strong>Job Title:</strong> Data Encoder
                  </p>
                  <p>
                    <strong>Company Name:</strong> Private Organization Employee
                    Social Security Administration (POESSA)
                  </p>
                  <p>
                    <strong>Date:</strong> Oct 18, 2024 - Mar 30, 2025
                  </p>
                  <p>
                    <strong>Responsibility:</strong> Data Encode on the System
                    and Arranging Document
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Job Title:</strong> Software Application Developer
                  </p>
                  <p>
                    <strong>Company Name:</strong> Information Network Security
                    Agency (INSA)
                  </p>
                  <p>
                    <strong>Date:</strong> Mar 30, 2025 - Current
                  </p>
                  <p>
                    <strong>Responsibility:</strong> Software Application
                    Development & Reverse Engineering.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold border-b-2 border-primary mb-4">
                Skills
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Personal Skills:</h3>
                  <p>
                    Communication, Time Management, Flexibility, Negotiation,
                    Politeness, Team Working and Problem Solving
                  </p>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Technical Skills:</h3>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Data Entry & Document Management</li>
                    <li>
                      Web & Mobile Development: HTML, CSS, JS, PHP, Java and
                      Flutter
                    </li>
                    <li>Software Development and Reverse Engineering</li>
                    <li>Database Management: MySQL</li>
                    <li>Version Control: Git and GitHub</li>
                    <li>System & Network Administration</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold border-b-2 border-primary mb-4">
                Reference
              </h2>
              <p>
                <strong>Mr. Fikadu Eshetu (M.Sc.)</strong> ➜ Department Head of
                Computer Science
              </p>
              <p>Phone: +251912265469</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenResume;
