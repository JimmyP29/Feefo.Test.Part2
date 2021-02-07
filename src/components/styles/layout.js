import styled from 'styled-components';

export const PaddingLeft = styled.div`
    padding-left: ${(props) => props.percentage ?
        `${props.percentage}%`
        :
        '5%'};
`;

export const PaddingBottom = styled.div`
    padding-bottom: 3%;
`;

export const PaddingTop = styled.div`
    padding-top: ${(props) => props.percentage ?
        `${props.percentage}%`
        :
        '3%'};
`;
