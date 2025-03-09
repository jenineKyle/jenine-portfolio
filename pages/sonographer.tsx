import Link from 'next/link';
import {
    Box,
    NavLink,
    Paper,
    Text,
    Title,
    Group,
    Stack,
    Image
} from '@mantine/core';
const certificatePaths = Array.from({ length: 11 }, (_, i) => `/certificates/cert${i + 1}.png`);



const Sonographer: React.FC = () => {


    return (
        <Group
            align="flex-start"
            className="bg-gradient-to-br from-blue-50 to-gray-100  shadow-lg border border-gray-300"
            style={{
                width: '100%',
                display: 'flex',
                gap: '20px',
                padding: '20px',
            }}
        >
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
                    maxHeight: '100%',
                    overflowY: 'auto',
                    borderRadius: '12px',
                }}
            >
                <Stack gap="md">
                    {[
                        'As a Communicator and Collaborator',
                        'As a Professional',
                        'As a Healthcare Provider',
                        'As an Imager',
                        'As a Critical Thinker and a Problem Solver',
                        'As an Advocate for a Safe Work Environment',
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

                </Box>

                {/* Sections */}
                {[
                    {
                        id: 'as-a-communicator-and-collaborator',
                        title: 'As a Communicator and Collaborator',
                        content: [
                            'At CNIH, the emphasis on both independent and group work is essential in shaping us as effective sonographers. Collaboration is a key skill, and over the course of my training, I’ve had many opportunities to work with my peers on projects and activities. I’ve learned that clear communication is essential when working in teams. Whether it’s setting expectations for timelines, dividing tasks, or planning for presentations, effective communication ensures we all stay on track and work together smoothly.',
                            'One of the most valuable parts of my training has been the hands-on experience of scanning my classmates and being scanned myself. This gives me a better understanding of what patients go through, not only in terms of the technical side of the procedure but also the physical and emotional challenges they may face. This experience has helped me become more compassionate and attentive when working with patients. In sonography, it’s important to communicate well with patients, whether it’s checking their comfort level during scans or gathering key information during intake to ensure a smooth and successful exam.',
                            'I’ve also learned the importance of asking for help when I don’t fully understand something. My instructors and peers have created a supportive environment where asking questions is encouraged. This has helped me grow and improve, especially in areas where I initially struggled.',
                            'We’ve been encouraged to work together on presentations, which has helped improve our ability to explain complex topics and support each other in learning. Below, I’ve included some of the presentations I’ve worked on with my peers. This process has strengthened my presentation and communication skills while deepening my understanding of key sonography concepts.',
                            {
                                text: "",
                                link: "https://docs.google.com/presentation/d/e/2PACX-1vSEqYYwpoPkGF4KPJ1hsBHcsXazQ3QIXX6i1ugDezhWbFecRVFoQJwgIhL4JakFtpOygLgkAysQGd2b/pub?start=false&loop=false&delayms=3000"
                            },
                            {
                                text: "",
                                link: "https://docs.google.com/presentation/d/e/2PACX-1vQrMC4OLQIhGd4ghXiO5s3XOmQbzPXGOeMeNcoEQsQTt9AS8uilXyAK_GsVEuIUCJOX2Yt09JSb9QnR/pub?start=false&loop=false&delayms=3000"
                            },

                        ],

                    },
                    {
                        id: 'as-a-professional',
                        title: 'As a Professional',
                        content: [
                            "Through my experiences as a Clerk at Brooke Radiology and volunteering at various healthcare settings, I’ve had the opportunity to witness and practice professionalism in action. Working in these environments has shown me how essential it is to demonstrate professionalism, whether interacting with patients, coworkers, or medical staff. As a Clerk, I’ve seen firsthand how important it is to be respectful, knowledgeable, and approachable, especially when it comes to making patients feel comfortable and supported. Volunteering at Royal Columbian Hospital and Queen's Park Care and Assisted Living also taught me how crucial professionalism is when communicating with patients, whether helping them navigate the hospital or engaging with residents to ensure they feel cared for and respected.",
                            "At CNIH, we have spent the past 12 months learning how crucial professionalism is in our roles. In the scan lab, we are taught that maintaining professionalism is key to delivering excellent patient care. Although our patients are often our classmates, it's still essential to ensure they feel comfortable and at ease during the examination and with us as their examiner.",
                            "I have strong expectations for professionalism and seek guidance from role models to help me meet those standards. To me, the most important qualities of a professional are being knowledgeable, respectful, and approachable. A deep understanding of your field is critical in any profession, but it’s especially vital in healthcare. When you are knowledgeable and confident, it helps put the patient at ease, allowing you to focus on ensuring their comfort. Respect is equally important. A true professional understands and accepts others’ choices, even if they differ from their own. In healthcare, it’s essential to honor patients' decisions, recognizing their individual beliefs and preferences.",
                            "Below, I’ve included some essays that highlight qualities of professionalism and how they contribute to a positive, effective healthcare environment.",
                            {
                                text: '',
                                link: "https://docs.google.com/document/d/e/2PACX-1vR9yD3rRTw8EK2nGpta9bA1x0rdQMESNcTeHzxxKtaIXft6ZARL5SOVbe-D0nSg4PFdoIQsy2jVaTyX/pub"
                            },
                            {
                                text: '',
                                link: "https://docs.google.com/document/d/e/2PACX-1vQcD8ZCxSiElMF2Ydg433Kd-N1INgnM9jPZjRb6QelpqFU-3-dFeTRzCxHDnfsr-0sqDQ_N5V8h_QfR/pub"
                            },
                            {
                                text: '',
                                link: "https://docs.google.com/document/d/e/2PACX-1vQjrqkxBiXDKHpIZDsi_S0Dhfzdn73LryLNeGCbEJFBJWkkXCfeXI2UA9POPiATnA87eCRFcacn8DKO/pub"
                            }
                        ]

                    },
                    {
                        id: 'as-a-healthcare-provider',
                        title: 'As a Healthcare Provider',
                        content: [
                            "My passion for pursuing a career in healthcare has been a lifelong journey, largely influenced by those who raised me, especially my aunt. She is a healthcare professional in the Philippines and played a key role in my upbringing. I vividly remember visiting her workplace and being fascinated by the human body and how healthcare works. Watching the positive impact she had on her patients and the sense of fulfillment she gained from helping others gave me a deep appreciation for the difference healthcare professionals make in people’s lives. This experience helped shape my understanding of healthcare as not just a career, but a way to contribute meaningfully to the well-being of others.",
                            "As a Clinic Clerk, I’ve gained a clear understanding of the critical role healthcare providers play in ensuring efficient and effective patient care. While my role is administrative, it has given me invaluable experience in coordinating with both patients and the healthcare team. I manage appointment scheduling, maintain accurate patient records, and assist with inquiries, addressing billing or insurance concerns—each of which is essential to the overall workflow of the healthcare process. Through these tasks, I’ve learned the importance of combining medical knowledge with compassionate communication.",
                            "This role has helped me develop essential skills, including organization, clear communication, and problem-solving. I’ve become proficient at managing schedules, keeping detailed records, and handling any issues that arise, such as scheduling conflicts or patient concerns. Collaborating closely with the healthcare team has also enhanced my ability to work effectively in a fast-paced environment.These experiences have prepared me with the skills needed for a future in healthcare, where communication, organization, and collaboration are essential for delivering high-quality patient care."
                        ],

                    },
                    {
                        id: 'as-an-imager',
                        title: 'As an Imager',
                        content: [
                            "In this part of my portfolio, I will present some of my scanning assessments and the images I have taken.",
                            "This assignment showcases the salivary glands and nearby lymph nodes. While salivary glands are not always included in scans, it's essential to recognize them and understand their normal appearance. Identifying any pathology in these glands can help diagnose the patient's issue, making it valuable to be familiar with them and the surrounding area.",
                            {
                                text: "View the presentation on salivary glands and lymph nodes",
                                link: "https://docs.google.com/presentation/d/e/2PACX-1vQZRCCjkpj3CQFVy8ggYBpClgB2Jlc3SwTuMDyG70rYGqnxupm1eZBcKLVQHljj-vp0X2Aq0hnvfD0i/pub?start=false&loop=false&delayms=3000"
                            },
                            "This group project highlights different artifacts that can occur during scanning. Recognizing artifacts and distinguishing them from normal structures is essential for accurate diagnoses. Artifacts can obscure real tissue, leading to incorrect interpretations. Identifying them allows the sonographer to adjust imaging techniques, ensuring clearer images and reducing the risk of missing important findings.",
                            {
                                text: "View the artifacts presentation",
                                link: "https://docs.google.com/presentation/d/e/2PACX-1vTcj3n10o9guelmt_25HmNGD6HAlaejl_QMqeefrA39Hj7LfmbwSjbM4drzeDiKnC6tb0LtrNuZ5sDZ/pub?start=false&loop=false&delayms=3000"
                            },
                            "This assignment, like others, involved labeling the structures in the image. During my time at CNIH, I’ve come to understand how crucial it is to accurately identify what I’m scanning. Labeling the images allows me to strengthen my knowledge and confirm that I’m interpreting the structures correctly.",
                            {
                                text: "View the labeling presentation",
                                link: "https://docs.google.com/presentation/d/e/2PACX-1vTRcKuX-_rAX7KwvMRvHs2UFvDEnky07qEFiXhSnXcQiXWx_IbfnSIsE7vbYmT3zv0beZEcriUGBB8z/pub?start=false&loop=false&delayms=3000"
                            },
                            "This assignment served as my introduction to MSK scanning. During the session, we were reminded of the importance of applying fundamental ultrasound principles, such as depth, focus, frequency, and gain, to enhance the clarity of the structures.",
                            {
                                text: "View the MSK scanning presentation",
                                link: "https://docs.google.com/presentation/d/e/2PACX-1vS_X7GyElCbJel1LCGYLjQt9C1WhTEYXFQBKbU98sS4Kw56jCybzeop_cWWkvjA9uHNanytFyPlgb_e/pub?start=false&loop=false&delayms=3000"
                            },
                        ],

                    },
                    {
                        id: 'as-a-critical-thinker-and-a-problem-solver',
                        title: 'As a Critical Thinker and a Problem Solver',
                        content: [
                            "Critical thinking is a key skill in sonography, as it directly affects the accuracy of diagnoses and the quality of patient care. In sonography, a sonographer's ability to think critically and solve problems is essential for obtaining the correct images that will support accurate diagnoses. Since ultrasound is operator-dependent, unlike many other imaging techniques, the sonographer must use their knowledge to make quick decisions about the images they capture. Understanding the anatomy, pathology, and symptoms helps guide the sonographer in focusing the exam on the areas most relevant to the patient's concerns.",
                            "At the start of each exam, engaging with the patient and understanding their symptoms and medical history is a crucial step. By asking the right questions and gathering this important information, the sonographer can narrow down the focus of the exam, ensuring that the most relevant areas are examined. Although sonographers do not diagnose, they play a critical role in identifying potential pathologies, which ultimately aids the radiologist in making an accurate diagnosis. Knowing the connection between symptoms and conditions helps sonographers make informed decisions about how to proceed with the scan, which questions to ask the patient, and how to adjust the examination as needed.",
                            "During my studies, I’ve worked on case studies and projects that have helped develop my critical thinking and problem-solving skills. These exercises have allowed me to practice making quick decisions, adapting to challenges, and focusing on delivering accurate results. They’ve deepened my understanding of how crucial these skills are in the sonographer role and how they contribute to high-quality patient care.",
                            {
                                text: '',
                                link: "https://docs.google.com/presentation/d/e/2PACX-1vRA7dSGvE180Ez9yo04P4ap-vP3sCak3wX2m1kqlcW6vVzfIjs8KHIXf3S5IfFb1czQnsZ_s_s8hNLA/pub?start=false&loop=false&delayms=3000"
                            },
                            {
                                text: '',
                                link: "https://docs.google.com/document/d/e/2PACX-1vRogcGsqFhDbo8jSasJ6nlN9R0NB97QyMk1kNnb5-JGevUxGJ6EKB9xZ3g0sqgdWTTV8qVAwVWHvon5/pub"
                            },
                            {
                                text: '',
                                link: "https://docs.google.com/document/d/e/2PACX-1vQbQHiHHuXXlH3_2Vu-XeNdMqtmxGrLzbvmqhz1au9yaHpSBJ_hmFe05lGXjHKC9l2LDFkDzhhijYMd/pub"
                            }
                        ],

                    },
                    {
                        id: 'as-an-advocate-for-a-safe-work-environment',
                        title: 'As an Advocate for a Safe Work Environment',
                        content: [
                            "Below, I’ve included the relevant certifications I’ve completed, demonstrating my commitment to maintaining a safe work environment for everyone involved."
                        ],
                        images: []
                    },
                ].map((section) => (
                    <Box id={section.id} key={section.id} className="pt-10">
                        <Title order={2}>{section.title}</Title>
                        {Array.isArray(section.content) ? (
                            <ul className="mt-4 list-disc pl-6 text-gray-700">
                                {section.content.map((item, idx) => (
                                    <li className='mt-2' key={idx}>
                                        {typeof item === 'string' ? (
                                            item
                                        ) : (
                                            <>
                                                {item.text}{' '}
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline"
                                                >
                                                    View Presentation
                                                </a>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Text className="mt-2 text-lg text-gray-700">
                                {section.content}
                            </Text>
                        )}
                        {section.images && (
                            <div className="mt-4 flex flex-wrap gap-4 justify-center">
                                {certificatePaths.map((path, index) => (
                                    <Image
                                        key={index}
                                        src={path}
                                        alt={`Certificate ${index + 1}`}
                                        className="mt-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                                        height={400}
                                        width={450}
                                    />
                                ))}
                            </div>
                        )}

                    </Box>
                ))}
            </Box>
        </Group>
    );
};

export default Sonographer;
