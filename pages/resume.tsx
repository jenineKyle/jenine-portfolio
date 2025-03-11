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
                            'A dedicated student working towards a diploma in General Diagnostic Medical Sonography...',
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
                            'Canadian National Institute of Health',
                            'General Diagnostic Medical Sonography (May 2024 - Present)',
                            'Anticipated graduation in December 2025',
                            'Acquiring skills in infectious disease control and prevention',
                        ],
                    },
                    {
                        id: 'work-experience',
                        title: 'Work Experience',
                        content: [
                            'Brooke Radiology, Burnaby, BC - Clerk',
                            'January 2023 - December 2023',
                            'Ensured a seamless patient experience with check-ins and record management',
                        ],
                    },
                    {
                        id: 'volunteer-experience',
                        title: 'Volunteer Experience',
                        content: [
                            'Royal Columbian Hospital (70 hours)',
                            'March 2023 - December 2023',
                            'Served as the first point of contact for patients and visitors',
                        ],
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
                            <ul className="mt-2 list-disc pl-6 text-gray-700">
                                {section.content.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            <Text className="mt-2 text-lg text-gray-700">
                                {section.content}
                            </Text>
                        )}
                    </Box>
                ))}
            </Box>
        </Group>
    );
};

export default Resume;
