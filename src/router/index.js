import express from 'express';
import apiRoutes from './api';
class Router {
  constructor() {
    this.router = express.Router();
    this.apiRoutes = apiRoutes;
  }
  create(app) {
    // TODO : attach middleware
    // TODO : attach routes
    this._attachApiRoutes();
    // TODO : handle 404 pages
    // TODO : handle exceptions
    // TODO : register routes
    app.use(this.router);
  }

  _attachApiRoutes() {
    this._attachRoutes(this.apiRoutes, '/api');
  }

  _attachRoutes(routeGroups, prefix = '') {
    routeGroups.forEach(({ group, routes }) => {
      routes.forEach(({ method, path, handler }) => {
        this.router[method](prefix + group.prefix + path, handler);
      });
    });
  }
}

export default new Router();
