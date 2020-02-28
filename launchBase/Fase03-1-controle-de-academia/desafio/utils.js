
module.exports = {
  age: (timestamp) => {
    const today = new Date()
    const birthDate = new Date(timestamp)
  
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()
    
    if(month < 0 || (month == 0 && today.getDate() < birthDate.getDate() )){
      age = age -1
    }
  
    return age
  
  },
  dateBrasil: (dateString) => {
    const arrDate = dateString.split('-')
    const day = arrDate[2].length == 1 ? '0' + arrDate[2] : arrDate[2]
    const month = arrDate[1].length == 1 ? '0' + arrDate[1] : arrDate[1]
    const year = arrDate[0]
    
    return day + '/' + month + '/' + year
  },
  date: (timestamp) => {
    const date = new Date(timestamp)

    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year,
      iso:`${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    }
  }
}
