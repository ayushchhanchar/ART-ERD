
import React from 'react';
import ERDiagram from './ERDiagram';
import './index.css'


function App() {
  return (
    <div className=" overflow-x-scroll no-scrollbar" >
      <div className='flex px-4 py-2  justify-between items-center'>
        <h1>Entity Relationship Diagram</h1>
       <div className='flex items-center justify-center gap-6'>
          {/* <Form />
          <EdgeForm/> */}
       </div>
      </div>
      <ERDiagram  />
    </div>
    //   <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  );
}

export default App;
