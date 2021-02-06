import styled from 'styled-components';

const grey = '#B5B3B3';
const dark = '#282c34';
const green = '#18AC15';

export const Title = styled.h1`
    color: ${dark};
`;

export const Text = styled.span`
    color: ${grey};
`;

export const SubText = styled.span`
    color: ${dark};
`;

export const BoldText = styled(SubText)`
    font-weight: bold;
`;

export const PercentageText = styled.span`
    color: ${green};
    font-size: 10;
`;