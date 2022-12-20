// 컴포넌트
import BottomNavBar from "../components/BottomNavBar";
import AppBarToHome from '../components/AppBarToHome';

// mui컴포넌트
import Container from '@mui/material/Container';

function Task1() {
    return (
        <>
            <Container maxWidth="sm" >
                <AppBarToHome />
                <BottomNavBar />

            </Container>

        </>
    );
}
export default Task1;