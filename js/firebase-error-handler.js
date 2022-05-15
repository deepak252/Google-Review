
const emailAuthException = (code) => {
    switch (code) {
        case 'auth/user-not-found':
            return 'User does not exist with this email';
        case 'auth/wrong-password':
            return 'Invalid e-mail/password';
        case 'auth/invalid-email':
            return 'Enter a valid e-mail';
        case 'auth/email-already-in-use':
            return 'User already exist with this email';
        case 'auth/weak-password':
            return 'Password entered is too weak.';
        case 'auth/too-many-requests':
            return 'Requests are blocked from this device due to unusual activity. Try again after some time';

        default:
            return 'Something went wrong';
    }
}
