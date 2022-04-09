import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import leaf from '../../Assets/Projects/leaf.png';
import emotion from '../../Assets/Projects/emotion.jpeg';
import tribeNFT from '../../Assets/Projects/proj3.png';
import intellistocks from '../../Assets/Projects/proj1.png';
import suicide from '../../Assets/Projects/suicide.png';
import coinalgo from '../../Assets/Projects/proj2.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={intellistocks}
              isBlog={false}
              title='intellistocks.ai'
              description='Intellistocks.ai is the product of Big Byte Insights Ltd, which aims to help investors understand what is being discussed on social media. We take large amounts of textual data on social media sites, identify stocks that are being discussed, and use Natural Language Processing, a subfield of artificial intelligence, linguistics and computer science, to determine the sentiment of the discussion. We apply a similar approach to analyzing the “Management Discussion and Analysis” section in 10-Q/K filings and “Prepared Remarks” section in the quarterly earnings conference calls.We use cutting edge technologies to show insights on web for example React Js for Front-End and Pythn Django for backend api`s. '
              link='https://intellistocks.ai/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={coinalgo}
              isBlog={false}
              title='coinalgo.com'
              description='coinalgo.com provides the NFT collections insights at single place about top gainers and top loosers on the basis of data gets from opensea and differnet other NFT Collections sites.It also helps the crypto inverstors that which coins are trending and also provide historical graphical representation of coins insights to help them take a right decision at right time.If you are a crypto enthisist and want to invest in crypto and unable to make a right decision coinalgo is there to help you.The process includes scrape data from open sea and other platforms about crypto and NFT`s and apply analysis using machine learning and deeep learning Modals and show these insights on  web using modern UI framework React Js'
              link='https://coinalgo.com/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={tribeNFT}
              isBlog={false}
              title='Tribe NFT'
              description='TribeNFT is a service for managing real-life meetups for owners of assets within same NFT
collection. Our first feature makes proving ownership easy. Simply create an event for the NFT
collection to begin accepting tickets for it. Once the event is created, owners of NFTs (“assets”)
in the collection can display a QR Code “pass” on their phone to prove ownership. At the event,
asset owners can simply scan in with their tickets.
Users can Host an Event for any of the NFT collection they own an asset in. Hosting an Event
costs 1 credit. Credits can be purchased for ETH on the site’s payment page. Once created,
hosts can scan passes presented by attendees.NFT holders can view Events for collections they own assets in'
              link='https://github.com/tribeNFT'
            />
          </Col>

          {/* <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title='Plant AI'
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link='https://github.com/soumyajit4419/Plant_AI'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title='Ai For Social Good'
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link='https://github.com/soumyajit4419/AI_For_Social_Good'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title='Face Recognition and Emotion Detection'
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link='https://github.com/soumyajit4419/Face_And_Emotion_Detection'
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
