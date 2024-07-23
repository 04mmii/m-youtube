import React from 'react'
import { gsapText } from '../../data/gsap'
import { Link } from 'react-router-dom'

const Gsap = () => {
  return (
    <section id='website'>
      <h2>😛 웹표준 사이트 만들기 기초 다지기</h2>
      <div className="video__inner">
        {gsapText.map((video, key)=> (
          <div className="video" key={key}>
            <div className="video__thumb play__icon">
              <Link to={`/video/${video.videoId}`}>
                <img src={video.img} alt={video.title}></img>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gsap