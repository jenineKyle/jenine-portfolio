import Link from 'next/link';
import { FaDownload } from 'react-icons/fa';
import {
    Box,
    NavLink,
    Paper,
    Text,
    Title,
    Button,
    Group,
    Stack,
    Blockquote
} from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

const Resume: React.FC = () => {
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
            {/* Left Navigation */}
            <Paper
                shadow="sm"
                radius="md"
                p="lg"
                withBorder
                className="sticky top-0 bg-white hidden lg:block"
                style={{
                    width: '250px',
                    minHeight: '90vh',
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    borderRadius: '12px',
                }}
            >
                <Stack gap="md">
                    {[
                        'Profile',
                        'Skills',
                        'Education',
                        'Work Experience',
                        'Volunteer Experience',
                        'Certifications',
                    ].map((section) => (
                        <NavLink
                            key={section}
                            label={section}
                            component={Link}
                            href={`#${section.toLowerCase().replace(/ /g, '-')}`}
                            className="hover:bg-gray-200 rounded-md"
                        />
                    ))}
                </Stack>
            </Paper>

            {/* Right Content */}
            <Box
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '24px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    overflowY: 'auto',
                    maxHeight: '90vh',
                }}
            >
                <Box className="relative text-center">
                    <Title order={1}>Jenine Gutierrez</Title>
                    <Text size="lg" color="dimmed">
                        Diagnostic Medical Sonography Student
                    </Text>

                    {/* Small Screen: Icon Only */}
                    <Button
                        component="a"
                        href="/resume.pdf"
                        download="Jenine_Gutierrez_Resume.pdf"
                        className="fixed bottom-10 right-12 block md:hidden"
                        color="orange"
                    >
                        <FaDownload />
                    </Button>

                    {/* Large Screen: Full Text + Icon */}
                    <Button
                        component="a"
                        href="/resume.pdf"
                        download="Jenine_Gutierrez_Resume.pdf"
                        rightSection={<FaDownload />}
                        className="fixed bottom-10 right-12 hidden md:flex"
                        color="orange"
                    >
                        Download PDF
                    </Button>
                </Box>

                {/* Sections */}
                {[
                    {
                        id: 'profile',
                        title: 'Profile',
                        content:
                            "A dedicated student working towards a diploma in General Diagnostic Medical Sonography with experience in organizing schedules, managing tasks, and collaborating with peers. Specializing in attention to detail resulting in providing the highest standard of patient care. Looking to contribute my skills and experience to the imaging team at the Yukon Hospital.",
                    },
                    {
                        id: 'skills',
                        title: 'Skills',
                        content: [
                            'Navigates challenging situations with a positive attitude',
                            'Prioritizes workflow schedule',
                            'Absorbs new knowledge and skills actively',
                            'Outstanding interpersonal and communication abilities',
                        ],
                    },
                    {
                        id: 'education',
                        title: 'Education',
                        content: [
                            {
                                label: 'Canadian National Institute of Health INC. (Accredited by Sonography Canada)',
                                data: [
                                    'General Diagnostic Medical Sonography | May 2024 - Present',
                                    'Anticipated graduation in December 2025',
                                    'Acquiring skills in infectious disease control and prevention',
                                    'Introducing detailed anatomy across various imaging planes and modalities, focusing on normal anatomical structures',
                                    'Learning basic sound concepts required of a sonographer such as sound properties, units, and measurements',
                                ]
                            },
                            {
                                label: 'Langara College | Medical Office Administrator | Graduated in December 2022',
                                data: [
                                    'Proficient in performing administrative duties in doctors\' offices, hospitals, and clinics',
                                    'Knowledge in medical transcription and clinical procedures',
                                ]
                            },
                            {
                                label: 'Langara College | Foundations in Health Studies | Graduated in August 2022',
                                data: [
                                    'Introduced human structures and functions with a focus on basic physiology principles'
                                ]
                            }
                        ]
                    },
                    {
                        id: 'work-experience',
                        title: 'Work Experience',
                        content: [
                            {
                                label: 'Brooke Radiology, Burnaby, BC | Clerk',
                                data: [
                                    'January 2023 - December 2023',
                                    'Ensured a positive experience for patients undergoing imaging services by assisting with check-in, handling accurate records, and addressing billing and insurance inquiries.'
                                ]
                            },
                            {
                                label: 'Art of Sauna and Spa, Burnaby, BC | Lead Receptionist',
                                data: [
                                    'February 2022 - February 2023',
                                    'Actively engaged in training new team members and collaborated with managers to implement improvements for an enhanced client experience.',
                                    'Provided excellent customer service and fostered a welcoming atmosphere.'
                                ]
                            }
                        ]
                    },

                    {
                        id: 'volunteer-experience',
                        title: 'Volunteer Experience',
                        content: [
                            {
                                label: 'Royal Columbian Hospital, Burnaby, BC | Volunteer',
                                data: [
                                    'March 2023 - December 2023 (70 hours)',
                                    'Served as a friendly face and often the first point of contact for patients and visitors.',
                                    'Took on tasks such as conducting errands and escorting individuals to ensure a positive and supportive experience at the hospital.'
                                ]
                            },
                            {
                                label: 'Queen’s Park Care & Assisted Living, Burnaby, BC | Volunteer',
                                data: [
                                    'February 2023 - September 2023 (30 hours)',
                                    'Prioritized the well-being of residents by adhering to safety measures.',
                                    'Contributed to residents\' social interaction, competition, and overall enjoyment, aiming to add joy and enhance their quality of life.'
                                ]
                            }
                        ]
                    },

                    {
                        id: 'certifications',
                        title: 'Certifications & Memberships',
                        content: [
                            'IPAC Modules',
                            'Standard First Aid + BLS',
                            'Student member of Sonography Canada, OAMRS, and ARDMS',
                        ],
                    },
                ].map((section) => (
                    <Box id={section.id} key={section.id} className="pt-10">
                        <Title order={2}>{section.title}</Title>
                        {Array.isArray(section.content) ? (
                            // If it's an array, it could either be an array of strings or an array of objects
                            section.content.every(item => typeof item === 'string') ? (
                                // If all items are strings, render them as a list
                                <ul className="mt-2 list-disc pl-6 text-gray-700">
                                    {section.content.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                // Otherwise, render label and data for objects in the array
                                <div className="mt-2 text-gray-700">
                                    {section.content.map((item, idx) => (
                                        <div key={idx} className="mt-4">
                                            <strong>{item.label}</strong>
                                            <div className="mt-2">
                                                <ul className="list-disc pl-6">
                                                    {item.data.map((dataItem, dataIdx) => (
                                                        <li key={dataIdx}>{dataItem}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        ) : (
                            <Text className="mt-2 text-lg text-gray-700">{section.content}</Text>
                        )}
                    </Box>
                ))}
            </Box>
        </Group>
    );
};

export default Resume;
