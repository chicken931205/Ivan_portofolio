import React from 'react';
import ProjectBox from './ProjectBox';
import JubileeImage from '../images/JubileeImage.png';
import PodcastImage from '../images/PodcastImage.png';
import SolarImage from '../images/SolarImage.png';
import BergeyImage from '../images/BergeyImage.png';
import HousewareImage from '../images/HousewareImage.png';
import LinkidoImage from '../images/LinkidoImage.png';
import TylerGrecoImage from '../images/TylerGreco.png';
import SergeDevImage from '../images/Sergedev.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={JubileeImage} projectName="Jubilee" />
        <ProjectBox projectPhoto={PodcastImage} projectName="Podcast" />
        <ProjectBox projectPhoto={SolarImage} projectName="Solar" />
        <ProjectBox projectPhoto={BergeyImage} projectName="Bergey" />
        <ProjectBox projectPhoto={HousewareImage} projectName="Houseware" />
        <ProjectBox projectPhoto={LinkidoImage} projectName="Linkido" />
        <ProjectBox projectPhoto={TylerGrecoImage} projectName="TylerGreco" />
        <ProjectBox projectPhoto={SergeDevImage} projectName="SergeDev" />
      </div>

    </div>
  )
}

export default Projects