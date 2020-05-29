import React, {Component} from 'react'

export default class Competentie extends Component {

    isSelected(i){
        return i < this.props.stars
    }

    renderStars(){
        let result = [];
        for(let i = 0; i< 5; i++ ){
            result.push(
                <div class={this.isSelected(i) ? "star selected" : "star"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="37" viewBox="0 0 40 37">
                        <polygon fill="none" points="272 30 260.244 36.18 262.489 23.09 252.979 13.82 266.122 11.91 272 0 277.878 11.91 291.021 13.82 281.511 23.09 283.756 36.18" transform="translate(-252)"/>
                    </svg>
                </div>
            )
        }
        return result;
    }

    render(){
        return (
            <div class="rating-block">
                <p class="ratings-type">{this.props.title}</p>
                <div class="rating-block-rating" data-rating>
                    {this.renderStars()}
                </div>
            </div>
        )
    }
}