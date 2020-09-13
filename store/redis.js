// TODO LO DE REDIS
const redis = require("redis");
const config = require("../config");

const client = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password,
});

function list(table) {
  return new Promise((res, rej) => {
    client.get(table, (err, data) => {
      if (err) {
        return rej(err.message);
      }

      let rest = data || null;
      if (data) {
        rest = JSON.parse(data);
      }
      res(rest);
    });
  });
}

function get(table, id) {
  return new Promise((res, rej) => {
    client.get(table, id, (err, data) => {
      if (err) {
        return rej(err.message);
      }

      let rest = data || null;
      if (data) {
        rest = JSON.parse(data);
      }
      res(rest);
    });
  });
}

module.exports = {
  list,
  get,
};
