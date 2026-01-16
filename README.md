# 🧮 Calculadora Simples

Uma calculadora web interativa desenvolvida com HTML5, CSS3 e JavaScript puro.

## ✨ Funcionalidades

- ✅ Soma, subtração, multiplicação e divisão
- ✅ Suporte a números decimais
- ✅ Proteção contra divisão por zero
- ✅ Botão de limpeza (C) para resetar
- ✅ Interface responsiva
- ✅ Cálculos em cadeia

## 🛠️ Tecnologias

- HTML5 - Estrutura semântica
- CSS3 - Estilização e responsividade
- JavaScript - Lógica de cálculo

## 🚀 Como Usar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Denner-Dev/calculadora.git
   cd calculadora
   ```

2. Abra `index.html` no navegador (duplo clique)

### Uso

1. Clique nos botões numéricos (0-9) para inserir números
2. Clique em um operador (+, -, *, /) para escolher a operação
3. Insira o segundo número
4. Clique em **=** para ver o resultado
5. Clique em **C** para limpar e recomeçar

## 📁 Estrutura

```
calculadora/
├── index.html      # Estrutura HTML
├── style.css       # Estilos CSS
├── script.js       # Lógica JavaScript
└── README.md       # Este arquivo
```

## 🔍 Principais Funções

- `appendNumber(number)` - Adiciona dígito ao número
- `appendOperation(operation)` - Define a operação
- `operate(a, b, op)` - Executa operação matemática
- `calculate()` - Calcula resultado final
- `clearDisplay()` - Reseta a calculadora

##  Licença

MIT
