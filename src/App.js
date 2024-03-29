import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import PrenotazioniComponent from './Components/Prenotazioni';
import pippo from './cibo/pippo.jpg';
import franco from './cibo/franco.jpg';
import paoli from './cibo/paoli.jpg';
import gino from './cibo/gino.jpg';
import hamburger0 from './cibo/hamburger0.jpg';
import hamburger1 from './cibo/hamburger1.jpg';
import hamburger2 from './cibo/hamburger2.jpg';
import hamburger3 from './cibo/hamburger3.jpeg';
import sanDaniele from './cibo/sanDaniele.jpg';
import diavola from './cibo/diavola.jpg';
import margherita from './cibo/margherita.jpg';
import vegana from './cibo/vegana.jpg';
import pomodoro from './cibo/pomodoro.jpg';
import pesto from './cibo/pesto.jpg';
import carbonara from './cibo/carbonara.jpg';
import peperoni from './cibo/peperoni.jpg';
import cocaCola from './cibo/cocaCola.jpg';
import fanta from './cibo/fanta.jpg';
import sprite from './cibo/sprite.jpg';
import ceres from './cibo/ceres.jpg';

class App extends Component {
  state = {
    categories: [
      {
        id: 0,
        name: 'SUSHI',
        products: [
          {
            id: 0,
            nome: 'Pippo Franco',
            prezzo: 1.99,
            immagine: pippo,
            quantità: 0
          },
          {
            id: 1,
            nome: 'Franco Franchi',
            prezzo: 2.99,
            immagine: franco,
            quantità: 0
          },
          {
            id: 2,
            nome: 'Gino Paoli',
            prezzo: 3.99,
            immagine: paoli,
            quantità: 0
          },
          {
            id: 3,
            nome: 'Pedro Pascal',
            prezzo: 4.99,
            immagine: gino,
            quantità: 0
          }
        ]
      },
      {
        id: 1,
        name: 'HAMBURGER',
        products: [
          {
            id: 0,
            nome: 'Happy Belly Burger',
            prezzo: 5.99,
            immagine: hamburger0,
            quantità: 0
          },
          {
            id: 1,
            nome: 'Smiley Patty Burger',
            prezzo: 7.99,
            immagine: hamburger1,
            quantità: 0
          },
          {
            id: 2,
            nome: 'Jolly Juicy Burger',
            prezzo: 9.99,
            immagine: hamburger2,
            quantità: 0
          },
          {
            id: 3,
            nome: 'Chuckle Cheeseburger',
            prezzo: 11.99,
            immagine: hamburger3,
            quantità: 0
          }
        ]
      },
      {
        id: 2,
        name: 'PIZZA',
        products: [
          {
            id: 0,
            nome: 'Daniel San',
            prezzo: 10.99,
            immagine: sanDaniele,
            quantità: 0
          },
          {
            id: 1,
            nome: 'Diavola',
            prezzo: 8.99,
            immagine: diavola,
            quantità: 0
          },
          {
            id: 2,
            nome: 'Margherita',
            prezzo: 5.99,
            immagine: margherita,
            quantità: 0
          },
          {
            id: 3,
            nome: 'Vegana',
            prezzo: 4.99,
            immagine: vegana,
            quantità: 0
          }
        ]
      },
      {
        id: 3,
        name: 'PASTA',
        products: [
          {
            id: 0,
            nome: 'Spaghetti al pomodoro',
            prezzo: 10.99,
            immagine: pomodoro,
            quantità: 0
          },
          {
            id: 1,
            nome: 'Spaghetti al pesto di pistacchi',
            prezzo: 12.99,
            immagine: pesto,
            quantità: 0
          },
          {
            id: 2,
            nome: 'Spaghetti alla carbonara',
            prezzo: 11.99,
            immagine: carbonara,
            quantità: 0
          },
          {
            id: 3,
            nome: 'Spaghetti con crema di peperoni',
            prezzo: 12.99,
            immagine: peperoni,
            quantità: 0
          }
        ]
      },
      {
        id: 4,
        name: 'BIBITE',
        products: [
          {
            id: 0,
            nome: 'CocaCola',
            prezzo: 2.99,
            immagine: cocaCola,
            quantità: 0
          },
          { id: 1, nome: 'Fanta', prezzo: 3.99, immagine: fanta, quantità: 0 },
          {
            id: 2,
            nome: 'Sprite',
            prezzo: 2.99,
            immagine: sprite,
            quantità: 0
          },
          { id: 3, nome: 'Ceres', prezzo: 3.99, immagine: ceres, quantità: 0 }
        ]
      }
    ],
    selectedCategory: null
  };

  handleCategoryClick = (categoryId) => {
    this.setState({ selectedCategory: categoryId });
  };

  handleDelete = (categoryId, cardId) => {
    const updatedCategories = this.state.categories.map((category) => {
      if (category.id === categoryId) {
        category.products = category.products.filter(
          (product) => product.id !== cardId
        );
      }
      return category;
    });

    this.setState({ categories: updatedCategories });
  };

  handleIncrement = (categoryId, card) => {
    const updatedCategories = this.state.categories.map((category) => {
      if (category.id === categoryId) {
        category.products = category.products.map((product) => {
          if (product.id === card.id) {
            return { ...product, quantità: product.quantità + 1 };
          }
          return product;
        });
      }
      return category;
    });

    this.setState({ categories: updatedCategories });
  };

  handleDecrement = (categoryId, card) => {
    const updatedCategories = this.state.categories.map((category) => {
      if (category.id === categoryId) {
        category.products = category.products.map((product) => {
          if (product.id === card.id && product.quantità > 0) {
            return { ...product, quantità: product.quantità - 1 };
          }
          return product;
        });
      }
      return category;
    });

    this.setState({ categories: updatedCategories });
  };

  render() {
    return (
      <>
        <Navbar />
        <h1>Cosa desideri ordinare?</h1>
        <hr />
        <div className="container">
          <div className="btn-group" role="group" aria-label="Categorie">
            {this.state.categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className="btn btn-primary"
                onClick={() => this.handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="row">
            {this.state.categories
              .filter(
                (category) =>
                  this.state.selectedCategory === null ||
                  category.id === this.state.selectedCategory
              )
              .map((category) => (
                <div key={category.id}>
                  <h2>{category.name}</h2>
                  <hr />
                  {category.products.map((product) => (
                    <Card
                      key={product.id}
                      card={product}
                      onDelete={() =>
                        this.handleDelete(category.id, product.id)
                      }
                      onIncrement={() =>
                        this.handleIncrement(category.id, product)
                      }
                      onDecrement={() =>
                        this.handleDecrement(category.id, product)
                      }
                    />
                  ))}
                </div>
              ))}
          </div>
        </div>
        <PrenotazioniComponent />
      </>
    );
  }
}

export default App;
