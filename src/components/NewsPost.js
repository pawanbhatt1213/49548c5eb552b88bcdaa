import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import InfiniteScrollComponent from './common/InfiniteScrollComponent';

export default function NewsPost() {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0`);
        const data = await res.json();
        setPosts(data.hits)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <Container className="mt-5">
            {posts.length>0 &&
                <InfiniteScrollComponent items={posts} />
            }
        </Container>
    )
}
