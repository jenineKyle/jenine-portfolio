// import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import {
    Stack,
    // ActionIcon,
    // Group,
    SimpleGrid,
    Text,
    Title,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactForm.module.css';

// const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactForm() {
    // const icons = social.map((Icon, index) => (
    //     <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
    //         <Icon size={22} stroke={1.5} color='blue' />
    //     </ActionIcon>
    // ));

    return (
        <div className={classes.wrapper}>
            <SimpleGrid p={100} cols={{ base: 1, sm: 1 }} spacing={50}>

                <div>
                    <Title mb={20} className={classes.title}>Contact Me</Title>
                    <Stack style={{ display: 'flex', justifyContent: 'center', margin: '10px auto' }}>
                        <Text fw={500} ta='center' className={classes.description} mt="sm" mb={10}>
                            Thank you for reading about my sonography career this far! I look forward to starting my journey in the field of Diagnostic Medical Sonography!
                        </Text>
                        <Text ta='center' className={classes.description} mb={20}>
                            If you have any comments or questions, feel free to reach out! I look forward to hearing from you!
                        </Text>
                    </Stack>
                    <ContactIconsList />
                </div>
            </SimpleGrid>
        </div>
    );
}