import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import NewsList from './newsList/newsList';
import {Button , makeStyles} from "@material-ui/core"
import './showNews.css';





const useStyles = makeStyles(() => ({
  showMore: {
      display: "inline-block",
      margin: "0 auto",
      color : "white",
      textAlign : "center"
  },
}))
export default function ShowNews() {
  const classes = useStyles();
  const [news, setNews] = useState([]);
  // useEffect(() => {
  //     axios({
  //         method: 'Get',
  //         url: `http://localhost:3500/news`
  //     })
  //         .then((res) => {
  //             setNews(res.data)
  //         })
  // })
  useEffect(() => {
    axios({
      method: 'Get',
      url: `https://jsonplaceholder.typicode.com/photos`,
    }).then((res) => {
      let data = res.data.splice(-4, 4)
      setNews(data);
    });
  });


  return (
    <>
      <div className='newsContainer'>
        {news.map((newsItem, index) => (
          <div className='newsCard'>
            {/* <img src={require(`../../../img/${newsItem.album}`)} alt={`News ${newsItem.title}`} className='newsImage' /> */}
            <img src={newsItem.thumbnailUrl} alt='' />
            <div className='newsDesc'>
              <p>{newsItem.title.slice(0, 30)} . . .</p>
              <p>{newsItem.id}</p>
              <Link to={`/news/:${newsItem.id}`} className='newsLink'>
                بیشتر
							</Link>
            </div>
          </div>
        ))}
      <Link to="./newsList" style={{display: "flex" , width : "100%"}}><Button variant="contained" color="secondary" className={classes.showMore}>show all</Button></Link>
      </div>
    </>
  );
}
