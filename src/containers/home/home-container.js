import React, { Component } from 'react'
import $ from "jquery";
import M from "materialize-css";

import LabelSection from './../../components/label-section/label-section'
import './home-container.css'
class HomeContainer extends Component {

    componentDidMount = () => {
        $(document).ready(function () {
            const parallaxOneEntity = $('.parallax');
            M.Parallax.init(parallaxOneEntity);
        });

        const elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            direction: 'left',
            hoverEnabled: false
        });
    }

    render() {
        return (
            <div className="parallax-container">
                <LabelSection />
                <div className="fixed-action-btn horizontal click-to-toggle">
                    <a className="btn-floating btn-large red">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                        <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                        <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                        <li><a className="btn-floating blue"><i className="material-icons">attach_file</i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default HomeContainer
