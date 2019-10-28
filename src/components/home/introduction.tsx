import * as React from 'react'
import styled from 'styled-components'

import AuterImg from '../../images/auther.jpg'

const IntroductionStyle = styled.div`
  padding: 60px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  color: #fff;
  background-position: center;
  background-image: url('https://www.pakutaso.com/shared/img/thumb/texture98A2437_TP_V.jpg');
`

const IntroductionImage = styled.div`
  height: 320px;
  width: 320px;
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 20px;
  border: thin solid #fff;
`

const RadiusImg = styled.img`
  margin: 40px 25% 5px;
  width: 140px;
  border-radius: 50%;
`

const IntroductionData = styled.div`
  width: 80%;
  font-size: 18px;
  justify-self: center;
  align-self: stretch;
  grid-column: span 2;
`

const IntroductionMessage = styled.p`
  padding-bottom: 10px;
  border-bottom: solid 1px #fff;
  letter-spacing: 0.1em;
  font-size: 20px;
  word-wrap: break-word;
`

const Name = styled.p`
  margin-top: 30px;
`

const IntroductionBasicInfo = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 30px 30px 30px 30px;
  grid-gap: 10px 0px;
`

interface People_Type {
  readonly name: {
    jp_name: string
    katakana_name: string
    en_name: string
  }
  readonly gender: '男性' | '女性'
  readonly age: number
  readonly birthday: string
  readonly address: string
}

const People: People_Type = {
  name: {
    jp_name: '上杉直大',
    katakana_name: 'ウエスギ ナオヒロ',
    en_name: 'UesugiNohiro',
  },
  gender: '男性',
  age: 21,
  birthday: '1998年7月4日',
  address: '奈良県生駒市',
}

const Introduction = () => {
  return (
    <IntroductionStyle>
      <IntroductionImage>
        <RadiusImg src={AuterImg} />
        <p>{People.name.en_name}</p>
      </IntroductionImage>
      <IntroductionData>
        <IntroductionMessage>
          message,message,message,message,message,message,message,message,message,message,message,message,message,message,mes
        </IntroductionMessage>
        <Name>
          {People.name.jp_name} : {People.name.katakana_name}
        </Name>
        <IntroductionBasicInfo>
          <p>
            <b>性別</b>
          </p>
          <p>{People.gender}</p>
          <p>
            <b>年齢</b>
          </p>
          <p>{People.age}</p>
          <p>
            <b>生年月日</b>
          </p>
          <p>{People.birthday}</p>
          <p>
            <b>住所</b>
          </p>
          <p>{People.address}</p>
        </IntroductionBasicInfo>
      </IntroductionData>
    </IntroductionStyle>
  )
}

export default Introduction
