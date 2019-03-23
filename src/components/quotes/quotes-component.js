import React, { Component } from 'react'
import moment from 'moment'
import './quotes-component.css'

class QuotesComponent extends Component {

    getNumOfYearsOfExp = (startDate, endDate) => moment.duration(moment(endDate, 'YYYY-MM-DD').diff(moment(startDate, 'YYYY-MM-DD'))).asYears().toFixed(1);

    render() {
        return (
            <div className="d--grid icon-block">
                <div className="icon--row">
                    <h2 className="center light-blue-text">
                        <i className="material-icons">highlight</i>
                    </h2>
                </div>
                <h5 className="center slash--heading">Career Summary</h5>
                <div className="profile--row--col">
                    <div className="circle--badge">
                        <img src="assets/veera_passport_pic.jpg" alt="Veera" class="circle responsive-img" />
                    </div>
                    <div className="profile--col--name">O.Veera Bhargava Reddy</div>
                    <div style={{ display: 'flex' }}>
                        <span><i className="material-icons">email</i></span>
                        <span>veerareddy.obula@gmail.com</span>
                    </div>
                    <div className="linked-in-btn">BTech (Computers Science & Engineering)</div>
                    <div className="linked-in-btn">
                        <p>lets get in touch <a href="#">LinkedIn</a>, messages work best</p>
                    </div>
                </div>
                <div class="collection experience--row--col">
                    <a href="#!" class="collection-item entity">
                        <div className="d--flex--column">
                            <a href="https://www.ge.com/digital/" target="_blank">GE-Degital</a>
                            <div className="sub-label">Bengaluru (Karnataka, India)</div>
                        </div>
                        <span class="new badge link-color" data-badge-caption="years">{this.getNumOfYearsOfExp('2016-09-01', new Date())}</span>
                    </a>
                    <a href="#!" class="collection-item entity">
                        <div>
                            <a href="https://www.wipro.com/en-IN/" target="_blank">Wipro Limited</a>
                            <div className="sub-label">Bengaluru (Karnataka, India)</div>
                        </div>
                        <span class="new badge link-color" data-badge-caption="years">{this.getNumOfYearsOfExp('2015-05-01', '2016-08-30')}</span>
                    </a>
                    <a href="#!" class="collection-item entity">
                        <div>
                            <a href="https://davizta.com/" target="_blank">daVIZta India Pvt. Ltd</a>
                            <div className="sub-label">Pune (Maharashtra, India)</div>
                        </div>
                        <span class="new badge link-color" data-badge-caption="years">{this.getNumOfYearsOfExp('2013-05-01', '2015-01-30')}</span>
                    </a>
                    <a href="#!" class="collection-item entity">
                        <div>
                            <a href="https://www.tripodtech.net/" target="_blank">Tripod Software Solutions PVT Ltd</a>
                            <div className="sub-label">Hyderabad (Telangana, India)</div>
                        </div>
                        <span class="new badge link-color" data-badge-caption="years">{this.getNumOfYearsOfExp('2008-09-01', '2012-12-30')}</span>
                    </a>
                </div>
                <div className="technical--skills--row--col">
                    <span class="chip blue">HTML5</span>
                    <span class="chip red lighten-3">CSS3</span>
                    <span class="chip red lighten-3">Bootstrap</span>
                    <span class="chip orange">D3</span>
                    <span class="chip orange">Highcharts</span>
                    <span class="chip teal">Javascript</span>
                    <span class="chip">Java</span>
                    <span class="chip">GWT</span>
                    <span class="chip cyan accent-2">node.js</span>
                    <span class="chip cyan accent-2">express.js</span>
                    <span class="chip cyan accent-2">graphql</span>
                    <span class="chip lime accent-2">React.js</span>
                    <span class="chip lime accent-2">Apollo Client</span>
                    <span class="chip lime accent-2">Redux</span>
                    <span class="chip lime accent-2">Redux-Saga</span>
                    <span class="chip lime accent-2">Formik</span>
                    <span class="chip lime accent-2">YUP Validation</span>
                    <span class="chip green accent-2">AngularJs 1.x</span>
                    <span class="chip lime accent-2">Electron</span>
                    <span class="chip amber">Gulp</span>
                    <span class="chip amber">Grunt</span>
                    <span class="chip amber">Webpack</span>
                </div>
            </div>
        )
    }
}

export default QuotesComponent;