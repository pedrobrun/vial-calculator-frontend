import React from 'react'

const History = ({ operations }: { operations: string[] }) => {
  return (
    <div className='flex flex-col my-12 w-full gap-2'>
      <h2>History</h2>
      <div className="border rounded-sm p-2 w-full overflow-auto">
        <div className='h-[150px] w-[290px] overflow-auto whitespace-nowrap'>
          {operations.map((entry, index) => (
            <div className='h-[24px]' key={index}>
              <span className='opacity-30'>•</span> {entry}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default History