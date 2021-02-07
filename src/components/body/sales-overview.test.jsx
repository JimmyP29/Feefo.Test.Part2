import { render } from '@testing-library/react';
import SalesOverview from './sales-overview';
import { salesOverviewRenderData } from '../testData';
import { calculatePercentage } from '../body/sales-overview';

describe('Given the SalesOverview component', () => {
    describe.each([
        salesOverviewRenderData.happy1,
        salesOverviewRenderData.happy2,
    ])('And happy path data passed in is valid', (testCase) => {
        let uploadRenderResult;
        let lineRenderResult;
        const {
            input: {
                uploads,
                successfulUploads,
                linesAttempted,
                linesSaved,
            },
            output: {
                uploadRenderValue,
                lineRenderValue,
            }
        } = testCase;

        beforeEach(() => {
            uploadRenderResult = calculatePercentage(uploads, successfulUploads);
            lineRenderResult = calculatePercentage(linesAttempted, linesSaved);
        });

        test('Then upload details are calculated', () => {
            render(<SalesOverview salesOverview={testCase.input} />);

            expect(uploadRenderResult).toBe(uploadRenderValue);
            expect(lineRenderResult).toBe(lineRenderValue);
        });
    });

    describe.each([
        salesOverviewRenderData.sad1,
        salesOverviewRenderData.sad2,
        salesOverviewRenderData.sad3,
    ])('And sad path data passed in is valid', (testCase) => {
        let uploadRenderResult;
        let lineRenderResult;
        const {
            input: {
                uploads,
                successfulUploads,
                linesAttempted,
                linesSaved,
            },
            output: {
                uploadRenderValue,
                lineRenderValue,
            }
        } = testCase;
        const uploadInput = uploads;
        const lineInput = linesAttempted;

        beforeEach(() => {
            uploadRenderResult = calculatePercentage(uploadInput, successfulUploads);
            lineRenderResult = calculatePercentage(lineInput, linesSaved);
        });

        test('Then upload details are calculated', () => {
            render(<SalesOverview salesOverview={testCase.input} />);

            expect(uploadRenderResult).toBe(uploadRenderValue);
            expect(lineRenderResult).toBe(lineRenderValue);
        });
    });
});
