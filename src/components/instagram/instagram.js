import React from 'react'

// Credit to: https://github.com/LarsBehrenberg/gatsby-instagram-feed/blob/master/src/components/instagram.js

export default class Instagram extends React.Component {
    state = { photos: [], loading: true }

    // Your specifications
    INSTAGRAM_ID = "7368509718"
    THUMBNAIL_WIDTH = 640
    PHOTO_COUNT = 9

    async componentDidMount() {
        try {
            // Hack from https://stackoverflow.com/a/47243409/2217533
            const response = await fetch(
                `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${this.INSTAGRAM_ID}","first":${this.PHOTO_COUNT},"after":null}`
            )
            const { data } = await response.json()
            const photos = data.user.edge_owner_to_timeline_media.edges.map(
                ({ node }) => {
                    const { id } = node
                    const comments = node.edge_media_to_comment.count
                    const likes = node.edge_media_preview_like.count
                    const caption = node.edge_media_to_caption.edges[0].node.text
                    const thumbnail = node.thumbnail_resources.find(
                        thumbnail => thumbnail.config_width === this.THUMBNAIL_WIDTH
                    )
                    const { src, config_width: width, config_height: height } = thumbnail
                    const url = `https://www.instagram.com/p/${node.shortcode}`
                    return {
                        id,
                        caption,
                        src,
                        width,
                        height,
                        url,
                        comments,
                        likes,
                    }
                }
            )
            this.setState({ photos, loading: false })
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <div className="insta">
                <h2>INSTAGRAM</h2>
                <span>@aistudiobynaziawamiq</span>
                <ul className="insta-posts">
                    {
                        // if page is loading
                        this.state.loading === true ? (
                            <div style={{ textAlign: "center" }}>
                                <h1>Loading ...</h1>
                            </div>
                        ) : (
                            // if page is done loading
                            //
                            this.state.photos &&
                            this.state.photos.map(
                                ({ src, url, id, likes, comments, caption }) => (
                                    <li key={id} className="insta-post">
                                        <img className="icon" src={src} alt="like icon"/>
                                        <div className="overlay">
                                            <img className="icon" src={src} alt="like icon"/>
                                            <p className="text">{likes}</p>
                                        </div>
                                    </li>
                                )
                            )
                        )}
                </ul>
            </div>
        )
    }
}
