import React, { useState, memo } from 'react';
import { Handle, Position,NodeResizer } from '@xyflow/react';

export default memo(({ data, isConnectable,selected }) => {
const [showFullText, setShowFullText] = useState(false);
const dummyText = 'This is some dummy text that will be displayed in the card. It is quite long to illustrate the "Show More" functionality.';
const displayedText = showFullText ? dummyText : dummyText.slice(0, 50) + '...';
  return (
    <div>
    <NodeResizer minWidth={100}  minHeight={30} isVisible={selected} />
    <Handle 
     type="target"
     id='b'
     position={Position.Left}
     onConnect={(params) => console.log('handle onConnect', params)}
     isConnectable={isConnectable}
    />
    <Handle 
     type="source"
     id='e'
     position={Position.Left}
     onConnect={(params) => console.log('handle onConnect', params)}
     isConnectable={isConnectable}
    />

         <div className="relative">
        <p className="text-gray-800 dark:text-gray-200">{displayedText}</p>
        <button
          className="text-blue-500 dark:text-blue-300 underline mt-2"
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? 'Show Less' : 'Show More'}
        </button>
      </div>

      <Handle
        type="target"
        position={Position.Right}
        id='c'
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id='d'
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Top}
        id="f"
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Bottom}
        id="g"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="h"
        isConnectable={isConnectable}
      />
      </div>
  )

}
)
