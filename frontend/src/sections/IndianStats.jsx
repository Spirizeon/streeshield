import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import autoScroll from 'embla-carousel-auto-scroll';
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
  const [speed, setSpeed] = useState(window.innerWidth <= 560 ? 2 : 3);
  
  const options = { speed, delay: 0, stopOnInteraction: false };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [autoScroll(options)]
  );

  useEffect(() => {
    const handleResize = () => {
      const newSpeed = window.innerWidth <= 560 ? 2 : 3;
      setSpeed(newSpeed);
      if (emblaApi) {
        emblaApi.reInit();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [emblaApi]);

  return (
    <div className='IndianStats'>
      <SectionHeader title="Indian Stats" subtitle="Our system uses smart technology to spot the fakes!" />
      <div className='IndianStatsTwoBoxAndScrollBox'>
        <div className='ChartAndCasesCount'>
          <div className='ChartOuter'>
            <img className='ChartImage' src={ChartImage} alt="" />
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
            <p className='BelowCountText'><span>Cases are registering</span> <span>every year</span></p>
          </div>
        </div>
        <div className='IndianStatsScrollAllData' ref={emblaRef}>
          <div className='embla__container'>
            <IndianStatsScrollEachData message="Youth is affecting with deepfake videos" messagePerson="-CBI Mumbai" TVChannelImage={TimesNowImg} className="TimesNowDiv"/>
            <IndianStatsScrollEachData message="Deepfake drove Ghaziabad man to brink of suicide" messagePerson="-CBI Mumbai" TVChannelImage={AajTakImg} />
            <IndianStatsScrollEachData message="Government to bring Digital India Bill to check deepfake content" messagePerson="-IT Minister" TVChannelImage={IndiaTodayImg} />
            <IndianStatsScrollEachData message="Most Indians have come across deepfake content online and worry about cyberbullying" messagePerson="-The Hindu Bureau" TVChannelImage={TheHinduImg} />
            <IndianStatsScrollEachData message="Rajkummar Rao Demands ‘Strict Laws’ Against The Rise Of AI Deepfake Videos" messagePerson="-Republic Entertainment" TVChannelImage={RepublicImg} />
            <IndianStatsScrollEachData message="Teen Died By Suicide After Bullies At School Shared Her Fake Nudes" messagePerson="-Delhi Crime Branch" TVChannelImage={NDTVImg} />
            <IndianStatsScrollEachData message="Government's strict warning on Deepfake issue, it will tighten its grip on social media companies" messagePerson="-Investigative Team" TVChannelImage={TV9Img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndianStats;
