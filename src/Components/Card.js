import { Component, useContext } from 'react';
import { Context } from '../Context';

class Card extends Component {
  static contextType = Context;

  render() {
    return (
      <div className="col">
        <div className="card" style={{ width: '20rem', textAlign: 'center' }}>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.context.addToCart(this.props.card);
            }}
          >
            +1
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.context.deleteFromCart(this.props.card.id);
            }}
          >
            -1
          </button>
          <img
            src={this.props.card.immagine}
            className="card-img-top"
            alt="image not available"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.card.nome}</h5>
            <p className="card-text">{this.props.card.prezzo} euro</p>
            {this.props.cart ? (
              <p className="card-text">quantità: {this.props.card.quantity}</p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
