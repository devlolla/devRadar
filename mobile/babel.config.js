module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

//nem todas as ferramentas entendem o js mais moderno
//ai o babel faz a adaptação p/ navegadores e lugares aonde vamos rodas