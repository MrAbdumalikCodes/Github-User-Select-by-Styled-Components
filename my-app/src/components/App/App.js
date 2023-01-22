import React, { Component } from 'react'
import { Container,Header,FollowInfo,Title,Location,Item,Text,Num,DarkMode,Repos,IBox,BioBox, Search,Input,Name,NicName,Age,Full, NoResult, BoxInfo, TitleBox, ForImage, Infos } from '../Test/Test.styled'
import '../App/App.css'
import moon from '../Image/moon.svg'
import search from "../Image/search.svg"
import octoCat from '../Image/Bitmap.png'
import loc from '../Image/003-pin.svg'
import twit from "../Image/004-twitter.svg"
import url from '../Image/002-url.svg'
import office from '../Image/001-office-building.svg'

export default class App extends Component {
  render() {
    return (
      <div className='Box'>
        <Container>
          <Header>
            <Title>devfinder</Title>
            <DarkMode>Dark <img src={moon} alt="moon" /></DarkMode>
          </Header>
          <IBox>
            <Search>
              <img src={search} alt="search" />
              <Input/>
              <NoResult>Search</NoResult>
            </Search>
          </IBox>
          <BoxInfo>
            <ForImage><img src={octoCat} alt="octoCat" /></ForImage>
            <Infos>
              <TitleBox>
                <Name>
                  <Full>The Octocat</Full>
                  <NicName>@octocat</NicName>
                </Name>
                <Age>Joined 25 Jan 2011</Age>
              </TitleBox>
              <BioBox>This profile has no bio</BioBox>
              <FollowInfo>
                <Repos>
                  <Text>Repos</Text>
                  <Num>8</Num>
                </Repos>
                <Repos>
                  <Text>Followers</Text>
                  <Num>3938</Num>
                </Repos>
                <Repos>
                  <Text>Following</Text>
                  <Num>9</Num>
                </Repos>
              </FollowInfo>
              <Location>
                <Item><img src={loc} alt="loc" /> San Francisco</Item>
                <Item><img src={twit} alt="loc" /> Not Available</Item>
                <Item><img src={url} alt="loc" /> https://github.blog</Item>
                <Item><img src={office} alt="loc" /> @github</Item>
              </Location>
            </Infos>
          </BoxInfo>
        </Container>
      </div>
    )
  }
}
