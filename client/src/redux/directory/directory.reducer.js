const INITAIL_STATE = {
  sections: [
    {
      title: 'Baked Goods',
      imageUrl: '../dist/img/Salapao.jpg',
      id: 1,
      linkUrl: 'shop/baked%20goods',
    },
    {
      title: 'Thai Dishes',
      imageUrl: '../dist/img/KhaoSoi.jpg',
      id: 2,
      linkUrl: 'shop/thai%20dishes',
    },
  ],
};

const directoryReducer = (state = INITAIL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
