import React from 'react';

//Component
import Fechared from '../Fechared/Fechared'
import Charts from '../Charts/Charts';
import WidgetSmall from '../Widget/WidgetSmall';
import WidgetLarge from '../Widget/WidgetLarge';

function Home() {
  return (
    <div className='border-[3px] w-[500px] mx-auto sm:w-[1320px]'>
        <Fechared/>
        <Charts/>
        <div className='flex flex-col sm:flex-col-reverse'>
          <WidgetSmall/>
          {/* <WidgetLarge/> */}
        </div>
    </div>
  )
}

export default Home