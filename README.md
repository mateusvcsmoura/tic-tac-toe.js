# Jogo da Velha (Tic-Tac-Toe)

Este é um jogo da velha simples desenvolvido em JavaScript, HTML e CSS. Ele permite que dois jogadores joguem alternadamente, registrando suas jogadas e mantendo um placar.

## Funcionalidades
- 🔹 Alterna entre os jogadores "X" e "O".
- 🔹 Identifica e destaca as combinações vencedoras.
- 🔹 Exibe uma mensagem de empate se todas as células forem preenchidas sem vencedor.
- 🔹 Mantém um placar atualizado.
- 🔹 Possui um botão para reiniciar o placar.
- 🔹 Reseta automaticamente o tabuleiro após uma jogada vencedora ou empate.

## 🛠 Tecnologias Utilizadas
- **HTML**: Estrutura do jogo.
- **CSS**: Estilização do tabuleiro e efeitos visuais.
- **JavaScript**: Lógica do jogo, detecção de vitórias e placar.

## 🎮 Como Jogar
1. Abra o arquivo `index.html` em um navegador.
2. Clique em uma célula para fazer sua jogada.
3. O jogo alterna automaticamente entre "X" e "O".
4. O vencedor é destacado quando uma combinação de três em linha é atingida.
5. Se houver um vencedor ou empate, o tabuleiro é resetado após 1,5 segundo.
6. O placar é atualizado automaticamente.
7. Use o botão "Reset" para zerar o placar.

## ⚙️ Como Funciona
- Cada célula recebe um `event listener` para capturar o clique do jogador.
- O turno é controlado por uma variável `turn` que alterna entre os jogadores.
- As jogadas de cada jogador são armazenadas em arrays (`xPlayerMoves` e `oPlayerMoves`).
- O jogo verifica se as jogadas correspondem a alguma das condições de vitória predefinidas.
- Se um jogador vencer, as células vencedoras são destacadas.
- Se houver empate, o jogo exibe a mensagem **"Draw!"**.
- O tabuleiro é resetado automaticamente após um curto atraso.
- A função `resetScoreBoard` redefine o placar quando o botão de reset é pressionado.

## 🚀 Melhorias Futuras
- 🏆 Adicionar um modo de jogo contra a CPU com dificuldade ajustável.
- 📜 Criar um histórico de partidas.
- 🎨 Melhorar a interface com animações e efeitos sonoros.
- 🖌 Permitir personalização de cores e temas.

## 🤝 Contribuição
Sinta-se à vontade para sugerir melhorias ou relatar problemas abrindo uma *issue* ou enviando um *pull request*.

## 📜 Licença
Este projeto está sob a licença **MIT**.
