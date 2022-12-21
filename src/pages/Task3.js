// 컴포넌트
import AppBarToHome from '../components/AppBarToHome';

// mui컴포넌트
import Container from '@mui/material/Container';

// ToDo :
// - Level 3 : react-native-reanimated, react-native-gesture-handler 라이브러리를 이용
// - 제스처 이벤트가 발생하면 아래와 같이 캘린더의 형태가 월 캘린더에서 주 캘린더로, 주 캘린더에서 다시 월 캘린더로 변환 가능하도록 구현 하시오

function Task3() {
    return (
        <>
            <Container maxWidth="sm" >
                <AppBarToHome />


            </Container>

        </>
    );
}
export default Task3;