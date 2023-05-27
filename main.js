/* styles */
import './reset.css'
import './style.css'
import './product.css'

/* scripts */
const products = document.querySelectorAll('[data-stock]')

products.forEach((product) => {
  const stockStatus = product.dataset.stock

  switch (stockStatus) {
    case 'in-stock':
      product.querySelector('p').textContent = 'Products are in stock, make it yours!'
      break

    case 'limited-stock':
      product.querySelector('p').textContent = 'Limited Stock, PLS HURRY!!!'
      break

    case 'out-of-stock':
      product.querySelector('p').textContent = 'Out of Stock, Test your luck next time!!!'
      break

    default:
      break
  }
})
