import React from 'react';
import { useQuery } from 'react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoCard from './VideoCard';

export default function RelatedVideos({ id }) {
    const { youtube } = useYoutubeApi();
    const { isLoading,
            error,
            data: videos, } = useQuery(['related', id], () => youtube.relatedVideos(id));
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😢</p>}
            {videos && (
                <ul>
                    {videos && videos.map((video) => (<VideoCard key={video.id} video={video} type='list' />
                    ))}
                </ul>
                )}
        </>
    );
}

