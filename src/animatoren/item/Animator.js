import React, {Component} from 'react';
import './animatoren.css'
import Competentie from "./Competentie";

export default class Animator extends Component {
    render(){
        return (
            <div class="rating">
                <div class="card-section">
                    <p class="ratings-card-header">{this.props.name} ({Math.floor(this.props.age)})</p>
                    <Competentie
                        title="Kinderen en jongeren begeleiden"
                        stars={this.props.competenties[0]}/>
                    <Competentie
                        title="Activiteiten organiseren"
                        stars={this.props.competenties[1]}/>
                    <Competentie
                        title="Over zichzelf reflecteren als animator"
                        stars={this.props.competenties[2]}/>
                    <Competentie
                        title="De veiligheid van kinderen en jongeren waarborgen"
                        stars={this.props.competenties[3]}/>
                    <Competentie
                        title="Respectvol handelen"
                        stars={this.props.competenties[4]}/>
                    <Competentie
                        title="Samenwerken"
                        stars={this.props.competenties[5]}/>
                    <Competentie
                        title="Enthousiasmeren"
                        stars={this.props.competenties[6]}/>
                </div>
            </div>
        )
    }
}