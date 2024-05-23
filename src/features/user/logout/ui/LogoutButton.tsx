import {
    DialogActions, DialogTitle, IconButton, Stack, Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { memo, useState } from 'react';
import { useActions } from '@/app/providers/StoreProvider';
import { AuthRoutePath } from '@/shared/config/routeConfig/routeConfig';
import { BaseButton } from '@/shared/ui/Inputs';
import { BaseDialog } from '@/shared/ui/Dialog/BaseDialog';

export const LogoutButton = memo(() => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { logout } = useActions();

    const toggleDialog = () => setOpen((open) => !open);

    const onClick = () => {
        logout();
        navigate(AuthRoutePath.Signin);
    };

    return (
        <>
            <IconButton
                sx={{
                    backgroundColor: 'secondary.main',
                    borderRadius: 2,
                    color: 'primary.dark',
                    p: 2,
                }}
                onClick={toggleDialog}
            >
                <LogoutIcon />
            </IconButton>
            <BaseDialog open={open} onClose={toggleDialog}>
                <DialogTitle bgcolor="background.paper">
                    <Typography variant="body2" pt={4}>
                        Вы уверены что хотите выйти?
                    </Typography>
                </DialogTitle>
                <DialogActions>
                    <Stack direction="row" spacing={2} p={2}>
                        <BaseButton
                            variant="contained"
                            onClick={toggleDialog}
                            autoFocus
                        >
                            Отмена
                        </BaseButton>
                        <BaseButton
                            variant="outlined"
                            onClick={onClick}
                        >
                            Выйти
                        </BaseButton>
                    </Stack>
                </DialogActions>
            </BaseDialog>
        </>
    );
});
