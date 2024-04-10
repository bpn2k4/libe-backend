import { STRING, TEXT, BOOLEAN, INTEGER } from 'sequelize'
import { sql } from '../databases/index.js'

export const Product = sql.define('Product', {
  productId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  originPrice: {
    type: INTEGER,
    allowNull: false
  },
  currentPrice: {
    type: INTEGER,
    allowNull: false
  },
  description: {
    type: TEXT,
    allowNull: true
  },
  isDeleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'tb.product',
  timestamps: true,
  paranoid: true,
  initialAutoIncrement: '1000001'
})

export const Attribute = sql.define('Attribute', {
  attributeId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  productId: {
    type: INTEGER,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  value: {
    type: STRING,
    allowNull: false,
  }
}, {
  tableName: 'tb.attribute',
  timestamps: false,
  paranoid: false,
})

export const Variation = sql.define('Variation', {
  variationId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  productId: {
    type: INTEGER,
    allowNull: false,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
}, {
  tableName: 'tb.variation',
  timestamps: false,
  paranoid: false,
})

export const VariationOption = sql.define('VariationOption', {
  variationOptionId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  option: {
    type: STRING,
    allowNull: false,
  },
  image: {
    type: STRING,
    allowNull: true,
  },
}, {
  tableName: 'tb.variation.option',
  timestamps: false,
  paranoid: false,
})

export const Model = sql.define('Model', {
  imageId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  originPrice: {
    type: INTEGER,
    allowNull: false
  },
  currentPrice: {
    type: INTEGER,
    allowNull: false
  },
  remain: {
    type: INTEGER,
    allowNull: false
  },
  sold: {
    type: INTEGER,
    allowNull: false
  },
  total: {
    type: INTEGER,
    allowNull: false
  },
  isDeleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'tb.model',
  timestamps: true,
  paranoid: true,
})

export const Image = sql.define('Image', {
  imageId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  path: {
    type: STRING,
    allowNull: false,
  },
  url: {
    type: STRING,
    allowNull: false,
  },
}, {
  tableName: 'tb.image',
  timestamps: false,
  paranoid: false,
})

export const ProductImage = sql.define("ProductImage", {
  id: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  productId: {
    type: INTEGER,
    allowNull: false,
  },
  imageId: {
    type: INTEGER,
    allowNull: false,
  },
  isPrimary: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  isSecondary: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'tb.product.image',
  timestamps: false,
  paranoid: false,
})

