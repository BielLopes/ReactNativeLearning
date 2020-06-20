module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
//O babel é responsavel por fazer o javascript seja convertido para versões entendível
