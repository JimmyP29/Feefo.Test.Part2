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
        lastUploadDate: 1605001226079,
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