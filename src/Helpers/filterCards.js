export const filterCards = (cards, filter) => {
  let filteredCards = [...cards];
  if (cards.length > 1) {
    filteredCards.sort((a, b) => a.index - b.index);
  }
  if (filter === 'all') return filteredCards;

  filteredCards = cards.filter(card => card.priority === filter);

  return filteredCards;
};
