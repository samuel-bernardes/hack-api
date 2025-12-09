# Hack API 🔐⚠️
API propositalmente vulnerável para fins acadêmicos.  
Projeto utilizado na disciplina **Redes de Computadores** (CEFET-MG) com o objetivo de demonstrar técnicas de exploração, detecção e prevenção de intrusão em serviços web modernos.

---

## 📌 Objetivo
O projeto simula uma API HTTP com vulnerabilidades reais encontradas em aplicações modernas, permitindo:
- análise do tráfego
- execução de ataques automatizados
- estudo de protocolos de aplicação
- avaliação de mecanismos de mitigação

---

## 🧪 Vulnerabilidades demonstradas

### 1. Vazamento de informações sensíveis
Endpoint público que expõe usuários e senhas em texto plano, permitindo coleta e uso de credenciais.

### 2. Ataque de força bruta (Brute Force)
Endpoint de login sem proteção adequada contra tentativas repetidas. Script automatizado tenta diferentes senhas.

### 3. Impersonação via HTTP Header Injection
O sistema confia em cabeçalhos manipuláveis pelo cliente, permitindo acesso administrativo sem credenciais reais.

---

## 🚀 Tecnologias utilizadas
- Node.js
- TypeScript
- Express
- Python (scripts de ataque)
- Faker data users (dados fictícios)

---

## 📁 Estrutura do projeto

src/ \
├─ data/ \
├─ utils/ \
├─ index.ts \
scripts/ \
├─ brute_force.py \
├─ header_attack.py

---

## ▶️ Como executar
```bash
npm install
npm run dev
```
API disponível em: http://localhost:3000

## 🧨 Executando os ataques
Força bruta
```bash
python3 scripts/brute_force.py
```
Header Injection
```bash
python3 scripts/header_attack.py
```

## 🔒 Aviso importante

Este projeto não deve ser utilizado em produção.
É apenas uma aplicação didática contendo falhas intencionais para fins de estudo, testes de segurança e experimentação acadêmica.


## 📚 Licença

Uso educacional apenas.

---
