import React, { Component } from 'react'

class BlogCardComponent extends Component {
    render() {
        const {item} = this.props
        return (
            <div class="row blue-grey-text text-darken-4">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src={item.imageUrl} alt={item.cardTitle} />
                        </div>
                        <div class="card-content">
                            <span class="card-title">{item.cardTitle}</span>
                            <p>{item.myComments}</p>
                        </div>
                        <div class="card-action">
                            <a href={item.link} rel="noopener noreferrer" target="_blank">Link to original post</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogCardComponent