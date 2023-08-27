import React from 'react'

const History = ({ operations }: { operations: string[] }) => {
  return (
    <div className='flex flex-col my-12 w-full gap-2'>
      <h2>History</h2>
      <div className="border p-2 w-full overflow-auto">
        <div className='h-[150px]'>
          {operations.map((entry, index) => (
            <div key={index}>
              {entry}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default History