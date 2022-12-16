import React from 'react'
import BreadCrum from '../breadcrum/BreadCrum'

const Comments = () => {
  return (
    <>
    <section className='aw_comments'>
        <div className='container-fluid'>
            <div className='row aw_'>
                <BreadCrum
                pageName="Comments"
                currentPage="Comments"
                />
            </div>
        </div>
    </section>
    </>
  )
}

export default Comments