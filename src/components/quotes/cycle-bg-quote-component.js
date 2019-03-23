import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class CycleBgQuoteComponent extends Component {
    render(){
        return(
            <div class="parallax-container center valign-wrapper">
                <div class="parallax">
                    <img 
                        alt="Without requirements or design, programming is the art of adding bugs to an empty text file." 
                        src="assets/parallax/vintage_bicycle_in_the_storm-wallpaper-960x540.jpg?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=" />
                </div>

                <div class="container deep-orange darken-1">
                    <div className="d-flex justify-content-center m-4">
                        <h4>"</h4>
                        <h5>Without requirements or design, programming is the art of adding bugs to an empty text file.</h5>
                        <h4>"</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default CycleBgQuoteComponent
