import { useState } from 'react';
import { Burger, Container, Group, Text, Popover, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link'; // Import Next.js Link
import classes from './HeaderMenu.module.css';

const links = [
    { link: '/about', label: 'About Me' },
    { link: '/resume', label: 'Resume' },
    { link: '/coverletter', label: 'Cover Letter' },
    { link: '/sonographer', label: 'The Sonographer' },
    { link: '/contact', label: 'Contact' }
];

function NavBar() {

    const [active, setActive] = useState(links[0].link);
    const [opened, setOpened] = useState(false)

    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => setActive(link.link)}
        >
            {link.label}
        </Link>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Text fz={20}>Jenine Kyle Gutierrez</Text>
                <Group gap={5} visibleFrom="xs">
                    {/* Regular navigation links for larger screens */}
                    {items}
                </Group>


                {/* Popover that displays when burger is clicked */}

                <Popover
                    opened={opened}
                    onClose={() => setOpened(!opened)}
                    position="bottom"
                    withArrow
                    shadow="md"
                // classNames={{ popover: classes.popover }}
                >
                    <Popover.Target>
                        <Burger opened={opened} hiddenFrom="xs" size="sm" />
                    </Popover.Target>
                    <Popover.Dropdown>
                        <Stack>
                            {items}
                        </Stack>
                    </Popover.Dropdown>
                </Popover>
            </Container>
        </header>
    );
}

export default NavBar;
