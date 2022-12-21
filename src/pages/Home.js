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
                {/* 상단바 자리*/}
                <AppBarToHome />

                <Grid container
                    direnction="column"
                    alignItems="center">

                    {/* 프로필 자리 */}
                    <Grid item xs={12}
                    ><Profile />
                    </Grid>


                    {/* 과제버튼 자리 */}
                    <Grid container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="flex-start"
                        sx={{ mt: 3 }}>

                        <Grid item xs={3}>
                            <Link to="./Task1" style={{ textDecoration: "none" }}>
                                <Button variant="contained">과제 : Level1</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link to="./Task2" style={{ textDecoration: "none" }}>
                                <Button variant="contained">과제 : Level2</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Link to="./Task3" style={{ textDecoration: "none" }}>
                                <Button variant="contained">과제 : Level3</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default Home;