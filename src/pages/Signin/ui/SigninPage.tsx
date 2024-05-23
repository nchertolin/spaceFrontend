import { Stack } from '@mui/material';
import { SigninForm } from '@/features/user/signin';

const SigninPage = () => (
    <Stack
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100vh"
        bgcolor={(theme) => theme.palette.background.paper}
    >
        <SigninForm />
    </Stack>
);

export default SigninPage;
