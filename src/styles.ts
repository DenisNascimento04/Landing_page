import styled from 'styled-components';

export const Container = styled.div `
  background-color: #0B1D26;
  align-items: center;
  p{
    color: #FFFFFF;
  }
`
export const DivHeader = styled.div `
  position: absolute;
  width: 100%;
  height: 1200px;
  left: 0px;
  top: 0px;

  background: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%);
`
export const DivInitContet = styled.div `
  position: absolute;
  width: 100%;
  height: 1200px;
  left: 0px;
  top: 900px;

  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%);
`

export const Header = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 64px 80px;
  p{
    color: #FFFFFF;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
`
export const Linha = styled.div `
  background-color: #FBD784;
  width: 72px;
  height: 2px;
`
export const CenterLarning = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
`
export const TituloLarning = styled.p`
  margin: 0px;
  font-size: 88px;
  width: 950px;
  font-family: 'Playfair Display';
  font-weight: 700;
  /* padding: 0; */
`
export const Social = styled.div`
  display: flex;
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
`

export const Titulo = styled.p`
  width: 632px;
  /* background-color: red; */
  font-family: 'Playfair Display';
  font-weight: 700;
  font-style: normal;
  font-size: 64px;
  margin: 0px;
  line-height: 77px;
`

export const DescTitulo = styled.p`
  font-size: 18px; 
  margin-left: 12px;  
  letter-spacing: 6px;
`


export const Texto = styled.p`
  width: 632px;
  /* background-color: green; */
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
`

export const Content = styled.div`
  margin-top: -650px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%; */
  /* padding: 0 229px; */
  justify-content: center;
  /* background-color: red; */
  gap: 200px;
`

export const Card = styled.div`
  display: flex; 
  align-items: center; 
  z-index: 999;
`


export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`


export const NumeroFundo = styled.div`
  position: absolute;
  /* top: 0px; */
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 240px;
    line-height: 240px;
  
  
    color: #FFFFFF;
  
    opacity: 0.1;
  }
`
