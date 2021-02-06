import React from 'react'
import { BoldText, Square, SquareInterior } from '../styles/content';

const SupportSquare = () => (
    <span aria-hidden="true">
        <Square>
            <SquareInterior>
                <BoldText>S</BoldText>
            </SquareInterior>
        </Square>
    </span>
);

export default SupportSquare;
