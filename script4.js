function User(name) {
  this.name = name
  this.getName = () => this.name

  return {
    getName: this.getName,
  }
}

// Допишите код здесь, чтобы программа вывела на консоль ожидаемый результат

const me = new User('Rex')

console.log(me.getName()) // Rex
