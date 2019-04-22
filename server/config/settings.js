const db = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || '27017',
  db: process.env.DB_NAME || 'doges_kittos',
};

const crypto_seed = 'some_random_characters consttt SECRET="U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy"';
module.exports = {
  db,
  crypto_seed,
};
