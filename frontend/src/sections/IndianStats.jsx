import React from 'react'
import SectionHeader from '../components/SectionHeader';
import "../sectionsStyling/IndianStats.css";
import ChartImage from "../assets/ChartImage.svg";
import CountUp from '../components/CountUp';
import TimesNowImg from "../assets/TimesNowImg.png";
import IndianStatsScrollEachData from '../components/IndianStatsScrollEachData';
import AajTakImg from "../assets/AajTakImg.png";

import IndiaTodayImg from "../assets/IndiaTodayImg.png";
import TheHinduImg from "../assets/TheHinduImg.png";
import NDTVImg from "../assets/NDTVImg.png";
import TV9Img from "../assets/TV9Img.png";
import RepublicImg from "../assets/RepublicImg.png";

const IndianStats = () => {
  return (
    <div className='IndianStats'>
      <SectionHeader title="Indian Stats" subtitle="Our system uses smart technology to spot the fakes!" />
      <div className='IndianStatsTwoBoxAndScrollBox'>
        <div className='ChartAndCasesCount'>
          <div className='ChartOuter'>
            <img src={ChartImage} alt="" />
          </div>
          <div className='CasesCountOuter'>
            <div className='FIRButton'>
              <p className='FIRText'>FIR</p>
            </div>
            <p className='CountValue'>
              <CountUp
                from={0}
                to={4375}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </p>
            <p className='BelowCountText'>Cases are registering every year</p>
          </div>
        </div>
        <div className='IndianStatsScrollAllData'>
          <IndianStatsScrollEachData message="Youth is affecting with deepfake videos" messagePerson="-CBI Mumbai" TVChannelImage={TimesNowImg}/>
          <IndianStatsScrollEachData message="Deepfake drove Ghaziabad man to brink of suicide  " messagePerson="-CBI Mumbai" TVChannelImage={AajTakImg}/>
          <IndianStatsScrollEachData message="Government to bring Digital India Bill to check deepfake content" messagePerson="-IT Minister " TVChannelImage={IndiaTodayImg}/>
          <IndianStatsScrollEachData message="Most Indians have come across deepfake content online and worry about cyberbullying" messagePerson="-The Hindu Beauro" TVChannelImage={TheHinduImg}/>
          <IndianStatsScrollEachData message="Rajkummar Rao Demands ‘Strict Laws’ Against The Rise Of AI Deepfake Videos" messagePerson="-Republic Entertainment " TVChannelImage={RepublicImg}/>
          <IndianStatsScrollEachData message="Teen Died By Suicide After Bullies At School Shared Her Fake Nudes" messagePerson="-Delhi Crime Branch" TVChannelImage={NDTVImg}/>
          <IndianStatsScrollEachData message="Government's strict warning on Deepfake issue, it will tighten its grip on social media companies" messagePerson="-Investigative Team" TVChannelImage={TV9Img}/>
        </div>
      </div>
    </div>
  )
}

export default IndianStats
