import React, { Component, Fragment } from 'react'
import $ from "jquery";
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.css'

import AboutmeComponent from './../../components/aboutme/aboutme-component'
import HeaderComponent from './../../components/header/header-component'
import QuotesComponent from './../../components/quotes/quotes-component'

import EducationComponent from './../../components/education/education-component'
import WorkExpirenceComponent from './../../components/work-expirence/work-expirence-component'
import ProjectsComponent from './../../components/projects/projects-component'
import FooterComponent from './../../components/footer/footer-component'
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
                <HeaderComponent />
                <QuotesComponent />
                <ProjectsComponent />
                <FooterComponent />                
            </Fragment>)
    }
}
export default HomeContainer
