import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import {
    ActionIcon,
    Group,
    SimpleGrid,
    Text,
    Title,
} from '@mantine/core';
import { ContactIconsList } from './ContactIcons';
import classes from './ContactForm.module.css';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactForm() {
    const icons = social.map((Icon, index) => (
        <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
            <Icon size={22} stroke={1.5} color='blue' />
        </ActionIcon>
    ));

    return (
        <div className={classes.wrapper}>
            <SimpleGrid p={100} cols={{ base: 1, sm: 1 }} spacing={50}>
                <div>
                    <Title className={classes.title}>Contact Me</Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        I will get back to you within 24 hours
                    </Text>

                    <ContactIconsList />

                    <Group mt="xl" justify="center">{icons}</Group>
                </div>
                {/* <div className={classes.form}>
                    <TextInput
                        label="Email"
                        placeholder="your@email.com"
                        required
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <TextInput
                        label="Name"
                        placeholder="John Doe"
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <Textarea
                        required
                        label="Your message"
                        placeholder="I want to order your goods"
                        minRows={4}
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button className={classes.control}>Send message</Button>
                    </Group>
                </div> */}
            </SimpleGrid>
        </div>
    );
}