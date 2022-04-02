import React from 'react'
import '../styles/BulkAction.scss'
export default function BulkAction() {
  return (
    <div className='bulkAction'>
        <p>Bulk Action</p>
        <div className='event'>
            <button className='btn_detail'>Done</button>
            <button className='btn_remove'>Remove</button>
        </div>
    </div>
  )
}
