
# Grocery Inventory Management System

This is a simple implementation of a grocery inventory management system with two endpoints for adding and retrieving grocery items.


## Technologies Used

- Express.js
- Node.js


## Installation

To install and run this project, follow these steps:

#### 1. Clone the repository:
```bash
  git clone https://github.com/Arghya20/grocery-inventory.git
```
    
#### 2. Navigate to the project directory:
```bash
  cd grocery-inventory
```

#### 3. Install dependencies:
```bash
  npm install
```


#### 4. Start the server:
```bash
  node index.js
```
     
## Endpoints

 #### POST /api/groceries
 Adds a new grocery item to the inventory.

 Request body:

```bash
  {
  "name": "apples",
  "quantity": 10
}

```

Response body:

```bash
  {
  "name": "apples",
  "quantity": 10
}

```

 #### GET /api/groceries

 Retrieves all grocery items in the inventory.

 Response body:

 ``` bash
[
  {
    "name": "apples",
    "quantity": 10
  },
  {
    "name": "bananas",
    "quantity": 5
  },
  {
    "name": "carrots",
    "quantity": 2
  }
]

 ```