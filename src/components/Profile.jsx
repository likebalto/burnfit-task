import React from "react";

// mui 컴포넌트
import { Grid, Typography, Box } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

// 이미지
import profileImg from "../images/profileImg.jpg";


function Profile() {
    return (
        <>
            <Box sx={{ width: '100%' }}>

                <Grid container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center">

                    {/* 프로필이미지 자리 */}
                    <Grid item xs={12} sx={{ mt: 10 }}>
                        <Tooltip title="안녕하세요! 2022구로청년이룸온라인채용박람회 면접참여자 임새롬입니다!" followCursor>
                            <img src={profileImg} alt="프로필이미지" width="320px" />
                        </Tooltip>
                    </Grid>

                    {/* 프로필내용 자리 */}
                    <Grid item xs={12}>
                        <Typography variant="h6">제출자 : 임새롬</Typography>
                        <Typography variant="h6">제출일 : 2022.12.21.수</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>

    )

}
export default Profile;