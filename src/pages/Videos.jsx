import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
    const { keyword } = useParams();
    const { youtube } = useYoutubeApi();
    const { 
        isLoading, 
        error, 
        data: videos, 
    } = useQuery(
        ['videos', keyword], () =>  youtube.search(keyword));
    return (
        <>
            <div>Videos {keyword ? `🔍${keyword}` : `🔥`}</div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😢</p>}
            {videos && 
                <ul>
                    {videos && videos.map((video) => <VideoCard key={video.id} video={video}/>)}
                </ul>}
        </>
    );
}

