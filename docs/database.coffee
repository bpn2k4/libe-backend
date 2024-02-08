Table user {
  userId integer [primary key]
  username varchar
  password varchar
  fullName varchar
  email varchar
  emailVerified bool
  phone varchar
  phoneVerified bool
  role enum
  gender enum
  avatar varchar
  birthday datetime
  addressDefaultId integer
  isLock bool
  createdAt datetime
  updatedAt datetime
  deletedAt datetime
}

Table address {
  addressId integer [primary key]
  userId integer
  name varchar
  phone varchar
  villageId interger
  street varchar
  createdAt datetime
  updatedAt datetime
  deletedAt datetime
}

Table collection {
  collectionId integer [primary key]
  name varchar
  slug varchar
  description varchar
  color varchar
  image varchar
  createdAt datetime
  updatedAt datetime
  deletedAt datetime
}

Table village {
  villageId integer [primary key]
  name varchar
  type varchar
  districtId integer
}

Table district {
  districtId integer [primary key]
  name varchar
  type varchar
  provinceId integer
}

Table province {
  provinceId integer [primary key]
  name varchar
  type varchar
}

Table product {
  productId integer [primary key]
  name varchar
  price integer
  originPrice integer
  description varchar
}

Table variation {
  variationId integer [primary key]
  productId integer
  name varchar
}


Table attribute {
  attributeId integer [primary key]
  productId integer
  attributeName varchar
  attributeValue varchar
}

Table model {
  modelId integer [primary key]
  productId integer
  name varchar
  price integer
  originPrice integer
}

Ref: user.userId < address.userId
Ref: user.addressDefaultId < address.addressId
Ref: address.villageId < village.villageId
Ref: village.districtId < district.districtId
Ref: district.provinceId < province.provinceId
