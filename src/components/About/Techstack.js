import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiStreamline,
  DiAws,
  DiMongodb
} from 'react-icons/di';

import { SiNextdotjs, SiStorybook } from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
        <h4 className='purple'>Javascript</h4>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
        <h4 className='purple'>React Js</h4>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
        <h4 className='purple'>Node Js</h4>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextdotjs />
        <h4 className='purple'>Next Js</h4>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <CgCPlusPlus />
      </Col>
      
      <Col xs={4} md={2} className='tech-icons'>
        <SiStorybook />
        <h4 className='purple'>React Storybook</h4>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
        <h4 className='purple'>Mongoose DB</h4>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiAws />
        <h4 className='purple'>Aws Cloud Practitioner</h4>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
        <h4 className='purple'>Github</h4>
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiPython />
        <h4 className='purple'>Python</h4>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiStreamline />
        <h4 className='purple'>MySQL</h4>
      </Col>
    </Row>
  );
}

export default Techstack;
