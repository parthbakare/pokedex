import React, { Component } from 'react';
import Show from './Show';
import Sbutton from './Sbutton';

class Pokemon extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            flag: true,
        }

        this.handler = this.handler.bind(this);
    }

    handler() {
        this.setState({
            ...this.state,
            flag: false,
            newflag: true
        })
    }
     
    render() {
        let pokemon = this.props.pokemon;
        // console.log(this.props.pokemon);
        
        return (
            <div className="pokemon">
                <div className="pokemon__name">
                    <p>{pokemon.name}</p>
                </div>

                {this.state.flag && <Sbutton handler={this.handler}/>}

                {this.state.newflag && <Show pokemon={pokemon}/>}

                {/* {this.state.flag && <Show pokemon={pokemon}/>} */}
                {/* <Show pokemon={pokemon} flag={this.state.flag}/> */}
                {/* <div className="pokemon__meta">
                    <span>{pokemon.maxHP}</span>
                    <span>{pokemon.maxCP}</span>
                </div>
                <div className="pokemon__image">
                    <img src={pokemon.image} alt={pokemon.name} />
                </div>
                <div className="pokemon__attacks">
                    {pokemon.attacks.special.slice(0, 3).map(attack => (
                        <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
                    ))}
                </div> */}
            </div>
        );
    }
    
}

// function Pokemon({ pokemon }) {
    // return (
    //     <div className="pokemon">
    //         <div className="pokemon__name">
    //             <button onClick = {this.handle}>{pokemon.name}</button>
    //         </div>
    //         <div className="pokemon__meta">
    //             <span>{pokemon.maxHP}</span>
    //             <span>{pokemon.maxCP}</span>
    //         </div>
    //         <div className="pokemon__image">
    //             <img src={pokemon.image} alt={pokemon.name} />
    //         </div>
    //         <div className="pokemon__attacks">
    //             {pokemon.attacks.special.slice(0, 3).map(attack => (
    //                 <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
    //             ))}
    //         </div>
    //     </div>
    // );
// }

export default Pokemon