# TechNest Store 🛒⚡

An e-commerce web application built with **React.js** and **Redux** for state management.

## Student Information

- **Student Name:** [Your Name]
- **Module:** WAMD — TD-TP 2
- **University:** ENSTA — SS/IA, First Semester 2026

---

## Application Overview

**TechNest Store** is an online electronics store where users can browse premium tech products and manage a shopping cart. Products include laptops, smartphones, headphones, smartwatches, tablets, TVs, and accessories.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JSX | Describing component structure |
| JavaScript (ES6+) | Application logic |
| Redux Toolkit | Global state management (cart) |
| React-Redux | Connecting React components with Redux |
| Vite | Build tool and dev server |
| CSS (Vanilla) | Styling and animations |
| Node.js / npm | Dependency management |

---

## Main React Components

| Component | Description |
|---|---|
| `App.jsx` | Root component — manages search, category filter, sort state |
| `Navbar.jsx` | Navigation bar with brand logo, search bar, cart button |
| `ProductList.jsx` | Renders the product grid from filtered products |
| `ProductCard.jsx` | Individual product card with add-to-cart functionality |
| `Cart.jsx` | Sliding cart drawer with order summary |
| `CartItem.jsx` | Individual cart item with quantity controls |

---

## Redux State

The Redux store manages the global **cart** state:

```js
{
  cart: {
    items: [
      { id, name, price, image, quantity, ... }
    ]
  }
}
```

### Actions (cartSlice)

| Action | Description |
|---|---|
| `addToCart(product)` | Add a product or increment quantity |
| `removeFromCart(id)` | Remove a product from cart |
| `increaseQuantity(id)` | Increase product quantity by 1 |
| `decreaseQuantity(id)` | Decrease quantity or remove if 1 |
| `clearCart()` | Remove all items from cart |

### Selectors

- `selectCartItems` — returns all cart items
- `selectCartTotal` — returns total price
- `selectCartCount` — returns total item count

---

## Implemented Features

### Required
- ✅ React.js application
- ✅ JSX throughout
- ✅ Multiple reusable components
- ✅ Props used across components
- ✅ Local state (search, category, sort, cart open/close, add animation)
- ✅ User events (click, input, change)
- ✅ Product catalog display
- ✅ Product information (name, category, price, rating, description)
- ✅ Add to cart
- ✅ Remove from cart
- ✅ Dynamic UI updates when cart changes
- ✅ Redux store
- ✅ Actions defined
- ✅ Reducers defined
- ✅ React-Redux integration
- ✅ Global state read from components (Navbar, Cart, ProductCard)
- ✅ Actions dispatched from components

### Optional (also implemented)
- ✅ Product search
- ✅ Category filtering
- ✅ Quantity management (increase/decrease)
- ✅ Cart total
- ✅ Product sorting (price, rating)
- ✅ Discount display

---

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser at: **http://localhost:5173**
