import styled from 'styled-components';

const blue = '#0796FF';
const grey = '#5A6369';
const dark = '#282c34';
const green = '#08AA37';

/* MAIN */
export const MainWrapper = styled.section`
    padding: 2%;
    background-color: lightblue;
    font-family: 'Roboto', sans-serif;
`;

/* TEXT */
export const Title = styled.h1`
    color: ${dark};
`;

export const Text = styled.span`
    color: ${dark};
    font-size: 1.2rem;
`;

export const GreyText = styled(Text)`
    color: ${grey};
`;

export const BoldText = styled(Text)`
    font-weight: bold;
`;

export const PercentageText = styled(BoldText)`
    color: ${green};
    font-size: 2.5rem;
`;

/* ICONS */
export const BlueIcon = styled.span`
    color: ${blue};
    font-size: 1.8rem;
`;

export const GreyIcon = styled.span`
    color: ${grey};
    font-size: 1.8rem;
`;

/* TILES */
export const TileWrapper = styled.div`
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`;

export const Tile = styled.div`
    background-color: white;
    border-bottom: lightblue solid 2px;
    border-left: lightblue solid 2px;
    padding: 2%;
    display: 'flex';
`;