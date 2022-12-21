// 컴포넌트
import AppBarToHome from '../components/AppBarToHome';


// mui컴포넌트
import Container from '@mui/material/Container';

// ToDO : 
// - Level 2 : 캘린더 탭에 외부 캘린더 라이브러리를 이용하지 않고 캘린더 컴포넌트를 제작하시오. 캘린더는 아래 이미지와 같은 형태로 월 캘린더로 구현하시오
//     - 기능 1 : 캘린더에 현재 월을 출력하고 오늘 날짜를 아래 이미지와 같이 구현 하시오.
//     - 기능 2 : 상단 좌우 화살표 버튼 클릭 시 전월, 익월을 캘린더에 출력 하시오.
//     - 기능 3 : 캘린더 상에 특정 날짜를 선택하면 해당 날짜에 원을 표시 하시오. 마지막으로 선택된 날짜만 표시해야 함.


function Task2() {
    return (
        <>
            <Container maxWidth="sm" >

                <AppBarToHome />

            </Container>

        </>
    );
}
export default Task2;