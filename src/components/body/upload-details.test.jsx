import { render, screen, waitFor } from '@testing-library/react';
import UploadDetails from './upload-details';
import { percentageRenderData } from '../testData';

describe('Given the UploadDetails component', () => {
    describe.each([
        percentageRenderData.happy1,
        percentageRenderData.happy2,
        percentageRenderData.happy3,
    ])('And happy path data passed in is valid', (testCase) => {
        test('Then upload details are rendered', async () => {
            render(<UploadDetails uploadPercentage={testCase.input} />);
            await waitFor(() => screen.getByText(`${testCase.input}%`))

            expect(screen.getByText(`${testCase.input}%`)).toHaveTextContent(testCase.output);
        });
    });

    describe.each([
        percentageRenderData.sad1,
        percentageRenderData.sad2,
    ])('And sad path data passed in is valid', (testCase) => {
        test('Then upload details are rendered', async () => {
            render(<UploadDetails uploadPercentage={testCase.input} />);
            await waitFor(() => screen.getByText(testCase.input))

            expect(screen.getByText(testCase.input)).toHaveTextContent(testCase.output);
        });
    });
});
