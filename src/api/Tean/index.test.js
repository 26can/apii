import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Tean } from '.'

const app = () => express(apiRoot, routes)

let tean

beforeEach(async () => {
  tean = await Tean.create({})
})

test('POST /Teans 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ text: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.text).toEqual('test')
})

test('GET /Teans 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /Teans/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${tean.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tean.id)
})

test('GET /Teans/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /Teans/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${tean.id}`)
    .send({ text: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(tean.id)
  expect(body.text).toEqual('test')
})

test('PUT /Teans/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ text: 'test' })
  expect(status).toBe(404)
})

test('DELETE /Teans/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${tean.id}`)
  expect(status).toBe(204)
})

test('DELETE /Teans/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
