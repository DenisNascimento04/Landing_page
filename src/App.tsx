import React from 'react';
import { IoLogoInstagram, IoLogoTwitter, IoMdArrowRoundDown } from "react-icons/io";

import { Card, CenterLarning, Container, Content, ContentCard, DescTitulo, DivHeader, DivInitContet, Header, Linha, NumeroFundo, Social, Texto, Titulo, TituloLarning } from  './styles';
import HG from './assets/HG.png';
import MG from './assets/MG.png';
import VG from './assets/VG.png';
import Img1 from './assets/01.png';
import Img2 from './assets/02.png';
import Img3 from './assets/03.png';

function App() {
  return (
    <Container>
      <img src={HG} style={{  width: "100%", }} />
      <img src={MG} style={{ marginTop: -565, width: "100%", height: 1422 }} />
      <img src={VG} style={{ marginTop: -916, width: "100%", height: 926 }} />
      <DivInitContet   />
      <DivHeader>
        <Header>
          <p>MNTN</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: 40 }}>Equipament</p>
            <p style={{ marginRight: 40 }}>About us</p>
            <p>Blog</p>
          </div>
          <p>Account</p>
        </Header>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginLeft: 80, marginRight: 80 }}>
          <Social>
            <p>Follow us</p>
            <IoLogoInstagram size={20} color="#ffff" />
            <IoLogoTwitter size={20} color="#ffff" />
          </Social>

          <CenterLarning>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Linha />
              <DescTitulo style={{ color: "#FBD784" }}>A HIKING GUIDE</DescTitulo>
            </div>

            <TituloLarning>
              Be prepared for the Mountains and beyond!
            </TituloLarning>

            <div style={{ display: "flex", alignItems: "center" }}>
              <a href='#card1' style={{ fontSize: 18, textDecoration: 'none', color: "#FFFF" }}>scroll down</a>
              <IoMdArrowRoundDown size={18} color="#ffff" />
            </div>
          </CenterLarning>
          
          <div></div>
        </div>

      </DivHeader>
      <Content>
        <Card id='card1'>
          <NumeroFundo>
            <p>01</p>
          </NumeroFundo>
          <ContentCard style={{ marginRight: 114 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Linha />
              <DescTitulo style={{ color: "#FBD784" }}>GET STARTED</DescTitulo>
            </div>

            <Titulo>What level of  hiker are you?</Titulo>
            <Texto style={{ width: 632 }}>
              Determining what level of hiker you are can be an important tool when planning future hikes.
              This hiking level guide will help you plan hikes according to different hike ratings set by various websites like 
              All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? 
            </Texto>

            <div style={{ display: "flex", alignItems: "center" }}>
              <a href='#card2' style={{ fontSize: 18, textDecoration: 'none', color: "#FBD784", zIndex: 2 }}>read more</a>
              <IoMdArrowRoundDown size={18} color="#FBD784" />
            </div>
          </ContentCard>

          <img src={Img1} />
        </Card>

        <Card id='card2'>
          <img src={Img2} />
          <ContentCard style={{ marginLeft: 114 }}>
            <NumeroFundo>
              <p>02</p>
            </NumeroFundo>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Linha />
              <DescTitulo style={{ color: "#FBD784" }}>GET STARTED</DescTitulo>
            </div>

            <Titulo>What level of  hiker are you?</Titulo>
            <Texto style={{ width: 632 }}>
              Determining what level of hiker you are can be an important tool when planning future hikes.
              This hiking level guide will help you plan hikes according to different hike ratings set by various websites like 
              All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? 
            </Texto>

            <div style={{ display: "flex", alignItems: "center" }}>
              <a href='#card3' style={{ fontSize: 18, textDecoration: 'none', color: "#FBD784", zIndex: 2 }}>read more</a>
              <IoMdArrowRoundDown size={18} color="#FBD784" />
            </div>
          </ContentCard>
        </Card>

        <Card id='card3'>
          <NumeroFundo>
            <p>03</p>
          </NumeroFundo>
          <ContentCard style={{ marginRight: 114 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Linha />
              <DescTitulo style={{ color: "#FBD784" }}>WHERE YOU GO IS THE KEYS</DescTitulo>
            </div>

            <Titulo>Understand Your Map & Timing</Titulo>
            <Texto style={{ width: 632 }}>
              To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. 
              Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. 
              For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
            </Texto>

            <div style={{ display: "flex", alignItems: "center" }}>
              <a href='#card1' style={{ fontSize: 18, textDecoration: 'none', color: "#FBD784", zIndex: 2 }}>read more</a>
              <IoMdArrowRoundDown size={18} color="#FBD784" />
            </div>
          </ContentCard>

          <img src={Img3} />
        </Card>

        <div style={{ display: "flex", justifyContent: 'space-evenly', padding: 4 }}>
          <div style={{ display: 'flex', flexDirection: "column", marginRight: 700, justifyContent: "space-between", height: 272 }}>
            <div>
              <p>MNTN</p>
              <p style={{ width: 303 }}>Get out there & discover your next slope, mountain & destination!</p>
            </div>
            <p>Copyright 2019 MNTN, Inc. Terms & Privacy</p>
          </div>
          <div style={{ display: "flex", gap: 24}}>
            <div style={{ display: "flex", flexDirection: "column"  }}>
              <Titulo style={{ fontSize: 18, width: "auto", color: "#FBD784", lineHeight: 0, marginBottom: 12 }}>More on The Blog</Titulo>
              <p>About MNTN</p>
              <p>Contributors & Writers</p>
              <p>Write For Us</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column"  }}>
              <Titulo style={{ fontSize: 18, width: "auto", color: "#FBD784", lineHeight: 0, marginBottom: 12 }}>More on MNTN</Titulo>
              <p>The Team</p>
              <p>Jobs</p>
              <p>Press</p>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default App;
