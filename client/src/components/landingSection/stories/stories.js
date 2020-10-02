import React, { useState, useEffect } from 'react';
import Slider from 'infinite-react-carousel';
import axios from "axios"
import { Button } from '@material-ui/core';
import "./stories.css"
export default function ShowNews() {
    const [stories, setStory] = useState([]);

    useEffect(() => {
        axios({
            method: 'Get',
            url: `https://jsonplaceholder.typicode.com/comments`,
        }).then((res) => {
            let data = res.data.splice(-4, 4)
            setStory(data);
        });
    });
    const storiesList = stories.length ? (
        stories.map(story => {
            return (
                <div>
                    <img src="" alt="" />
                    <h5>{story.id}</h5>
                    <h3>{story.name}</h3>
                    <p className="storyText">{story.body}</p>
                    <Button variant="contained" color="secondary">more</Button>
                </div>
            )
        })
    ) : (
            <div className="center">Loading</div>
        );
    const settings = {
        arrows: false,
        autoplay: true,
        dots: true,
        swipe: true,
    };
    return (
        <div>
            <Slider {...settings} className="storySliderContainer">
                {
                    storiesList
                }
            </Slider>
        </div>
    );
}

