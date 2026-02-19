# Diretrizes de Design & UX: LP Pós Nutrição Avançada

O time de design (liderado pela **Aria**) foca em uma página que respira **Autoridade Científica** com **Conversão de Alta Performance**. Abaixo, o detalhamento para a implementação.

---

## 🎨 1. Identidade Visual & Cores (Vibe "Science Premium")

A paleta deve fugir do "verde nutrição" genérico e buscar tons que transmitam confiança médica e sofisticação.

| Elemento | Sugestão de Cor (Hex) | Justificativa |
| :--- | :--- | :--- |
| **Fundo Principal** | `#F8FAFC` (Off-white) | Limpeza visual, remete ao ambiente clínico. |
| **Texto/Contraste** | `#1E293B` (Slate/Deep Blue) | Autoridade, seriedade e excelente legibilidade. |
| **Ação/CTA** | `#F59E0B` (Amber/Gold) | Cor de urgência e valor (Mês do Consumidor). Destaca no azul. |
| **Destaque/Saúde** | `#0D9488` (Teal/Esmeralda) | Conexão com saúde e ciência sem ser o óbvio "alface". |

**Tipografia**:
- **Headlines**: *Inter* ou *Montserrat* (Bold/Extra Bold) - Modernas e robustas.
- **Corpo**: *Inter* (Regular/Medium) - Focada em legibilidade.

---

## 🏗️ 2. Blocos de Construção (Hierarchy)

A página deve seguir o fluxo cognitivo do avatar: **Insegurança -> Prova de Valor -> Solução -> Oferta Irresistível.**

1.  **Hero Block (Página de Dobra)**:
    - Fundo com imagem do Ney Felipe em alta definição (estúdio/clínico).
    - Headline com peso visual máximo.
    - Formulário de cadastro limpo (e-mail + WhatsApp).
2.  **The "Gap" Section (Dor)**:
    - Bloco com fundo ligeiramente mais escuro.
    - Ícones "limpos" (estilo Apple) listando o que a faculdade não ensinou.
3.  **The Master Class (O Evento)**:
    - Card com bordas arredondadas e sombra suave (*Glassmorphism* leve).
    - Detalhes do dia 17/03 com contagem regressiva.
4.  **Social Proof (Depoimentos)**:
    - **SIM, ESSENCIAL.** O avatar sente insegurança ("Será que eu consigo?"). Ver outros que saíram da insegurança gera o "espelhamento".
    - Formato: Carrossel de vídeos curtos ou prints de WhatsApp com fotos dos alunos.
5.  **The Solution (Pós-graduação)**:
    - Explicação técnica: Selo MEC, 12 meses, Disciplinas.
    - Uso de fotos dos outros 10 professores (Authority stack).
6.  **Offer Block (Mês do Consumidor)**:
    - Background vibrante ou com borda dourada.
    - Preço riscado (Ancoragem DEF) vs Preço Especial.
    - Badge: "ÚLTIMA CHANCE - 50 PRIMEIROS GANHAM KIT FÍSICO".
7.  **FAQ**: Acordeon simples para tirar dúvidas técnicas.

---

## ✨ 3. Efeitos e Micro-interações

Para uma experiência premium e "viva":

-   **Sticky Header**: Navbar que encolhe ao scroll, mantendo o botão "Quero minha vaga" sempre visível.
-   **Scroll Reveal**: Elementos surgindo suavemente de baixo para cima ao navegar.
-   **Hover States**: Botões de CTA com pulso leve ou brilho dourado ao passar o mouse.
-   **Glassmorphism**: Uso de fundos desfocados em cards de bônus para elevar o nível estético.
-   **Mobile First**: Botão de CTA fixo no rodapé no mobile para facilitar a conversão.

---

## 📝 4. Diretrizes para Depoimentos (Social Proof)

Não coloque qualquer depoimento. Foque nos que atacam as dores do avatar:
- **Exemplo 1**: "Eu tinha medo de atender pacientes obesos, a Pós me deu o passo a passo..."
- **Exemplo 2**: "Em 3 meses de curso, comecei a cobrar 50% mais caro na consulta."
- **Estilo**: Use fotos reais dos alunos. Design "Instagramável" (layouts que parecem posts de rede social convertem melhor para esse público jovem).

---

### 🚀 Resumo para o Desenvolvedor:
> A página deve ser rápida (Performance no mobile), limpa (clínica) mas com contrastes fortes (autoridade). O foco absoluto é o botão de cadastro no topo e o CTA de compra no final.
