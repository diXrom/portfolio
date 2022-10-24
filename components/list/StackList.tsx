import { Stack, StackInfo } from '@/lib/config/stack';
import React, { useCallback } from 'react';

interface StackListProps {
  stack: Stack[];
}

function StackList(props: StackListProps): React.ReactElement {
  const { stack } = props;

  const renderList = useCallback(stack => {
    const { value, color } = StackInfo[stack];

    return (
      <span
        className='px-2 py-1 mb-2 mr-2 text-xs font-medium text-white rounded-sm'
        style={{ background: color }}
        key={stack}
      >
        {value}
      </span>
    );
  }, []);

  return (
    <div className='flex flex-wrap mb-4'>
      {React.Children.toArray(stack.map(renderList))}
    </div>
  );
}

export default StackList;
