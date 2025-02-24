const Sonographer = () => {
    return (
        <div style={{ margin: '50px' }} className="h-[80%] w-[90%] mx-auto bg-white shadow-2xl rounded-xl border border-gray-200 bg-gradient-to-t from-gray-100 to-white">

            {/* Container for Navigation and Content */}
            <div className="flex">

                {/* Left Navigation Bar */}
                <div className=" w-1/4 bg-gray-50 border-r-2 p-4">
                    <div className="flex flex-col space-y-6 p-6">
                        <a href="#contact" className="text-xl text-blue-600 hover:underline block">Contact</a>
                        <a href="#objective" className="text-xl text-blue-600 hover:underline block">Objective</a>
                        <a href="#education" className="text-xl text-blue-600 hover:underline block">Education</a>
                        <a href="#experience" className="text-xl text-blue-600 hover:underline block">Experience</a>
                        <a href="#skills" className="text-xl text-blue-600 hover:underline block">Skills</a>
                        <a href="#certifications" className="text-xl text-blue-600 hover:underline block">Certifications</a>
                        <a href="#references" className="text-xl text-blue-600 hover:underline block">References</a>
                        <a href="#cover-letter" className="text-xl text-blue-600 hover:underline block">Cover Letter</a>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="w-3/4 p-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800">Jenine Kyle Gutierrez</h1>
                        <p className="text-xl text-gray-600 mt-2">Diagnostic Medical Sonography Student</p>
                    </div>

                    <section id="contact" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
                        <div className="mt-2">
                            <p className="text-lg text-gray-700">Email: <a href="mailto:jgutierrez18@cnih.ca" className="text-blue-600">jgutierrez18@cnih.ca</a></p>
                            <p className="text-lg text-gray-700">Phone: <a href="tel:7788479104" className="text-blue-600">778-847-9104</a></p>
                        </div>
                    </section>

                    <section id="objective" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Objective</h2>
                        <p className="mt-2 text-lg text-gray-700">
                            A dedicated and compassionate Diagnostic Medical Sonography student at the Canadian National Institute of Health (CNIH), seeking a position where I can utilize my expertise in medical imaging and patient care to contribute to the healthcare industry. Passionate about early detection, diagnosis, and delivering high-quality patient-centered care.
                        </p>
                    </section>

                    <section id="education" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
                        <div className="mt-2">
                            <h3 className="text-xl font-semibold text-gray-700">Canadian National Institute of Health (CNIH)</h3>
                            <p className="text-lg text-gray-700">Diagnostic Medical Sonography (Expected Graduation: December 2025)</p>
                            <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                                <li>12 months of theory and scan lab training, followed by an 8-month practicum rotation.</li>
                                <li>In good standing with CNIH.</li>
                                <li>Student member of Sonography Canada, ARDMS, and OARMS.</li>
                            </ul>
                        </div>
                    </section>

                    <section id="experience" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
                        <div className="mt-2">
                            <h3 className="text-xl font-semibold text-gray-700">Clerk, Ultrasound Clinic</h3>
                            <p className="text-lg text-gray-700">December 2022 – Present</p>
                            <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                                <li>Gained hands-on experience with patient interactions and clinic workflows.</li>
                                <li>Assisted in diagnostic imaging procedures, contributing to the accurate detection and diagnosis of medical conditions.</li>
                                <li>Developed strong communication skills, ensuring that patients felt cared for and understood.</li>
                                <li>Worked alongside sonographers to support efficient clinic operations and optimal patient care.</li>
                            </ul>
                        </div>
                    </section>

                    <section id="skills" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
                        <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                            <li>Diagnostic Imaging: Proficient in sonographic techniques for imaging and diagnosis.</li>
                            <li>Medical Office Operations: Experience with scheduling, patient intake, and maintaining office organization.</li>
                            <li>Patient Care: Skilled in providing compassionate, patient-centered care.</li>
                            <li>Technical Proficiency: Strong foundation in sonographic equipment and software.</li>
                            <li>Professional Development: Active member of Sonography Canada, ARDMS, and OARMS.</li>
                        </ul>
                    </section>

                    <section id="certifications" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Certifications</h2>
                        <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                            <li>Medical Office Assistant Certification – CNIH, December 2022</li>
                            <li>Sonography Canada Membership</li>
                            <li>ARDMS Membership</li>
                            <li>OARMS Membership</li>
                        </ul>
                    </section>

                    <section id="references" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">References</h2>
                        <p className="mt-2 text-lg text-gray-700">Available upon request.</p>
                    </section>

                    <section id="cover-letter" className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">Cover Letter</h2>
                        <div className="mt-2 text-lg text-gray-700">
                            <p>Jenine Kyle Gutierrez</p>
                            <p>jgutierrez18@cnih.ca</p>
                            <p>778-847-9104</p>
                            <p>[Date]</p>
                            <br />
                            <p>Hiring Manager</p>
                            <p>[Healthcare Facility Name]</p>
                            <p>[Healthcare Facility Address]</p>
                            <p>[City, State, Zip Code]</p>
                            <br />
                            <p>Dear Hiring Manager,</p>
                            <p>
                                I am writing to express my interest in applying for the Diagnostic Medical Sonographer position at [Healthcare Facility Name]. I am currently a Diagnostic Medical Sonography student at the Canadian National Institute of Health (CNIH), set to graduate in December 2025. I am deeply passionate about medical imaging and patient care, and I believe my background, skills, and dedication would allow me to make a valuable contribution to your team.
                            </p>
                            <p>
                                My journey in healthcare began with the completion of a Medical Office Assistant certificate in December 2022, followed by a position as a Clerk at an ultrasound clinic. This experience immersed me in the field of diagnostic imaging and fueled my passion for sonography. Through my work, I developed strong technical skills and a profound understanding of patient-centered care, which I believe is essential in the medical imaging field.
                            </p>
                            <p>
                                In addition to my formal education, I have had the privilege of working hands-on with patients and diagnostic equipment. I am committed to ensuring that every patient feels seen, heard, and cared for during their healthcare journey. I am also an active member of Sonography Canada, ARDMS, and OARMS, which keeps me updated with the latest advancements in the field.
                            </p>
                            <p>
                                I am excited to bring my technical expertise, compassionate care, and commitment to making a meaningful difference to your healthcare facility. I am confident that I can help deliver accurate diagnoses and contribute to your high standards of patient care. I would welcome the opportunity to discuss my qualifications further and look forward to the possibility of joining your team.
                            </p>
                            <p>Thank you for considering my application. I look forward to the opportunity to meet with you.</p>
                            <br />
                            <p>Sincerely,</p>
                            <p>Jenine Kyle Gutierrez</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Sonographer;
