import React from 'react';
import ProductQuantityList from './component/ProductQuantityList';

function App() {
  return (
    <div>
      <ProductQuantityList
        products={['Apples', 'Oranges', 'Bananas']}
        quantities={[3, 1, 2]}
      />
    </div>
  );
}

export default App;