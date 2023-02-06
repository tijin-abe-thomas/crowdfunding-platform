import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner

      <div className="projects-heading">
        <h2>Popular Projects</h2>
        <p>These are the most popular projects.</p>
      </div>

      <div className='projects-container'>
        {['Project 1','Project 2'].map((project) => project)}
      </div>

      Footer
    </>
  )
}

export default Home;