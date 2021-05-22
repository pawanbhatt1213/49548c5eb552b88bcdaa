import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router'

export default function NewsCard({post}) {

    const history = useHistory();

    return (
            <Card onClick={()=>history.push("/postInfo", {jsonData: post})}>
                <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{new Date(post.created_at).toDateString()}</Card.Subtitle>
                <Card.Link href="#" className="float-right"> - {post.author}</Card.Link>
            </Card.Body>
            </Card>
    )
}
