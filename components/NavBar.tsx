import { useRouter } from 'next/router'; // Import useRouter hook
import { useEffect, useState } from 'react';
import { Burger, Container, Group, Text, Popover, Stack } from '@mantine/core';
import Link from 'next/link'; // Import Next.js Link
import classes from './HeaderMenu.module.css';

const links = [
    { link: '/', label: 'About Me' },
    { link: '/resume', label: 'Resume' },
    { link: '/coverletter', label: 'Cover Letter' },
    { link: '/sonographer', label: 'The Sonographer' },
    { link: '/contact', label: 'Contact' }
];

function NavBar() {
    const router = useRouter(); // Access the current route
    const [active, setActive] = useState(links[0].link);
    const [opened, setOpened] = useState(false)

    useEffect(() => {
        setActive(router.pathname)
    }, [router])

    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
            data-active={active === link.link || undefined}
            onClick={() => {
                setActive(link.link)
                setOpened(false)
            }}
        >
            {link.label}
        </Link>
    ));

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Text fw={700} c='#e6721a' fz={20}>Jenine Gutierrez</Text>
                <Group gap={5} visibleFrom="xs">
                    {/* Regular navigation links for larger screens */}
                    {items}
                </Group>


                {/* Popover that displays when burger is clicked */}

                <Popover
                    opened={opened}
                    onClose={() => setOpened(false)}
                    position="bottom"
                    withArrow
                    shadow="md"
                // classNames={{ popover: classes.popover }}
                >
                    <Popover.Target>
                        <Burger opened={opened} onClick={() => setOpened(!opened)} hiddenFrom="xs" size="sm" />
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
