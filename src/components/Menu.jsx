import React from 'react'
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AntaresTube from "../img/youtube_log.png";



const Container = styled.div`
  flex: 1;
  background-color: #202020;
  height: 100vh;
  color: white;
  font-size: 14px;
  
`

const Wrapper = styled.div`
  padding: 18px 26px;
`

const Logo = styled.div`
 display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`

const Img = styled.img`
 height: 25px;
  
`

const Item = styled.div`
 display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  
  
`

const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={AntaresTube} />
                    AntaresTube
                </Logo>
                <Item>
                    <HomeIcon/>
                    Home
                </Item>
                <Item>
                    <ExploreIcon/>
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon/>
                    Subscriptions
                </Item>
                <Item>
                    <VideoLibraryIcon/>
                    Library
                </Item>
                <Item>
                    <HistoryIcon/>
                    History
                </Item>
                <Item>
                    <LibraryMusicIcon/>
                    Music
                </Item>
                <Item>
                    <SportsBasketballIcon/>
                    Sports
                </Item>
                <Item>
                    <SportsEsportsIcon/>
                    Gaming
                </Item>
                <Item>
                    <MovieCreationIcon/>
                    Movies
                </Item>
                <Item>
                    <ArticleIcon/>
                    News
                </Item>
                <Item>
                    <LiveTvIcon/>
                    Live
                </Item>
                <Item>
                    <SettingsIcon/>
                    Settings
                </Item>
                <Item>
                    <FlagIcon/>
                    Report
                </Item>
                <Item>
                    <HelpIcon/>
                    Help
                </Item>
                <Item>
                    <SettingsBrightnessIcon/>
                    Light Mode
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu
