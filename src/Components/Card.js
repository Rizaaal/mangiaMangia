//card.js

import { Component } from 'react';

class Card extends Component {
  render() {
    console.log(this.props.card.img);

    return (
      <div className="col">
        <div className="card" style={{ width: '20rem', textAlign: 'center' }}>
          <button className="btn btn-primary">+1</button>
          <button className="btn btn-primary">-1</button>
          <img src={this.props.card.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.card.nome}</h5>
            <p className="card-text">{this.props.card.prezzo} euro</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
