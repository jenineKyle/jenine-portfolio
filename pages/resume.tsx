import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';

const Resume: React.FC = () => {
    return (
        <div className="h-full rounded-3xl p-6 m-20 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100  shadow-lg border border-gray-300">

            {/* Left Navigation */}
            <div className="w-1/3 bg-[#F9F9F9] border-r-2 p-6 sticky top-0 h-screen">
                <nav className="flex flex-col space-y-6">
                    <Link href="#profile" className="text-xl text-[#B95C17] hover:underline">PROFILE</Link>
                    <Link href="#skills" className="text-xl text-[#B95C17] hover:underline">SKILLS</Link>
                    <Link href="#education" className="text-xl text-[#B95C17] hover:underline">EDUCATION</Link>
                    <Link href="#experience" className="text-xl text-[#B95C17] hover:underline">WORK EXPERIENCE</Link>
                    <Link href="#volunteer" className="text-xl text-[#B95C17] hover:underline">VOLUNTEER EXPERIENCE</Link>
                    <Link href="#certifications" className="text-xl text-[#B95C17] hover:underline">CERTIFICATIONS</Link>
                </nav>
            </div>

            {/* Right Content */}
            <div className="bg-[#F3F4F6] w-2/3 p-6">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Jenine Gutierrez</h1>
                    <p className="text-xl text-gray-600 mt-2">Diagnostic Medical Sonography Student</p>

                    {/* Download Resume Button */}
                    <a
                        style={{ background: '#B95C17', fontWeight: 600, width: 'fit-content', padding: '10px 20px', borderRadius: '10px', marginLeft: 'auto' }}
                        href="/resume.pdf"// Replace with your actual PDF file path
                        download="Jenine_Gutierrez_Cover_Letter.pdf"
                        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow hover:bg-blue-700 transition"
                    >
                        <FaDownload style={{ marginRight: '20px' }} />
          Download PDF
        </a>

                </div>

                <section id="profile" className=" pt-[80px]">
                    <h2 className="text-2xl font-semibold text-gray-800">Profile</h2>
                    <p className="mt-2 text-lg text-gray-700">
                        A dedicated student working towards a diploma in General Diagnostic Medical Sonography with experience in organizing schedules, managing tasks, and collaborating with peers. Specializing in attention to detail, resulting in providing the highest standard of patient care. Looking to contribute my skills and experience to the imaging team at Yukon Hospital.
                    </p>
                </section>

                <section id="skills" className=" pt-[80px]">
                    <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
                    <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                        <li>Navigates challenging situations with a positive attitude</li>
                        <li>Prioritizes workflow schedule</li>
                        <li>Absorbs new knowledge and skills actively</li>
                        <li>Outstanding interpersonal and communication abilities</li>
                    </ul>
                </section>

                <section id="education" className=" pt-[80px]">
                    <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
                    <div className="mt-2">
                        <h3 className="text-xl font-semibold text-gray-700">Canadian National Institute of Health</h3>
                        <p className="text-lg text-gray-700">General Diagnostic Medical Sonography (May 2024 - Present)</p>
                        <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                            <li>Anticipated graduation in December 2025</li>
                            <li>Acquiring skills in infectious disease control and prevention</li>
                            <li>Learning detailed anatomy and sonographic techniques</li>
                        </ul>
                    </div>
                </section>

                <section id="experience" className=" pt-[80px]">
                    <h2 className="text-2xl font-semibold text-gray-800">Work Experience</h2>
                    <div className="mt-2">
                        <h3 className="text-xl font-semibold text-gray-700">Brooke Radiology, Burnaby, BC - Clerk</h3>
                        <p className="text-lg text-gray-700">January 2023 - December 2023</p>
                        <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                            <li>Ensured a seamless patient experience with check-ins and record management</li>
                            <li>Handled insurance and billing inquiries with precision</li>
                        </ul>
                    </div>
                </section>

                <section id="volunteer" className=" pt-[80px]">
                    <h2 className="text-2xl font-semibold text-gray-800">Volunteer Experience</h2>
                    <div className="mt-2">
                        <h3 className="text-xl font-semibold text-gray-700">Royal Columbian Hospital (70 hours)</h3>
                        <p className="text-lg text-gray-700">March 2023 - December 2023</p>
                        <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                            <li>Served as the first point of contact for patients and visitors</li>
                            <li>Assisted patients with errands and navigation through the hospital</li>
                        </ul>
                    </div>
                </section>

                <section id="certifications" className=" pt-[80px]">
                    <h2 className="text-2xl font-semibold text-gray-800">Certifications & Memberships</h2>
                    <ul className="mt-2 text-lg text-gray-700 list-disc pl-6">
                        <li>IPAC Modules</li>
                        <li>Standard First Aid + BLS</li>
                        <li>Student member of Sonography Canada, OAMRS, and ARDMS</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Resume;
