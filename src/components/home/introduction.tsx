import * as React from 'react'
import styled from 'styled-components'

import AuterImg from '../../images/auther.jpg'

const IntroductionStyle = styled.div`
  height: 450px;
  color: #fff;
  background-position: center;
  background-image: url('https://www.pakutaso.com/shared/img/thumb/MIYADSC_3425-3_TP_V.jpg');
`

const CenterDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`
const TextField = styled.div`
  height: 300px;
`

const IntroductionImage = styled(TextField)`
  width: 300px;
  border: thin solid #fff;
  margin: 75px auto 75px;
`

const RadiusImg = styled.img`
  padding: 30px 80px 10px;
  width: 140px;
  border-radius: 50%;
`

const BoldCenter = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`

const IntroductionData = styled(TextField)`
  width: 900px;
  margin: 75px 0px 75px;
`

const IntroductionMessage = styled.p`
  word-wrap: break-word;
`

const IntroductionBasicInfo = styled.div`
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

console.log(People.name.katakana_name)
console.log(People[key].katakana_name)


const Introduction = () => {
  return (
    <IntroductionStyle>
      <CenterDiv>
        <IntroductionImage>
          <RadiusImg src={AuterImg} />
          <BoldCenter>{People.name.en_name}</BoldCenter>
        </IntroductionImage>
        <IntroductionData>
          <IntroductionMessage>
            message,message,message,message,message,message,message,messagemessage,message,message,message,message,messagemessage,message,message,message,
            message,messagemessage,message,message,message,message,message
          </IntroductionMessage>
          <IntroductionBasicInfo>
            <p>{People.name.jp_name}:{People.name.katakana_name}</p>
            <p><b>性別</b> {People.gender}</p>
            <p><b>年齢</b> {People.age}</p>
            <p><b>生年月日</b> {People.birthday}</p>
            <p><b>住所</b> {People.address}</p>
          </IntroductionBasicInfo>
        </IntroductionData>
      </CenterDiv>
    </IntroductionStyle>
  )
}

export default Introduction
