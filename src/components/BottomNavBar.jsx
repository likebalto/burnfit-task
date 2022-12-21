import React from "react";
import { useState } from "react";

// mui컴포넌트
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';


// 이미지
import mainImg from "../images/task1_main.jpg"
import calImg from "../images/task1_cal.jpg";
import libImg from "../images/task1_lib.jpg";
import mypageImg from "../images/task1_mypage.jpg";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function BottomNavBar() {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <>

            <Box maxWidth="sm" >
                <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} showLabels value={value}
                    onChange={handleChange}>
                    <BottomNavigationAction label="HOME" icon={<HomeRoundedIcon />} {...a11yProps(0)} />
                    <BottomNavigationAction label="CALENDAR" icon={<CalendarMonthRoundedIcon />} {...a11yProps(1)} />
                    <BottomNavigationAction label="LIBRARY" icon={<FitnessCenterRoundedIcon />}  {...a11yProps(2)} />
                    <BottomNavigationAction label="MY PAGE" icon={<AssignmentIndRoundedIcon />} {...a11yProps(3)} />
                </BottomNavigation>
            </Box>

            {/* 탭별 페이지 */}
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    direction="column">
                    <Grid item sx={{ mt: 5 }} xs={12}>
                        <p>메인</p>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={mainImg} alt="메인이미지" width="100%" />
                    </Grid>
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    direction="column">
                    <Grid item sx={{ mt: 5 }} xs={12}>
                        <p>캘린더</p>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={calImg} alt="캘린더이미지" width="100%" />
                    </Grid>
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={2} dir={theme.direction}>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    direction="column">
                    <Grid item sx={{ mt: 5 }} xs={12}>
                        <p>라이브러리</p>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={libImg} alt="라이브러리이미지" width="100%" />
                    </Grid>
                </Grid>
            </TabPanel>

            <TabPanel value={value} index={3} dir={theme.direction}>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    direction="column">
                    <Grid item sx={{ mt: 5 }} xs={12}>
                        <p>마이페이지</p>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={mypageImg} alt="마이페이지이미지" width="100%" />
                    </Grid>
                </Grid>
            </TabPanel>

        </>
    );
}

export default BottomNavBar;