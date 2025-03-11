import { IconAt, IconMapPin, IconPhone } from '@tabler/icons-react';
import { Box, Stack, Text } from '@mantine/core';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
    href?: string;  // Add href for clickable links
}

function ContactIcon({ icon: Icon, title, description, href, ...others }: ContactIconProps) {
    return (
        <div className={classes.wrapper} {...others}>
            <Box mr="md">
                <Icon size={24} color='#e6721a' />
            </Box>

            <div style={{ width: '200px', marginLeft: '10px' }}>
                <Text size="xs" className={classes.title}>
                    {title}
                </Text>
                {href ? (
                    <Text component="a" href={href} className={classes.description} target="_blank" rel="noopener noreferrer">
                        {description}
                    </Text>
                ) : (
                    <Text className={classes.description}>{description}</Text>
                )}
            </div>
        </div>
    );
}

const MOCKDATA = [
    { title: 'Email', description: 'jgutierrez18@cnih.ca', icon: IconAt, href: 'mailto:jgutierrez18@cnih.ca' },
    { title: 'Phone', description: '+1 (778) 847-9104', icon: IconPhone, href: 'tel:+17788479104' },
    { title: 'Address', description: '312-7428 19th Avenue Burnaby British Columbia', icon: IconMapPin },
];

export function ContactIconsList() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack>{items}</Stack>;
}
