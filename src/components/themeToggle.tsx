import { useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 200px;
    height: 200px;
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.primary};
    font-family: ${({ theme }) => theme.font.family.caveat};
    font-size: ${({ theme }) => theme.font.size.xl};
`;

type props = {
    theme: string;
    setTheme: (theme: string) => void;
};

const ThemeToggle = ({ theme, setTheme }: props) => {
    const toggleTheme = () => {
        if (theme === 'light') setTheme('dark');
        else setTheme('light');
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        const prefersDark =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme('dark');
        }
    }, []);

    return <StyledButton onClick={toggleTheme}>Zmien</StyledButton>;
};

export default ThemeToggle;
