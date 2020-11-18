const getShops = () => (
  fetch(`/api/shops`)
    .then(res => res.json())
);

const getShop = (shop_id) => (
  fetch(`/api/shops/${shop_id}`)
    .then(res => res.json())
);

const updateShop = (shop_id, shop_data) => (
  fetch(`/api/shops/${shop_id}`, {
    method: 'PUT',
    accept: 'application/json',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(shop_data)
  })
    .then(res => res.json())
);

const Client = {
  getShops,
  getShop,
  updateShop
};

export default Client;

