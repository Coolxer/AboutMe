import { css } from 'styled-components';

const flex = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const flexRow = css`
    ${flex}
    flex-direction: row;
`;

const flexCol = css`
    ${flex}
    flex-direction: column;
`;

const mixins = { flex, flexRow, flexCol };

export default mixins;
