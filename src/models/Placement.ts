import {
  BOOLEAN,
  INTEGER,
  STRING,
  sql
} from '@databases'


/**
 * Defines the 'Province' model representing the 'provinces' table in the database.
 * 
 * Fields:
 * - provinceId: Integer, primary key, auto-incremented, not null
 * - name: String, not null
 * - type: String, not null, value: city (thành phố), province (tỉnh)
 * - deleted: Boolean, not null, defaults to false
 * 
 * Options:
 * - tableName: Specifies the table name as 'provinces'
 * - timestamps: Enables createdAt and updatedAt timestamps
 * - paranoid: Enables soft deletes with a deletedAt timestamp
 * - indexes: An array for defining indexes, currently empty
 */
const Province = sql.define('provinces', {
  provinceId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  type: {
    type: STRING,
    allowNull: false
  },
  deleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'provinces',
  timestamps: true,
  initialAutoIncrement: '100001',
  paranoid: true,
  indexes: [
    { name: 'province_name_index', fields: ['name'], type: 'FULLTEXT' },
    { name: 'province_type_index', fields: ['type'] },
    { name: 'province_deleted_index', fields: ['deleted'] }
  ]
})


/**
 * Defines the 'District' model representing the 'districts' table in the database.
 * 
 * Fields:
 * - districtId: Integer, primary key, auto-incremented, not null
 * - name: String, not null
 * - type: String, not null, value: city (thành phố), district (huyện), urban district (quận), town (thị xã)
 * - deleted: Boolean, not null, defaults to false
 * - provinceId: Integer, foreign key to 'Province', not null
 * 
 * Options:
 * - tableName: Specifies the table name as 'districts'
 * - timestamps: Enables createdAt and updatedAt timestamps
 * - paranoid: Enables soft deletes with a deletedAt timestamp
 * - indexes: An array for defining indexes, currently empty
 */
const District = sql.define('districts', {
  districtId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  type: {
    type: STRING,
    allowNull: false
  },
  deleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  provinceId: {
    type: INTEGER,
    allowNull: false
  }
}, {
  tableName: 'districts',
  timestamps: true,
  initialAutoIncrement: '100001',
  paranoid: true,
  indexes: [
    { name: 'district_name_index', fields: ['name'], type: 'FULLTEXT' },
    { name: 'district_type_index', fields: ['type'] },
    { name: 'district_deleted_index', fields: ['deleted'] },
    { name: 'district_provinceId_index', fields: ['provinceId'] },
  ]
})


/**
 * Defines the 'Ward' model representing the 'wards' table in the database.
 * 
 * Fields:
 * - wardId: Integer, primary key, auto-incremented, not null
 * - name: String, not null.
 * - type: String, not null, value: ward (phường), commune (xã), township (thị trấn)
 * - deleted: Boolean, not null, defaults to false
 * - districtId: Integer, foreign key to 'District', not null
 * 
 * Options:
 * - tableName: Specifies the table name as 'wards'
 * - timestamps: Enables createdAt and updatedAt timestamps
 * - paranoid: Enables soft deletes with a deletedAt timestamp
 * - indexes: An array for defining indexes, currently empty
 */
const Ward = sql.define('wards', {
  wardId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  type: {
    type: STRING,
    allowNull: false
  },
  deleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  districtId: {
    type: INTEGER,
    allowNull: false
  }
}, {
  tableName: 'wards',
  timestamps: true,
  initialAutoIncrement: '100001',
  paranoid: true,
  indexes: [
    { name: 'ward_name_index', fields: ['name'], type: 'FULLTEXT' },
    { name: 'ward_type_index', fields: ['type'] },
    { name: 'ward_deleted_index', fields: ['deleted'] },
    { name: 'ward_districtId_index', fields: ['districtId'] },
  ]
})

export {
  Province,
  District,
  Ward
}