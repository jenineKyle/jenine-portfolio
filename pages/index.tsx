import { Container, Title, Card, Overlay, Blockquote, Group } from '@mantine/core';
import classes from './index.module.css';
import { IconInfoCircle } from '@tabler/icons-react';

export default function Home() {
    const icon = <IconInfoCircle />;
    return (
        <div className={classes.hero}>
            {/* Overlay to darken background */}
            <Overlay color="#000" opacity={0.90} zIndex={1} />

            <Container px={0} className={classes.inner} >
                {/* Title Section */}
                <Title order={1} className={classes.title}>About Me</Title>


                <div style={{ background: 'white', marginTop: '30px' }}>
                    <Blockquote color="lime" cite="" iconSize={30} icon={icon}>
                        I earned my Medical Office Assistant certificate in December 2022, which gave me important skills and a solid understanding of how medical offices operate. This has been a great foundation as I move forward in my career. My training provided me with a strong background in office tasks, patient care, and administrative duties, all of which I apply every day as a Clerk at Brooke Radiology. I’ve gained hands-on experience with daily clinic tasks, such as managing patient intake and ensuring everything runs smoothly from start to finish. This has made me more comfortable in a clinical setting and has taught me how vital it is to stay organized and make patients feel at ease. <br></br>

                    </Blockquote>

                </div>
                <div style={{ background: 'white', marginTop: '20px' }}>
                    <Blockquote color="lime" cite="" iconSize={30} icon={icon} >
                        In my free time, I volunteered at Royal Columbian Hospital as a wayfinder, greeting patients and visitors and helping them navigate the hospital. It was a rewarding experience that allowed me to develop strong communication skills and learn how to support patients and their families during stressful moments. I also volunteered at Queen's Park Care and Assisted Living, where I helped with baking and bingo programs. During baking sessions, I helped residents with tasks, encouraged socializing, and kept them engaged. In the bingo program, I promoted friendly competition and ensured a fun, lively atmosphere, making sure each session ran smoothly and was enjoyable for the residents.<br></br>
                    </Blockquote>
                </div>  <div style={{ background: 'white', marginTop: '20px' }}>
                    <Blockquote color="lime" cite="" iconSize={30} icon={icon} >
                        Both my work and volunteer experiences have helped me grow both technically and personally. I’ve developed stronger communication skills and become more confident in my ability to assist and support others. I truly enjoy helping people, and I’m motivated to continue making a positive impact on patients, visitors, and residents. <br></br>
                    </Blockquote>
                </div>
                <div style={{ background: 'white', marginTop: '20px' }}>
                    <Blockquote color="lime" cite="" iconSize={30} icon={icon} >
                        Currently, I am studying to become a Diagnostic Medical Sonographer at the Canadian National Institute of Health. The program includes 12 months of intensive studies in class as well as an 8-month practicum at various clinical sites. My goal is to become certified with Sonography Canada to become a registered Diagnostic Medical Sonographer.<br></br>
                    </Blockquote>
                </div>
                <div style={{ background: 'white', marginTop: '20px' }}>
                    <Blockquote color="lime" cite="" iconSize={30} icon={icon} >
                        I, Jenine Gutierrez, am a member in good standing with the Canadian National Institute of Health, Sonography Canada, and the American Registry for Diagnostic Medical Sonography.
                    </Blockquote>

                </div>


                {/* <Group mt='md'>
                    <BadgeCard />
                    <BadgeCard />
                    <BadgeCard />
                </Group>
 */}

            </Container>
        </div>
    );
}

