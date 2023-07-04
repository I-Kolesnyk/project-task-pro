export const filterCards = (cards, filter) => {
  if (filter === 'all') return cards;

  const filteredCards = cards.filter(card => card.priority === filter);
  console.log(filteredCards);

  return filteredCards;
};
