import { createCardItem } from './components/createCardItem.js';
import { cards } from '../data/cards.js';

const cardsContainer = document.querySelector('.cards-container');

createCardItem(cardsContainer, cards); 
