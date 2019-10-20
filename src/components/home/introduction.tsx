import * as React from 'react'

interface People_Type {
  readonly name: {
    jp_name: string
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
    en_name: 'UesugiNohiro',
  },
  gender: '男性',
  age: 21,
  birthday: '1998年7月4日',
  address: '奈良県生駒市',
}

const Introduction = () => {
  return (
    <>
      <p>{People.name.jp_name}</p>
      <p>{People.name.en_name}</p>
      <p>性別: {People.gender}</p>
      <p>年齢: {People.age}</p>
      <p>生年月日: {People.birthday}</p>
      <p>住所: {People.address}</p>
      <p>message,message,message,message,message,message,message,message</p>
    </>
  )
}

export default Introduction
