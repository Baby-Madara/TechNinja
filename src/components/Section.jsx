import React from 'react'

const Section = ({title, id, className, childClassName, children}) => {
    return (
        <section id={id} className={className}>
            <h1 className='title'>{title}</h1>
            <div className={childClassName}>
                {children}
            </div>
        </section>
    )
}

export default Section