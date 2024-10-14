import { JoiValidationError, NotFoundError } from '@errors'
import { District, Province, Ward } from '@models'
import { ServiceHandler } from '@types'
import { PlacementValidator } from '@validations'
import { FindAndCountOptions, FindOptions, Op, sql } from '@databases'


export const createProvince: ServiceHandler = async ({ body: body_ }) => {

  const { body, error } = PlacementValidator.validateCreateProvince({ body: body_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const province = await Province.create({
    ...body
  })
  return { province }
}

export const getProvince: ServiceHandler = async ({ params: params_, query: query_ }) => {
  const { params, query, error } = PlacementValidator.validateGetProvince({ params: params_, query: query_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const findOption: FindOptions = {
    where: {
      provinceId: params.provinceId,
      deleted: false,
    },
    attributes: {
      exclude: query.timestamp ? [] : ['deleted', 'createdAt', 'updatedAt', 'deletedAt']
    },
    paranoid: false
  }
  const province = await Province.findOne(findOption)
  return { province, params, query }
}

export const getProvinces: ServiceHandler = async ({ query: query_ }) => {
  const { query, error } = PlacementValidator.validateGetProvinces({ query: query_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const findOption: FindAndCountOptions = {
    where: {
      deleted: false,
      ...(query.type && { type: query.type }),
      ...(query.q && { name: { [Op.substring]: query.q } })
    },
    attributes: {
      exclude: query.timestamp ? [] : ['deleted', 'createdAt', 'updatedAt', 'deletedAt']
    },
    limit: query.limit,
    offset: query.limit * query.page,
    paranoid: false
  }
  const { rows: provinces, count: total } = await Province.findAndCountAll(findOption)
  return { provinces, total }
}

export const updateProvince: ServiceHandler = async ({ body: body_ }) => {
  const { body, error } = PlacementValidator.validateUpdateProvince({ body: body_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  return { body: body }
}

export const deleteProvince: ServiceHandler = async ({ body: body_ }) => {
  return { message: "This will be implemented soon!" }
}

export const deleteProvinces: ServiceHandler = async ({ body: body_ }) => {
  return { message: "This will be implemented soon!" }
}

export const getDistrictsInProvince: ServiceHandler = async ({ params: params_, query: query_ }) => {
  const { params, query, error } = PlacementValidator.validateGetDistrictsInProvince({ params: params_, query: query_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const province = await Province.findOne({
    where: {
      provinceId: params.provinceId,
      deleted: false,
    }
  })
  if (!province) {
    throw new NotFoundError(`provinceId ${params.provinceId}`)
  }
  const findOption: FindAndCountOptions = {
    where: {
      provinceId: params.provinceId,
      deleted: false,
      ...(query.type && { type: query.type }),
      ...(query.q && { name: { [Op.substring]: query.q } })
    },
    attributes: {
      exclude: [
        ...(query.timestamp ? [] : ['deleted', 'createdAt', 'updatedAt', 'deletedAt']),
        ...(query.provinceId ? [] : ['provinceId']),
      ]
    },
    limit: query.limit,
    offset: query.limit * query.page,
    paranoid: false
  }
  const { rows: districts, count: total } = await District.findAndCountAll(findOption)
  return { districts, total }
}

export const createDistrictInProvince: ServiceHandler = async ({ body: body_ }) => {
  return { message: "This will be implemented soon!" }
}

export const createDistrict: ServiceHandler = async ({ body: body_ }) => {
  const { body, error } = PlacementValidator.validateCreateDistrict({ body: body_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const t = await sql.transaction()
  try {
    const province = await Province.findOne({
      where: {
        provinceId: body.provinceId,
        deleted: false
      },
      transaction: t,
      paranoid: false
    })
    if (!province) {
      throw new NotFoundError(`provinceId ${body.provinceId}`)
    }
    const district = await District.create({
      ...body
    }, { transaction: t })
    await t.commit()
    return { district }
  } catch (error) {
    await t.rollback()
    throw error
  }
}

export const getWardsInDistrict: ServiceHandler = async ({ params: params_, query: query_ }) => {

  const { params, query, error } = PlacementValidator.validateGetWardsInDistrict({ params: params_, query: query_ })

  if (error) {
    throw new JoiValidationError(error)
  }

  const district = await District.findOne({
    where: {
      districtId: params.districtId,
      deleted: false,
    }
  })

  if (!district) {
    throw new NotFoundError(`provinceId ${params.districtId}`)
  }

  const findOption: FindAndCountOptions = {
    where: {
      districtId: params.districtId,
      deleted: false,
      ...(query.type && { type: query.type }),
      ...(query.q && { name: { [Op.substring]: query.q } })
    },
    attributes: {
      exclude: [
        ...(query.timestamp ? [] : ['deleted', 'createdAt', 'updatedAt', 'deletedAt']),
        ...(query.districtId ? [] : ['districtId']),
      ]
    },
    limit: query.limit,
    offset: query.limit * query.page,
    paranoid: false
  }

  const { rows: wards, count: total } = await Ward.findAndCountAll(findOption)

  return { wards, total }
}

export const getDistricts: ServiceHandler = async ({ body: body_ }) => {
  return { message: "This will be implemented soon!" }
}

export const createWard: ServiceHandler = async ({ body: body_ }) => {
  const { body, error } = PlacementValidator.validateCreateWard({ body: body_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const t = await sql.transaction()
  const district = await District.findOne({
    where: {
      districtId: body.districtId,
      deleted: false
    },
    transaction: t,
    paranoid: false
  })
  if (!district) {
    await t.commit()
    throw new NotFoundError(`districtId ${body.districtId}`)
  }
  try {
    const ward = await Ward.create({
      ...body
    }, { transaction: t })
    await t.commit()
    return { ward }
  } catch (error) {
    await t.rollback()
    throw error
  }
}


