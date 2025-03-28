import React from "react";
import { FaDownload } from "react-icons/fa";
import { IconInfoCircle } from '@tabler/icons-react';
import { Blockquote, Group } from '@mantine/core'

const CoverLetter: React.FC = () => {
    const icon = <IconInfoCircle />;
    return (
        <Group
            align="flex-start"
            className="bg-gradient-to-br from-blue-50 to-gray-100 shadow-lg border border-gray-300"
            style={{
                width: '100%',
                display: 'flex',
                gap: '20px',
                padding: '40px',
            }}
        >
            <Blockquote color="orange" cite="" icon={icon} mt="xs">
                Regarding my resume and cover letter, I decided to address Yukon Hospital for an open position. However, I have structured it in a way that allows for easy adjustments to tailor it to the specific requirements of any available role.
            </Blockquote>
            <div className="max-w-1xl bg-white p-8 rounded-xl shadow-lg border border-gray-200 relative">

                {/* Small Screen: Icon Only */}
                <a
                    href="/cover-letter.pdf"
                    download="Jenine_Gutierrez_Cover_Letter.pdf"
                    className="fixed bottom-10 right-12 block md:hidden bg-[#B95C17] text-white p-3 rounded-lg shadow hover:bg-[#963F0C] transition"
                >
                    <FaDownload size={20} />
                </a>

                {/* Large Screen: Full Text + Icon */}
                <a
                    href="/cover-letter.pdf"
                    download="Jenine_Gutierrez_Cover_Letter.pdf"
                    className="fixed bottom-10 right-12 hidden md:flex items-center gap-2 bg-[#B95C17] text-white px-4 py-2 rounded-lg shadow hover:bg-[#963F0C] transition font-semibold"
                >
                    <FaDownload size={20} />
                    Download PDF
                </a>

                {/* Header Section */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Jenine Gutierrez</h1>
                    <p className="text-gray-600">Ottawa, Ontario</p>
                    <p className="text-gray-600">
                        (778) 847-9104 |{" "}
                        <a href="mailto:jgutierrez18@cnih.ca" className="text-blue-600 hover:underline">
                            jgutierrez18@cnih.ca
                        </a>
                    </p>
                </div>

                {/* Recipient Information */}
                <div className="mb-6">
                    <p className="text-gray-700 font-medium">Yukon Hospital Corporation</p>
                    <p className="text-gray-600">5 Hospital Rd</p>
                    <p className="text-gray-600">Whitehorse, YT Y1A 3H7</p>
                    <p className="text-gray-600">August 2, 2024</p>
                </div>

                {/* Salutation */}
                <p className="text-gray-700">Dear Yukon Hospital Hiring Manager,</p>

                {/* Job Reference */}
                <p className="text-gray-800 font-semibold mt-4">Re: ULTRA001253</p>

                {/* Cover Letter Body */}
                <div className="text-gray-700 leading-relaxed mt-4 space-y-4">
                    <p>
                        My name is <span className="font-semibold">Jenine Gutierrez</span>, and I am writing to express my interest in the full-time
                        Ultrasound Technologist position at Yukon Hospital as per your job posting on GRABJOBS.
                        With my training as a <span className="font-semibold">Diagnostic Medical Sonography student</span> and one year of experience working
                        as a Clerk, I am eager to apply my skills and passion to contribute positively to your team.
                    </p>

                    <p>
                        In my previous role as a Clerk at <span className="font-semibold">Brooke Radiology</span>, I ensured a seamless patient experience by
                        overseeing check-ins, managing records, and resolving billing issues. This role sharpened my
                        <span className="font-semibold"> attention to detail</span> through accurate data entry, enhanced my <span className="font-semibold">adaptability</span> by handling diverse
                        patient scenarios and changing workflows, and strengthened my <span className="font-semibold">communication skills</span>
                        through clear and effective interactions with patients. These skills enabled me to work
                        independently and address patient needs efficiently.
                    </p>

                    <p>
                        I am particularly impressed by Yukon Hospital’s commitment to <span className="font-semibold">equity, fairness, cultural
                            safety, diversity, and accessibility.</span> Your focus on compassion, valuing people, and providing
                        comfort and kindness aligns deeply with my own values. Additionally, your dedication to
                        excellence through quality, safety, and continuous learning resonates with my professional
                        goals. I am eager to contribute to an organization that upholds these high standards.
                    </p>

                    <p>
                        Given my background and dedication, I am confident that I will make a meaningful
                        contribution to your team. Enclosed is my resume for your review. Feel free to contact me at
                        <span className="font-semibold"> (778) 847-9104</span>. I look forward to discussing how my skills and experiences align with the
                        requirements of Yukon Hospital. Thank you for your time and consideration.
                    </p>
                </div>

                {/* Signature */}
                <div className="mt-6">
                    <p className="text-gray-700">Sincerely,</p>
                    <p className="font-semibold text-gray-800">Jenine Gutierrez</p>
                </div>
            </div>
        </Group>
    );
}

export default CoverLetter;