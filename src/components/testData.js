export const initialSetup = {
    supportContact: {
        name: 'James Privett',
        email: 'james.privett@test.com'
    },
    salesOverview: {
        uploads: 8,
        successfulUploads: 3,
        linesAttempted: 20,
        linesSaved: 4,
    }
};

export const percentageRenderData = {
    happy1: { input: '0', output: '0%' },
    happy2: { input: '29', output: '29%' },
    happy3: { input: '100', output: '100%' },
    sad1: {
        input: 'Please supply valid numbers for calculation.',
        output: 'Please supply valid numbers for calculation.',
    },
    sad2: {
        input: 'Partial value (10) cannot be greater than total value (5).',
        output: 'Partial value (10) cannot be greater than total value (5).'
    },
};

export const salesOverviewRenderData = {
    happy1: {
        input: {
            uploads: 8,
            successfulUploads: 3,
            linesAttempted: 20,
            linesSaved: 4,
        },
        output: {
            uploadRenderValue: '38',
            lineRenderValue: '20',
        }
    },
    happy2: {
        input: {
            uploads: 8,
            successfulUploads: 8,
            linesAttempted: 20,
            linesSaved: 0,
        },
        output: {
            uploadRenderValue: '100',
            lineRenderValue: '0',
        }
    },
    sad1: {
        input: {
            uploads: 0,
            successfulUploads: 8,
            linesAttempted: '',
            linesSaved: 0,
        },
        output: {
            uploadRenderValue: 'Partial value (8) cannot be greater than total value (0).',
            lineRenderValue: 'Please supply valid numbers for calculation.',
        }
    },
    sad2: {
        input: {
            uploads: 'nope',
            successfulUploads: 8,
            linesAttempted: false,
            linesSaved: 0,
        },
        output: {
            uploadRenderValue: 'Please supply numerical values only.',
            lineRenderValue: 'Please supply valid numbers for calculation.',
        }
    },
    sad3: {
        input: {
            uploads: null,
            successfulUploads: 8,
            linesAttempted: undefined,
            linesSaved: 0,
        },
        output: {
            uploadRenderValue: 'Please supply valid numbers for calculation.',
            lineRenderValue: 'Please supply valid numbers for calculation.',
        }
    }
};