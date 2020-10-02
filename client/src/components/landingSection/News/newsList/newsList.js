import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./newsList.css";
export default function NewsList(props) {
      const newsList = props.data.length ? (
        props.data.splice(-20 , 20).map(news => {
          return (
            <div className="newsCard">
              <img src={news.thumbnailUrl} alt="" />
              <div className="newsDesc">
                <p>{news.title}</p>
              </div>
              <Link to={`/news/${news.id}`} className='newsLink'>بیشتر</Link>
            </div>
          )
        })
      ) : (
        <div className="center">Loading</div>
    );
  return (
    <div className="container newsCardList">
      {newsList}
    </div>
  )
}
