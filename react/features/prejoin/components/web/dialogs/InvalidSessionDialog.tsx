import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import Dialog from '../../../../base/ui/components/web/Dialog';

interface IProps {
    onClose: () => void;
}

const useStyles = makeStyles()(theme => {
    return {
        container: {
            padding: theme.spacing(3),
            textAlign: 'center',
        },
        message: {
            marginBottom: theme.spacing(3),
            color: theme.palette.text01,
        },
    };
});

const handleLogin = () => {
    window.location.href = 'https://auth.marketplace.gradpal.io/auth/login';
};

const InvalidSessionDialog = ({ onClose }: IProps) => {
    const { t } = useTranslation();
    const { classes } = useStyles();

    return (
        <Dialog
            cancel = {{ hidden: true }}
            ok = {{
                translationKey: 'dialog.Ok',
            }}
            onSubmit = { handleLogin }
            titleKey = 'prejoin.invalidSession.title'>
            <div className = { classes.container }>
                <p className = { classes.message }>{t('prejoin.invalidSession.message')}</p>
            </div>
        </Dialog>
    );
};

export default InvalidSessionDialog;
