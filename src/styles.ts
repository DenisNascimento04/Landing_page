import styled from 'styled-components';

export const Container = styled.div `
  background-color: #0B1D26;
  align-items: center;
  position: relative;
  /* padding: 0 20rem; */
  p{
    color: #FFFFFF;
  }
  .backs{
    position: absolute;
    img{
      z-index: 1;
      object-fit: cover;
      width: 100%;
    }
    .gradiente{
      position: absolute;
      background: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%);
      z-index: 2;
      width: 100%;
      height: 100%;
    }
  }
`
export const Header = styled.header`
  position: absolute;
  width: 100%;
  /* height: 1200px; */
  left: 0px;
  top: 0px;
  z-index: 10;
  /* background: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%); */
  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 32px 8rem;
    p{
      color: #FFFFFF;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    }
  }
`
export const DivInitContet = styled.div `
  position: absolute;
  width: 100%;
  height: 1200px;
  left: 0px;
  top: 900px;

  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%);
`
export const Linha = styled.div `
  background-color: #FBD784;
  width: 72px;
  height: 2px;
`

export const DescTitulo = styled.p`
  font-size: 18px; 
  margin-left: 12px;  
  letter-spacing: 6px;
`

export const Content = styled.div`
  /* margin-top: -650px; */
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  /* padding: 0 229px; */
  padding-top: 24rem;
  justify-content: center;
  z-index: 3;
  /* background-color: red; */
  gap: 200px;
  .larning{
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    width: 100%;
    margin: 0 8rem;
    margin-bottom: 48rem;
    position: relative;
    .social{
      display: flex;
      position: absolute;
      left: 8rem;
      flex-direction: column;
      align-items: center;
      padding: 0px;
      margin-left: -24px;
      gap: 24px;
      /* background-color: red; */
      p{
        color: #FFFFFF;
        transform: rotate(-90deg);
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
      }
    }
    .center{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      gap: 24px;
      h2{
        margin: 0px;
        font-size: 8.8rem;
        width: 1000px;
        font-family: 'Playfair Display';
        font-weight: 700;
        color: #f2f2f2;
      }
    }
  }
  @media screen and (max-width: 1440px){
    .larning{
      .center{
        h2{
          font-size: 6.4rem;
          width: 700px;
        }
      }
    }
  }
`

export const Card = styled.div`
  display: flex; 
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  /* background-color: red; */
  width: 1200px;
  height: 700px;
  gap: 6rem;
  /* width: 100%; */
  &.right{
  }
  img{
    width: 500px;
    height: 100%;
    object-fit: cover;
  }
  .numBack{
    position: absolute;
    /* top: 0px; */
    &.right{
      left: 47%;
    }
    p{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 240px;
      line-height: 240px;
      color: #FFFFFF;
      opacity: 0.1;
    }
  }
  .contentCard{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
    h3{
      width: 100%;
      /* background-color: red; */
      font-family: 'Playfair Display';
      font-weight: 700;
      font-style: normal;
      font-size: 6.4rem;
      margin: 0px;
      line-height: 77px;
      color: #f2f2f2;
    }
    p{
      width: 100%;
      /* background-color: green; */
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 32px;
    }
  }
  @media screen and (max-width: 1440px){
    height: 600px;
    .contentCard{
      h3{
        font-size: 4.8rem;
      }
      p{
        font-size: 1.6rem;
      }
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  /* background-color: green; */
  width: 100%;
  margin-top: 10rem;
  .desc{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: red; */
    p{
      font-size: 1.4rem;
    }
  }
  .contatos{
    display: flex;
    gap: 3.2rem;
    p{
      font-size: 1.6rem;
    }
  }
`
