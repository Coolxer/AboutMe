import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Hamburger = styled.button`
    font-size: ${({ theme }) => theme.font.size.xl};

    text-decoration: none;
    border: none;

    background-color: ${({ theme }) => theme.palette.accent};
    color: ${({ theme }) => theme.palette.secondary};
`;

export const Icon = styled(FontAwesomeIcon)<{ open?: boolean }>`
    transform: rotate(${({ open }) => (open ? '90deg' : '0deg')});
    transition: transform 0.35s ease-in-out;
`;
