const user = {
  name: 'Lucas',
  transactions: [],
  balance: 0
}

function createTransaction(transaction){
  user.transactions.push(transaction)
  user.balance += transaction.type == 'credit' ? transaction.value : (transaction.value * (-1))
}

function getHigherTransactionByType(type){
  let higherValue = 0

  for(let transaction of user.transactions){
    higherValue = transaction.type == type && transaction.value > higherValue ? transaction.value : higherValue
  }
  console.log({type, value: higherValue})
}

function getAverageTransactionValue(){
  let value = 0

  for(let transaction of user.transactions){
    value += transaction.value 
  }

  console.log(value / user.transactions.length)
}

function getTransactionsCount(){
  let value = {credit: 0, debit: 0}

  for(let transaction of user.transactions){
    if(transaction.type == 'credit') value.credit ++

    if(transaction.type == 'debit') value.debit ++
  }

  console.log(value)
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.log(user.balance) // 60

getHigherTransactionByType('credit') // { type: 'credit', value: 120 }
getHigherTransactionByType('debit') // { type: 'debit', value: 80 }

getAverageTransactionValue() // 70

getTransactionsCount() // { credit: 2, debit: 2 }
