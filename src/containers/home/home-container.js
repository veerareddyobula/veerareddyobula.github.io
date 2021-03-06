import React, { Component, Fragment } from 'react'
import $ from "jquery";
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.css'

import AboutmeComponent         from './../../components/aboutme/aboutme-component'
import CareerSummaryComponent   from '../../components/career-summary/career-summary-component'
import BlogComponent            from './../../components/blog/blog-component'
import CycleBgQuoteComponent    from '../../components/quotes/cycle-bg-quote-component'
import BuildingBgQuoteComponent from '../../components/quotes/building-bg-quote-component'
import FooterComponent          from './../../components/footer/footer-component'

class HomeContainer extends Component {

    componentDidMount = () => {
        const parallaxContainer = $('.parallax')
        console.log('--== parallaxContainer ', parallaxContainer)
        M.Parallax.init(parallaxContainer);
    }

    render() {
        return (
            <Fragment>
                <AboutmeComponent />
                <CareerSummaryComponent />
                <CycleBgQuoteComponent />
                <BlogComponent />
                <BuildingBgQuoteComponent />
                <FooterComponent />                
            </Fragment>)
    }
}
export default HomeContainer
