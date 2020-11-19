export const containerStore = {
  state: {
    containers: []
  },
  addContainer(name, dbConnection, ram, rt, started) {
    if (!this.state.containers.find((container) => container.name == name)) {
      this.state.containers.push(
        new Container(name, dbConnection, ram, rt, started)
      )
    }
  },
  removeContainer(name) {
    this.state.containers.pop(
      this.state.containers.find((container) => container.name == name)
    )
  }
}
var Container = function (name, dbConnection, ram, rt, started) {
  this.name = name
  this.dbConnection = dbConnection
  this.ram = ram
  this.rt = rt
  this.started = started
}
