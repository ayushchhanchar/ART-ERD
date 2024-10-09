import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { AiOutlineDown } from 'react-icons/ai';
import { FiTable } from "react-icons/fi";

const CustomNode = ({ data, id }) => {
  return (
    <div className=" border  border-blue-300 rounded bg-[#0F172A] shadow-md">
      <div className="flex justify-between gap-4 bg-[#8EB7FF] p-2  px-20 font-bold items-center">
        <h3 className='flex items-center text-white gap-1 justify-center text-[3vh]'>
          <FiTable />
          {data.label}
        </h3>
        <Handle type="source" id={`${id}`} position={Position.Bottom} className='bg-[#8EB7FF] hover:scale-[2.8] transition-transform duration-200' />
        <Handle type="target" id={`${id}`} position={Position.Top} className='bg-[#8EB7FF] hover:scale-[2.8] transition-transform duration-200' />
      </div>

      {data.components.map((component, index) => (
          <li key={index} style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', padding: '5px' }}>
            <div className='text-white p-1'>
              {component.name}
            </div>
            {/* Target handle on the left of each component */}
            <Handle
              type="target"
              id={`${id}-${component.id}-target`}
              position={Position.Left}
              className='bg-gray-300 hover:scale-[2.8] transition-transform duration-200'
              style={{ top: '50%', }}
            />
            {/* Source handle on the right of each component */}
            <Handle
              type="source"
              id={`${id}-${component.id}-source`}
              position={Position.Right}
              className='bg-gray-300 hover:scale-[2.8] transition-transform duration-200'
              style={{ top: '50%', }}
              
            />
          </li>
        ))}
    </div>
  );
};

export default CustomNode;