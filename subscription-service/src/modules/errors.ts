export const subscriptionErrors = {
    INVALID_INPUT: {
        status: 400,
        message: 'Invalid request',
    },
    EMAIL_ALREADY_SUBSCRIBED: {
        status: 409,
        message: 'Email already exists',
    },
    INVALID_CONFIRMATION_TOKEN: {
        status: 400,
        message: 'Invalid token',
    },
    INVALID_UNSUBSCRIPTION_TOKEN: {
        status: 404,
        message: 'Token not found',
    },
};
