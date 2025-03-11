import {
    Container,
    Title,
    Overlay,
    Flex,
    Box,
    Text, Card, Grid, Divider
} from '@mantine/core';
import Image from 'next/image'
import classes from './index.module.css';
const placesPaths = Array.from({ length: 8 }, (_, i) => `/places/place${i + 1}.jpg`);
const placesPathsJpeg = Array.from({ length: 11 }, (_, i) => `/places/place${i + 9}.jpeg`);
import profilePhoto from '../public/jenineprofile.jpg'


export default function Home() {

    return (
        <div className={classes.hero}>
            {/* Overlay to darken background */}
            <Overlay color="#000" opacity={0.9} zIndex={1} />

            <Container px={0} className={classes.inner}>

                <div className="w-screen mt-4 flex flex-wrap items-center gap-6 justify-center px-6 sm:flex-col md:flex-row">
                    <div className="relative w-[250px] h-[250px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]">
                        <Image
                            src={profilePhoto}
                            alt="Profile"
                            className="object-cover rounded-full"
                            fill

                        />
                    </div>
                    <Text className="text-white text-center sm:text-center md:text-left text-2xl sm:text-lg md:text-xl lg:text-3xl xl:text-5xl font-bold p-6">
                        Hi! I'm
                        <span className="block inline text-[#dc9f71] font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl ">
                            {' '} Jenine Gutierrez,
                        </span>
                        <br />

                        a Canadian National <br /> Institute of Health Student.

                    </Text>
                </div>


                <Flex
                    // gap="md"
                    justify="flex-start"
                    align="flex-start"
                    direction="row"
                    wrap="wrap"
                    style={{ width: '100vw', marginTop: '70px' }}
                >
                    {/* Left Box - About Me */}
                    <Box
                        style={{
                            flex: '1 1 500px', // Takes full width on small screens, 50% on larger
                            // minWidth: '300px',
                            padding: '0px 40px',
                            margin: 'auto auto'
                        }}
                    >
                        <Title order={1} className={classes.title}>
                            About Me
                        </Title>

                        <Container size="lg" py="xl">

                            <Card shadow="sm" p="lg" radius="md" mb="lg">
                                <Text className={classes.subTitle} size="lg" fw={500}>Work Experience</Text>
                                <Divider my="sm" />
                                <Text>
                                    I earned my Medical Office Assistant certificate in December 2022, which provided me with essential skills and a comprehensive understanding of how medical offices operate. This training laid a strong foundation for my career, equipping me with expertise in office tasks, patient care, and administrative duties. In my previous role as a Clerk at Brooke Radiology, I gained valuable hands-on experience in managing patient intake and ensuring seamless clinic operations. This experience increased my comfort in a clinical setting and taught me the importance of staying organized while making patients feel at ease. Through this role, I learned to balance efficiency with compassion, creating a positive and supportive environment for both patients and staff.
                                </Text>

                            </Card>

                            <Card shadow="sm" p="lg" radius="md" mb="lg">
                                <Text className={classes.subTitle} size="lg" fw={500}>Volunteer Experience</Text>
                                <Divider my="sm" />
                                <Text>
                                    I dedicated my time as a volunteer at Royal Columbian Hospital, where I served as a wayfinder, assisting patients and visitors in navigating the hospital. This role not only
                                    sharpened my communication skills but also allowed me to provide comfort and reassurance to those facing stressful situations. Additionally, I volunteered at Queen's Park Care
                                    and Assisted Living, engaging with elderly residents through interactive activities such as baking and bingo programs.
                                    My time in these roles deepened my understanding of patient-centered care, taught me the value of patience and empathy, and strengthened my ability to connect with individuals
                                    from different walks of life.
                                </Text>
                            </Card>

                            <Card shadow="sm" p="lg" radius="md" mb="lg">
                                <Text className={classes.subTitle} size="lg" fw={500}>Current Studies</Text>
                                <Divider my="sm" />
                                <Text>
                                    I am currently pursuing my studies to become a Diagnostic Medical Sonographer at the Canadian National Institute of Health. This rigorous program consists of
                                    12 months of intensive coursework, covering anatomy, pathology, and ultrasound techniques, followed by an 8-month clinical practicum at various medical facilities.
                                    My goal is to earn certification with Sonography Canada and the American Registry for Diagnostic Medical Sonography, allowing me to become a registered Diagnostic Medical Sonographer.
                                    I am excited about this journey, as it allows me to merge my passion for patient care with the technical expertise required to perform diagnostic imaging, helping physicians
                                    make accurate medical assessments.
                                </Text>
                                <Text mt={20}>
                                    I, Jenine Gutierrez, am a member in good standing with the Canadian National Institute of Health, Sonography Canada, and the American Registry for Diagnostic Medical Sonography.
                                </Text>
                            </Card>

                            <Title className={classes.title} order={2} ta="center" mt="xl" mb="md">What I Enjoy the Most</Title>
                            <Grid>
                                <Grid.Col >
                                    <Card shadow="sm" p="lg" radius="md">
                                        <Text className={classes.subTitle} size="lg" fw={500}>Travel Adventures</Text>
                                        <Divider my="sm" />
                                        <Text>
                                            I love traveling! It has always been a way for me to explore new cultures, meet new people, and create unforgettable memories.
                                            I spent two months in the Philippines reconnecting with my roots, visiting stunning islands, and embracing the rich traditions of my home country.
                                            I also fulfilled a lifelong dream of visiting New York City, where I marveled at iconic landmarks like Times Square and the Statue of Liberty.
                                            Exploring the vibrant streets of the Big Apple gave me a sense of wonder and adventure, making it one of my most cherished trips.
                                        </Text>
                                    </Card>
                                </Grid.Col>

                                <Grid.Col >
                                    <Card shadow="sm" p="lg" radius="md">
                                        <Text className={classes.subTitle} size="lg" fw={500}>Memorable Moments</Text>
                                        <Divider my="sm" />
                                        <Text>
                                            Some of my most memorable experiences include hiking to the breathtaking summit of Diamond Head in Hawaii, where I was rewarded with an unforgettable panoramic view.
                                            The island's relaxed atmosphere, combined with its stunning beaches and lush landscapes, made it feel like paradise. Another remarkable journey was to Puerto Vallarta, Mexico,
                                            where I immersed myself in the local culture, tasted authentic Mexican cuisine, and explored the lively streets filled with color and energy.
                                            These travel experiences have shaped my perspective, fostering a greater appreciation for diverse cultures and traditions while allowing me to grow as an individual.
                                        </Text>
                                    </Card>
                                </Grid.Col>
                            </Grid>
                        </Container>

                    </Box>

                </Flex>
                <Title order={1} className={classes.title}>
                    Sharing some of my favorite favorite snaps
                </Title>
                <div
                    className="w-screen mt-4 flex flex-wrap gap-4 justify-center px-6"
                >
                    {placesPaths.concat(placesPathsJpeg).map((path, index) => (
                        <div key={index} className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/5 xl:w-1/6 h-[400px] ">
                            <Image
                                src={path}
                                alt={`places ${index + 1}`}
                                className="object-cover rounded-lg"
                                fill
                            />
                        </div>
                    ))}
                </div>


            </Container>
        </div>
    );
}
