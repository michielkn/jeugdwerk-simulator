import React, {Component} from 'react';
import Animator from "./item/Animator";
import {animatoren} from "./item/data/Animatoren";


export default class Animatoren extends Component {

    renderAnimatoren(){
        let result = [];
        animatoren.forEach((animator) => {
            result.push(
                <div className="cell large-3 medium-6 small-12">
                    <Animator
                        name={animator.name}
                        age={animator.age}
                        competenties={animator.competenties}
                    />
                </div>

            )
        })
        return result;
    }

    render(){
        return (
            <div className="grid-x">
                {this.renderAnimatoren()}
            </div>
        )
    }
}