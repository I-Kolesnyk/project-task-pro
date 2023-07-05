export const filterCards = (cards, filter) => {
  if (filter === 'all') return cards;

  const filteredCards = cards.filter(card => card.priority === filter);
  if (filteredCards.length > 1) {
    filteredCards.sort((a, b) => a.index - b.index);
  }
  return filteredCards;
};
