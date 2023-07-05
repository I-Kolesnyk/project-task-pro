export const filterCards = (cards, filter) => {
  const sortedCards = [...cards].sort((a, b) => a.index - b.index);
  if (filter === 'all') return sortedCards;

  const filteredCards = sortedCards.filter(card => card.priority === filter);

  return filteredCards;
};
