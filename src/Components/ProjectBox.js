import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    JubileeDesc : "This site is based on Front End - React(redux, saga), Back End - NodeJS and Database - Firebase. " + 
                  "This is hosted using pm2 and ngnix on cPanel. Ngnix is used to proxy http request and pm2 is used to deploy React Web Project. " + 
                  "This has its own admin app built with Electron JS. The admin app is a multi platform application and works on Windosw and Mac OS. " + 
                  "The admin app is based on Front End - React, Back End - NodeJS and Database - Firebase.",
    JubileeGithub : "",
    JubileeWebsite : "https://directory.jubileeocs.com/",

    PodcastDesc : "Built a custom theme based on Ultimate Member and Restrict Content Pro plugins. " + 
                  "Integrated payment using Stripe and Gravity Forms Stripe Add-On plugin. " + 
                  "Implemented tagging for users using Ultimate Member - User Tags plugin.",
    PodcastGithub : "",
    PodcastWebsite : "https://podcastguests.com/",

    SolarDesc:"This site is based on Shopify. I built lots of pages that has a solar calculator using HTML, CSS, JavaScript and jQuery.",
    SolarGithub:"",
    SolarWebsite:"https://shopsolarkits.com/",
    
    BergeyDesc:"This is a multi site based on WordPress. I built lots of new plugins and customized a woocommerce plugin. " + 
                "Customized lots of pages such as product list , product edit, single produt, checkout, cart and so on in the woocommerce. " + 
                "Built a new plugin that implemented algolia search for inventory search using third party library. " + 
                "Built a new plugin that report analytics of algolia search. " + 
                "Built a new plugin for abandoned cart. " + 
                "Additionally built some more new plugins. " + 
                "I integrated WordPress with Yii Framework. Yii is used to import product data by integrating APIs such as Truck Paper and Kamark",
    BergeyGithub:"",
    BergeyWebsite:"https://www.bergeystruckcenters.com/",

    HousewareDesc:"This site is based on WordPress. I added a toggle button for switching currency between USD and CAD on product edit page using ACF plugin. " + 
                  "Then I customized single product page and checkout page on woocommerce plugin.",
    HousewareGithub:"",
    HousewareWebsite:"https://thehomebudget.ca/",

    LinkidoDesc:"This site is based on WordPress, domain for this site is given on namecheap and is hosted on cPanel. I established a ssh access on the cPanel. " + 
                "Then I built a new plugin by customizing a TutorLMS plugin. In the backend I disabled a original salary method for a teacher on TutorLMS plugin and " +
                "added a new salary method as per client`s requirement. In addition to this I customized dashboard and profile pages in the frontend.",
    LinkidoGithub:"",
    LinkidoWebsite:"https://linkido.com/",

    TylerGrecoDesc:"This site is based on SquareSpace. " + 
                    "I built a new page for Trailers menu with Grid Layout and Video Popup using JavaScript ,CSS and jQuery.",
    TylerGrecoGithub:"",
    TylerGrecoWebsite:"https://www.tylergreco.com/",

    SergeDevDesc:"This site is based on WordPress. " + 
                    "I built some templates for custom post type by customizing serge theme.",
    SergeDevGithub:"",
    SergeDevWebsite:"https://sergedev.wpengine.com/",  
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Live Site</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox