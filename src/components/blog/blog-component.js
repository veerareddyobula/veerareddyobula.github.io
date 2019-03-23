import React, { Component, Fragment } from 'react'
import BlogCardComponent from './../card/blog-card-component'

import './blog-component.css'
class BlogComponent extends Component {

    state = {
        worthyBlogCollection: [{
            id: 1,
            cardTitle: 'A Study Plan To Cure JavaScript Fatigue',
            imageUrl: 'https://cdn-images-1.medium.com/max/1200/1*9aqEe1RQXAh77hA07VZN0w.png',
            myComments: 'Extremely nicely written! Want to highlight MobX as a strong alternative to Redux, and an option that might have less of a learning curve due to reduced boilerplate code that a beginner will have to wade through.',
            link: 'https://medium.freecodecamp.org/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1'
        },{
            id: 1,
            cardTitle: 'JavaScript Environment, Lexical Scope and Closures',
            imageUrl: 'https://cdn-images-1.medium.com/max/1200/1*l80QFWQWJlxBM-rYaWFCyw.png',
            myComments: 'Extremely nicely written! Want to highlight MobX as a strong alternative to Redux, and an option that might have less of a learning curve due to reduced boilerplate code that a beginner will have to wade through.',
            link: 'https://medium.com/@jakepintu/javascript-environment-lexical-scope-and-closures-9c8dfaeff73d'
        },{
            id: 1,
            cardTitle: '13 Noteworthy Points from Google’s JavaScript Style Guide',
            imageUrl: 'https://cdn-images-1.medium.com/max/2560/1*ouYvMzYuksK-IH1BPNKD0A.jpeg',
            myComments: 'for - in is generally discouraged, period. It loops through the enumerable properties in an object and that object’s prototype chain. There are relatively few use cases in practice where that is desired. More often, Object.keys is preferred, or for - of now that it exists.',
            link: 'https://medium.freecodecamp.org/google-publishes-a-javascript-style-guide-here-are-some-key-lessons-1810b8ad050b'
        }]
    }

    render() {
        const { worthyBlogCollection } = this.state
        return (
            <Fragment>
                <div className="icon--row icon-block">
                    <h2 className="center light-blue-text">
                        <i className="material-icons">find_replace</i>
                    </h2>
                </div>
                <h5 className="center slash--heading">Develop the skill of setting worthy goals</h5>
                <div className="blogger--post">
                    {
                        worthyBlogCollection.map(entity => {
                            return <BlogCardComponent item={entity} />
                        })
                    }
                </div>
            </Fragment>
        )
    }
}

export default BlogComponent;