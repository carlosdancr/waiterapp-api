# WaiterApp

## 📄 Descrição

O WaiterApp é uma ferramenta projetada para facilitar o trabalho de garçons, agilizando o processo de atendimento e gestão de pedidos. O objetivo do app é melhorar a eficiência dos serviços em restaurantes, bares e cafés.

Funcionalidades principais:
- App mobile para o garçom anotar os pedidos
- Dashboard web para visualização dos pedidos realizados
- Comunicação em tempo real com WebSockets

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- Multer
- Socket.io

## ⚙️ Como Executar o Projeto

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/carlosdancr/waiterapp-api
   cd waiterapp-api
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure o ambiente:**
   - Certifique-se de que o MongoDB está rodando localmente na porta padrão (`mongodb://localhost:27017`).
   - (Opcional) Crie um arquivo `.env` para variáveis de ambiente, se necessário.

4. **Execute o projeto em modo desenvolvimento:**
   ```sh
   npm run dev
   ```

5. **Acesse a API:**
   - O servidor estará disponível em: [http://localhost:3001](http://localhost:3001)

## 💡 Exemplos de Uso

- **Listar categorias:**
  `GET /categories`

- **Criar produto:**
  `POST /products`
  (com upload de imagem via multipart/form-data)

- **Criar pedido:**
  `POST /orders`

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
