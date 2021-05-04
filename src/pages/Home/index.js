import React, { useEffect } from 'react';
import axios from 'axios';
import "./styles.css";
import {BiSearchAlt2} from 'react-icons/bi';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
function Home(){
  const Data = new Date()

  async function getData(){
    const response = await fetch('https://aps05-ecrawler.herokuapp.com/noticias',{
      method: "GET",
      mode: 'no-cors',
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
    console.log(response)

  }
  useEffect(()=>{
    getData();
  },[])

  return(
    <div className="home">
      <div className="headerHome">
        <div className="headerIndex">
          <div className="logoContainer">
            <div className="logoHeader">

            </div>

          </div>
          <div className="searchContainer">
            <input type="text" placeholder="Pesquise aqui" className="inputText"/>
            <BiSearchAlt2 size={35} color="#FFF"/>

          </div>

        </div>
        <div className="headerLegend">
          <div className="titlePage">
            <h1 className="legendText">Últimas notícias</h1>
            {/* <p style={{color:"#BEBABA"}}>Atualizado dia {Data.getDate()}</p> */}


          </div>
          <div style={{display: "flex"}}>
            <AiOutlineArrowLeft style={{marginRight: 20,}} size={35} color="#FFF"/>
            <div style={{marginRight: 20, borderLeft: 'solid', borderColor: "gray", borderWidth: 0.1}}/>
            <AiOutlineArrowRight style={{marginRight: 25}}  size={35} color="#FFF"/>

          </div>

        </div> 
      </div>


      <div className="containerInformation">
        <div className="containerContent">
          <div className="contentIndex">

          <a style={{width: "100%", height: "100%"}}>
            <div className="contentTitleContainer">
              <h1 className="titleIndex">Title</h1>
              <p className="textLegend">Textoooooo</p>
            </div>
            <img className="ImgIndex" src="https://media4.picsearch.com/is?OH-8eQP9LFUq8nNlRIShU7hA6aGZWNZFeStjhbe17QM&height=227"/>
          </a>
          </div>


          <div className="contentSecundary">

            <div className="contentItem1">
            <a style={{width: "100%", height: "100%"}}>
            <div className="contentTitleItem">
              <h1 className="titleItem">Title</h1>
              <p className="textLegend">Textoooooo</p>
            </div>
            <img className="ImgIndex" src="https://media4.picsearch.com/is?OH-8eQP9LFUq8nNlRIShU7hA6aGZWNZFeStjhbe17QM&height=227"/>
          </a>
            </div>


            <div className="contentItem">
            <a style={{width: "100%", height: "100%"}}>
            <div className="contentTitleItem">
              <h1 className="titleItem">Title</h1>
              <p className="textLegend">Textoooooo</p>
            </div>
            <img className="ImgIndex" src="https://media4.picsearch.com/is?OH-8eQP9LFUq8nNlRIShU7hA6aGZWNZFeStjhbe17QM&height=227"/>
          </a>
            </div>

            <div className="contentItem">
            <a style={{width: "100%", height: "100%"}}>
            <div className="contentTitleItem">
              <h1 className="titleItem">Title</h1>
              <p className="textLegend">Textoooooo</p>
            </div>
            <img className="ImgIndex" src="https://media4.picsearch.com/is?OH-8eQP9LFUq8nNlRIShU7hA6aGZWNZFeStjhbe17QM&height=227"/>
          </a>
            </div>


          </div>

        </div>
        
      </div>


      <div className="footerHome">


      </div>


    </div>
  )
}

export default Home;