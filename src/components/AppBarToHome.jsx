import { Link } from 'react-router-dom'


// mui컴포넌트
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function AppBarToHome() {
    return (
        <>
            <Link to="/" style={{ textDecoration: "none" }}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            과제제출
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Link>
        </>
    );
}

export default AppBarToHome;