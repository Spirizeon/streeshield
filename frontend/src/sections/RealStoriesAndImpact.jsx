import React from 'react'
import SectionHeader from '../components/SectionHeader'
import GirSittingSad from "../assets/GirSittingSad.jpg";
import "../sectionsStyling/RealStoriesAndImpact.css";
import RealStorySubContent from "../components/RealStorySubContent";

const RealStoriesAndImpact = () => {
  return (
    <div className='RealStroiesAndImpact'>
      <SectionHeader title="Real Stories, Real Impact" subtitle="Priya's courage turns a personal trial into a powerful testimony."/>
      <div className='RealStoryImageAndContent'>
        <img src={GirSittingSad} alt="" />
        <div className='RealStoryTextContent'>
            <RealStorySubContent title="Background" subtitle="Meet Priya, a 21-year-old college student from a middle-class family, enthusiastic about her new life in the city and active on social media. Her vibrant personality and engaging content quickly gained her a modest following."/>
            <RealStorySubContent title="Challenge" subtitle="However, not long into her semester, Priya faced harsh ragging from a group of students whom she resisted and reported. In retaliation, these individuals used deepfake technology to create and circulate altered images that depicted Priya in compromising situations. These images spread rapidly across various social platforms, leading to immense psychological distress and public humiliation for Priya."/>
            <RealStorySubContent title="Impact" subtitle="The incident severely affected Priya's mental health, plunging her into depression and leaving her feeling isolated in her struggle. The situation escalated to the point where Priya, overwhelmed by despair, attempted suicide. Thankfully, her attempt was not successful, but it left her in a vulnerable state, requiring medical and psychological support."/>
            <RealStorySubContent title="Turning Point" subtitle='Determined to reclaim her life and reputation, Priya learned about "Stree Shield," a platform known for its sophisticated technology to detect and help manage deepfake content. With hope, she uploaded the images in question to the platform.'/>
            <RealStorySubContent title="Solution" subtitle='"Stree Shield" analyzed the images using advanced AI algorithms designed to identify deepfake signatures. The platform confirmed that the images were indeed fabrications. Armed with this information and a detailed report from "Stree Shield," Priya approached the police and was able to provide compelling evidence of the harassment.'/>
            <RealStorySubContent title="Outcome" subtitle="The perpetrators were identified and faced serious consequences under new digital misinformation laws. Priya received the justice she deserved, and her case brought awareness to the issue of digital abuse. Gradually, with support from her family, friends, and ongoing counseling, Priya began to recover her confidence. She became an advocate for victims of digital abuse, using her story to educate others about the dangers of deepfakes and the importance of digital vigilance."/>
            <div className='GirlInfo'>
                <p className='GirlWords'>"I felt powerless when those images appeared. But 'Stree Shield' gave me the tools to fight back and prove the truth. I am grateful for their help in restoring my dignity and helping me stand strong against digital abuse,"</p>
                <p className='GirlName'>
                    <li>Priya (UP)</li>
                </p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default RealStoriesAndImpact;