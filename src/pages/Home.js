import { Link } from 'react-router-dom'

// 컴포넌트
import Profile from '../components/Profile';
import AppBarToHome from '../components/AppBarToHome';

// mui컴포넌트
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';



function Home() {
    return (
        <>
            <Container maxWidth="sm" >
                {/* 상단바 */}
                <AppBarToHome />
                {/* <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            과제제출
                        </Typography>
                    </Toolbar>
                </AppBar> */}
                {/* 프로필 자리 */}
                <Profile />

                {/* 과제버튼 자리 */}
                <Grid container
                    direction="row"
                    alignItems="center"
                    sx={{ mt: 2 }}>

                    <Grid item xs={2}>
                        <Link to="./Task1" style={{ textDecoration: "none" }}>
                            <Button variant="contained">Task1</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to="./Task2" style={{ textDecoration: "none" }}>
                            <Button variant="contained">Task2</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={2}>
                        <Link to="./Task3" style={{ textDecoration: "none" }}>
                            <Button variant="contained">Task3</Button>
                        </Link>
                    </Grid>
                </Grid>

            </Container>
        </>
    );
}
export default Home;