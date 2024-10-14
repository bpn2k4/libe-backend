import { FindAndCountOptions, FindOptions, Op, sql } from "@databases";
import { JoiValidationError, NotFoundError } from "@errors";
import { Color } from "@models";
import { ServiceHandler } from "@types";
import { ColorValidator } from "@validations";


export const createColor: ServiceHandler = async ({ body: body_ }) => {

  const { body, error } = ColorValidator.validateCreateColor({ body: body_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const color = await Color.create(body)
  return { color }
}

export const getColor: ServiceHandler = async ({ params: params_, query: query_ }) => {

  const { params, query, error } = ColorValidator.validateGetColor({ params: params_, query: query_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const findOption: FindOptions = {
    where: { deleted: false, colorId: params.colorId },
    attributes: { exclude: query.timestamp ? [] : ['deleted', 'createdAt', 'updatedAt', 'deletedAt'] },
    paranoid: false,
  }
  const color = await Color.findOne(findOption)
  if (!color) {
    throw new NotFoundError(`colorId ${params.colorId}`);
  }
  return { color }
}

export const getColors: ServiceHandler = async ({ query: query_ }) => {
  const { query, error } = ColorValidator.validateGetColors({ query: query_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const findOptions: FindAndCountOptions = {
    where: {
      deleted: false,
      ...(query.q && {
        [Op.or]: [
          { name: { [Op.substring]: query.q } },
          { hex: { [Op.substring]: query.q } },
        ]
      })
    },
    attributes: {
      exclude: query.timestamp ? [] : ['deleted', 'createdAt', 'updatedAt', 'deletedAt']
    },
    limit: query.limit,
    offset: query.limit * query.page,
    paranoid: false
  }

  const { rows: colors, count: total } = await Color.findAndCountAll(findOptions)
  return { colors, total }
}

export const updateColor: ServiceHandler = async ({ body: body_, params: params_ }) => {
  const { params, body, error } = ColorValidator.validateUpdateColor({ params: params_, body: body_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const t = await sql.transaction()
  try {
    const color = await Color.findOne({
      where: { colorId: params.colorId, deleted: false },
      transaction: t,
      paranoid: false
    })
    if (!color) {
      throw new NotFoundError(`colorId ${params.colorId}`);
    }
    await color.update(body, { transaction: t })
    await t.commit()
    return { color }
  } catch (error) {
    await t.rollback()
    throw error
  }
}

export const deleteColor: ServiceHandler = async ({ params: params_ }) => {
  const { params, error } = ColorValidator.validateDeleteColor({ params: params_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const t = await sql.transaction()
  try {
    const color = await Color.findOne({
      where: { colorId: params.colorId, deleted: false },
      transaction: t,
      paranoid: false
    })
    if (!color) {
      await t.commit()
      throw new NotFoundError(`colorId ${params.colorId}`);
    }
    await color.update({ deleted: true }, { transaction: t })
    await color.destroy({ transaction: t })
    await t.commit()
    return { colorId: params.colorId }
  } catch (error) {
    await t.rollback()
    throw error
  }
}

export const deleteColors: ServiceHandler = async ({ body: body_ }) => {
  const { body, error } = ColorValidator.validateDeleteColors({ body: body_ })
  if (error) {
    throw new JoiValidationError(error)
  }
  const t = await sql.transaction()
  try {
    await Color.update({ deleted: true }, { where: { colorId: { [Op.in]: body } }, transaction: t })
    await Color.destroy({ where: { colorId: { [Op.in]: body } }, transaction: t })
    await t.commit()
    return { colorIds: body }
  } catch (error) {
    await t.rollback()
    throw error
  }
}