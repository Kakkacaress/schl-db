import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


import './footer.styles.scss';

function Footer() {
    return (
        <Typography variant="body9" color="textSecondary" align="center" gutterBottom={true} >
            {'Copyright © '}
            <Link color="inherit" href="/">
                Christ The Hope Of Glory Group of School
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer;