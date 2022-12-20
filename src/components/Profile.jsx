import React from "react";

// mui 컴포넌트
import { Grid, Typography, Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

// 이미지
import profileImg from "../images/profileImg.jpg";


function Profile() {
    return (
        <>

            <Grid container spacing={1}
                direction="row"
                justifyContent="space-around"
                alignItems="center">

                {/* 프로필이미지 자리 */}
                <Grid item xs={12}>
                    <Tooltip title="안녕하세요! 2022구로청년이룸온라인채용박람회 면접참여자 임새롬입니다!" followCursor>
                        <Box >
                            <Avatar
                                alt="Remy Sharp"
                                src={profileImg}
                                sx={{ width: 300, height: 300, mt: 10 }}
                                variant="rounded" />

                        </Box>
                    </Tooltip>


                </Grid>
                {/* 프로필내용 자리 */}
                <Grid item xs={12}>
                    <Typography variant="h6">제출자 : 임새롬</Typography>
                    <Typography variant="h6">제출일 : 2022.12.21.수</Typography>
                </Grid>
            </Grid>
        </>

    )

}
export default Profile;