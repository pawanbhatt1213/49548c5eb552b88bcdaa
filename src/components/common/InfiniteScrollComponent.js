import React, {useState, useEffect} from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import NewsCard from '../NewsCard';

export default function InfiniteScrollComponent(propItems = []) {

    const [items, setItems] = useState(propItems.items)
    const [count, setCount] = useState(1)


    useEffect(() => {
        setCount(count+1);        
    }, [items])


    const getPosts = async () => {
        const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count}`);
        const data = await res.json();
        setItems(items.concat(data.hits));
    }

    const fetchData = () => {
        setInterval( () => {
            getPosts()
        }, 10000)
    }

    const renderPosts = (itemArray) => {
        return itemArray.map( (post, index) => <NewsCard key={index} post={post}/>)
    }
    
    return (
        <InfiniteScroll
            dataLength={items.length} //This is important field to render the next data
            next={fetchData}
            hasMore={true}
            loader={<h4 className="mt-2 text-center">Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
                </p>
            }
        >
            {renderPosts(items)}
        </InfiniteScroll>
        )
    }
