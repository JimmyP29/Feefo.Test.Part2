import styled from 'styled-components';

const lightGrey = '#E7F0EE';
const blue = '#0796FF';
const grey = '#5A6369';
const dark = '#282c34';
const green = '#08AA37';
const yellow = '#EEC80C';
const iconSize = '1.8rem';
const borderRadius = '.5rem';

/* MAIN */
export const MainWrapper = styled.section`
    padding: 2%;
    background-color: ${lightGrey};
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

export const RedText = styled(Text)`
    color: red;
`;

export const BoldText = styled(Text)`
    font-weight: bold;
`;

export const PercentageText = styled(BoldText)`
    color: ${green};
    font-size: 2.5rem;
`;

/* ICONS */
const Icon = styled.span`
    font-size: ${iconSize};
    display: flex;
    justify-content: flex-start;
`;
export const BlueIcon = styled(Icon)`
    color: ${blue};
`;

export const GreyIcon = styled(Icon)`
    color: ${grey};
`;

export const Square = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    resize: vertical;
    padding: 1.5rem;
    border-radius: ${borderRadius};
    background-color: ${yellow};
`;

export const SquareInterior = styled.div`
    position: absolute;
    top: 50%;
    left: 1.2rem;
    right: 1.2rem;
    padding: .75rem;
    transform: translateY(-50%);
    resize: vertical;
`;

/* TILES */
export const TileWrapper = styled.div`
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    border-radius: ${borderRadius};
`;

const Tile = styled.div`
    background-color: white;
    border-bottom: ${lightGrey} solid 2px;
    border-left: ${lightGrey} solid 2px;
    padding: 2%;
    display: 'flex';
`;

export const TileTop = styled(Tile)`
    border-top-left-radius: ${borderRadius};
    border-top-right-radius: ${borderRadius};
`;

export const TileBottomLeft = styled(Tile)`
    border-bottom-left-radius: ${borderRadius};
`;

export const TileBottomRight = styled(Tile)`
    border-bottom-right-radius: ${borderRadius};
`;