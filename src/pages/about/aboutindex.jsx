import React from 'react'
import Section2 from './section2';
import Section1 from './section1';
import Section3 from './section3';
function AboutIndex() {
  return <div>
      <Section1/>
      <hr />
      <div className=' h-auto rounded-2xl translate-y'>
        <Section2/>
      </div>
      <hr />
      <Section3/>
  </div>
}

export default AboutIndex;
