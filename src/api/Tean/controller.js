import { success, notFound } from '../../services/response/'
import { Tean } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Tean.create(body)
    .then((tean) => tean.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Tean.count(query)
    .then(count => Tean.find(query, select, cursor)
      .then((teans) => ({
        count,
        rows: teans.map((tean) => tean.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Tean.findById(params.id)
    .then(notFound(res))
    .then((tean) => tean ? tean.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Tean.findById(params.id)
    .then(notFound(res))
    .then((tean) => tean ? Object.assign(tean, body).save() : null)
    .then((tean) => tean ? tean.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Tean.findById(params.id)
    .then(notFound(res))
    .then((tean) => tean ? tean.remove() : null)
    .then(success(res, 204))
    .catch(next)
