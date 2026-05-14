# Elementor port

Esta pasta contem uma versao do layout pronta para uso no Elementor via widget HTML.

## Arquivos

- `html-widget.html`: codigo completo para colar em um widget HTML do Elementor.
- `elementor-template.json`: template para importar no Elementor.
- `assets/`: imagens usadas pelo layout.

## Como usar importando o JSON

1. Envie a pasta `assets` para o WordPress, por exemplo em `/wp-content/uploads/world-invest-assets/`.
2. Abra `elementor-template.json` e substitua todos os caminhos `assets/` pela URL publica da pasta enviada.
   Exemplo: `https://seudominio.com/wp-content/uploads/world-invest-assets/`.
3. No WordPress, acesse **Templates > Saved Templates** ou **Elementor > Templates**.
4. Clique em **Import Templates** e selecione `elementor-template.json`.
5. Insira o template na pagina desejada e use layout **Elementor Canvas** ou **Full Width**.

## Como usar colando no widget HTML

1. Envie a pasta `assets` para o WordPress, por exemplo em `/wp-content/uploads/world-invest-assets/`.
2. Abra `html-widget.html` e substitua todos os caminhos `assets/` pela URL publica da pasta enviada.
   Exemplo: `https://seudominio.com/wp-content/uploads/world-invest-assets/`.
3. No Elementor, adicione um widget **HTML** em uma pagina em branco/full width.
4. Cole o conteudo completo de `html-widget.html`.
5. Nas configuracoes da pagina, use layout **Elementor Canvas** ou **Full Width** para preservar o visual de landing page.

## Observacoes

- O CSS foi isolado com o prefixo `wi-` para reduzir conflito com tema e plugins.
- O banner de data continua dinamico em espanhol.
- As animacoes de entrada e o efeito do botao foram mantidos.
