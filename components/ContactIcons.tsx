import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
    return (
        <div className={classes.wrapper} {...others}>
            <Box mr="md">
                <Icon size={24} color='#e6721a' />
            </Box>

            <div style={{ width: '250px', marginLeft: '10px' }}>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                <Text className={classes.description}>{description}</Text>
            </div>
        </div>
    );
}

const MOCKDATA = [
    { title: 'Email', description: 'jgutierrez18@cnih.ca', icon: IconAt },
    { title: 'Phone', description: '+1 (778) 847-9104 ', icon: IconPhone },
    { title: 'Address', description: '312-7428 19th Avenue Burnaby British Columbia', icon: IconMapPin },
    { title: 'Working hours', description: '8 a.m. – 5 p.m.', icon: IconSun },
];

export function ContactIconsList() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}