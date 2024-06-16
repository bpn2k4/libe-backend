
import { sql } from '@databases'

import { District, Province, Ward } from './Placement'

const createAssociation = () => {
  District.belongsTo(Province, {
    foreignKey: 'provinceId',
    as: 'province'
  })
  Province.hasMany(District, {
    foreignKey: 'provinceId',
    as: 'districts'
  })
  Ward.belongsTo(District, {
    foreignKey: 'districtId',
    as: 'district'
  })
  District.hasMany(Ward, {
    foreignKey: 'districtId',
    as: 'wards'
  })

}

const initModel = async (sync = false, alter = true, force = true) => {
  createAssociation()
  if (sync) {
    return sql.sync({
      alter: alter,
      force: force
    })
  }
}

export {
  initModel,
  createAssociation,
  District, Province, Ward
}