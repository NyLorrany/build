import React from 'react';
export default function App (){
  return (
    <div>
      <Cabecalho/>
      <Texto/>
      <Cabecalho/>
    </div>

  )
}
export function   Cabecalho (){
  return (
    <div
    style={{
      backgroundColor: 'black',
      height:150
    }}> 
    </div>

  )
}
export function Texto (){
  return (
    <div
    style= {{
      paddingTop:200,
      paddinigBottom:200
      }}>
      <h1>Ny</h1>
    </div>

  )

}
