

const createAssociation = () => { }

const initModel = async (alter = true, force = true) => {
  createAssociation()
  // return sql.sync({
  //   alter: alter,
  //   force: force
  // })
}

export {
  initModel
}