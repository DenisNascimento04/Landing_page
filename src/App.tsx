import React from 'react';
import { IoLogoInstagram, IoLogoTwitter, IoMdArrowRoundDown } from "react-icons/io";

import { Card, Container, Content, DescTitulo, DivInitContet, Footer, Header, Linha } from  './styles';
import HG from './assets/HG.png';
import MG from './assets/MG.png';
import VG from './assets/VG.png';
import Img1 from './assets/01.png';
import Img2 from './assets/02.png';
import Img3 from './assets/03.png';

function App() {
  return (
    <Container>
      <div className="backs">
        <div className='gradiente'/>
        <img src={HG} alt='img-backs-1' />
        <img src={MG} style={{ marginTop: -565, height: 1422 }} alt='img-backs-2' />
        <img src={VG} style={{ marginTop: -916, height: 926 }} alt='img-backs-3' />
      </div>
      <DivInitContet />

      <Header>
        <nav>
          <p>MNTN</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: 40 }}>Equipament</p>
            <p style={{ marginRight: 40 }}>About us</p>
            <p>Blog</p>
          </div>
          <p>Account</p>
        </nav>
      </Header>

      <Content> 
        <div className='larning'>
          <div className='social'>
            <p>Follow us</p>
            <IoLogoInstagram size={20} color="#ffff" />
            <IoLogoTwitter size={20} color="#ffff" />
          </div>

          <div className='center'>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Linha />
              <DescTitulo style={{ color: "#FBD784" }}>A HIKING GUIDE</DescTitulo>
            </div>

            <h2>
              Be prepared for the Mountains and beyond!
            </h2>

            <div style={{ display: "flex", alignItems: "center" }}>
              <a href='#card1' style={{ fontSize: 18, textDecoration: 'none', color: "#FFFF" }}>scroll down</a>
              <IoMdArrowRoundDown size={18} color="#ffff" />
            </div>
          </div>
        </div>

        <Card id='card1'>
          <div className='numBack'>
            <p>01</p>
          </div>
          <div className='contentCard'>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Linha />
              <DescTitulo style={{ color: "#FBD784" }}>GET STARTED</DescTitulo>
            </div>

            <h3>What level of  hiker are you?</h3>
            <p style={{ width: 632 }}>
              Determining what level of hiker you are can be an important tool when planning future hikes.
              This hiking level guide will help you plan hikes according to different hike ratings set by various websites like 
              All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? 
            </p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <a href='#card2' style={{ fontSize: 18, textDecoration: 'none', color: "#FBD784", zIndex: 2 }}>read more</a>
              <IoMdArrowRoundDown size={18} color="#FBD784" />
            </div>
          </div>

          <img src={Img1} alt='img-card-1' />
        </Card>

        <Card id='card2' className='right'>
          <img src={Img2} alt='img-card-2'/>
          <div className='numBack right'>
            <p>02</p>
          </div>
          <div className='contentCard'>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Linha />
              <DescTitulo style={{ color: "#FBD784" }}>GET STARTED</DescTitulo>
            </div>

            <h3>What level of  hiker are you?</h3>
            <p style={{ width: 632 }}>
              Determining what level of hiker you are can be an important tool when planning future hikes.
              This hiking level guide will help you plan hikes according to different hike ratings set by various websites like 
              All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? 
            </p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <a href='#card3' style={{ fontSize: 18, textDecoration: 'none', color: "#FBD784", zIndex: 2 }}>read more</a>
              <IoMdArrowRoundDown size={18} color="#FBD784" />
            </div>
          </div>
        </Card>

        <Card id='card3'>
          <div className='numBack'>
            <p>03</p>
          </div>
          <div className='contentCard'>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Linha />
              <DescTitulo style={{ color: "#FBD784" }}>WHERE YOU GO IS THE KEYS</DescTitulo>
            </div>

            <h3>Understand Your Map & Timing</h3>
            <p style={{ width: 632 }}>
              To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. 
              Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. 
              For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
            </p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <a href='#card1' style={{ fontSize: 18, textDecoration: 'none', color: "#FBD784", zIndex: 2 }}>read more</a>
              <IoMdArrowRoundDown size={18} color="#FBD784" />
            </div>
          </div>

          <img src={Img3} alt='img-card-3' />
        </Card>

        <Footer >
          <div className='desc' 
          // style={{ marginRight: 700, height: 272 }}
          >
            <div>
              <p>MNTN</p>
              <p style={{ width: 303 }}>Get out there & discover your next slope, mountain & destination!</p>
            </div>
            <p>Copyright 2019 MNTN, Inc. Terms & Privacy</p>
          </div>

          <div className='contatos'>
            <div style={{ display: "flex", flexDirection: "column"  }}>
              <h3 style={{ fontSize: 18, width: "auto", color: "#FBD784", lineHeight: 0, marginBottom: 12 }}>More on The Blog</h3>
              <p>About MNTN</p>
              <p>Contributors & Writers</p>
              <p>Write For Us</p>
              <p>Contact Us</p>
              <p>Privacy Policy</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column"  }}>
              <h3 style={{ fontSize: 18, width: "auto", color: "#FBD784", lineHeight: 0, marginBottom: 12 }}>More on MNTN</h3>
              <p>The Team</p>
              <p>Jobs</p>
              <p>Press</p>
            </div>
          </div>
        </Footer>
      </Content>
    </Container>
  );
}

export default App;
