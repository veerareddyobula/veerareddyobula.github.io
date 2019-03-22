import React, { Component, Fragment } from 'react'
import $ from "jquery";
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.css'

import HeaderComponent from './../../components/header/header-component'
import AboutmeComponent from './../../components/aboutme/aboutme-component'
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
                <HeaderComponent />
                <AboutmeComponent />
                <EducationComponent />
                <WorkExpirenceComponent />
                <ProjectsComponent />
                <FooterComponent />                
            </Fragment>)
    }
}
export default HomeContainer
