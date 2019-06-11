import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Tean, { schema } from './model'

const router = new Router()
const { text } = schema.tree

/**
 * @api {post} /Teans Create tean
 * @apiName CreateTean
 * @apiGroup Tean
 * @apiParam text Tean's text.
 * @apiSuccess {Object} tean Tean's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tean not found.
 */
router.post('/',
  body({ text.trim().replace(/ /g, '%20') }),
  create)

/**
 * @api {get} /Teans Retrieve teans
 * @apiName RetrieveTeans
 * @apiGroup Tean
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of teans.
 * @apiSuccess {Object[]} rows List of teans.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /Teans/:id Retrieve tean
 * @apiName RetrieveTean
 * @apiGroup Tean
 * @apiSuccess {Object} tean Tean's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tean not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /Teans/:id Update tean
 * @apiName UpdateTean
 * @apiGroup Tean
 * @apiParam text Tean's text.
 * @apiSuccess {Object} tean Tean's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Tean not found.
 */
router.put('/:id',
  body({ text }),
  update)

/**
 * @api {delete} /Teans/:id Delete tean
 * @apiName DeleteTean
 * @apiGroup Tean
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Tean not found.
 */
router.delete('/:id',
  destroy)

export default router
