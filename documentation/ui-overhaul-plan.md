# 🍎 UI Overhaul Plan: Steve Jobs God Mode

O objetivo é elevar o nível visual de "Página de Vendas Dark" para "Experiência Digital Premium".

## Principais Mudanças

### 1. Atmosfera e Fundo Profundo (`index.css`)
*   **De:** Gradientes lineares simples.
*   **Para:** `Radial Gradients` complexos para criar "spots" de luz, imitando iluminação de estúdio.
*   **Noise:** Adicionar uma textura de granulação (`noise`) sutil para evitar *banding* e dar textura premium.

### 2. Glassmorphism 2.0 (Apple Style)
*   Backdrop-filter: `blur(20px)` ou mais.
*   Bordas: Extremamente sutis (`1px solid rgba(255,255,255,0.08)`).
*   Sombra: `box-shadow` difusa e colorida para dar profundidade (glow).

### 3. Tipografia Editorial
*   **Headlines:** Tracking (espaçamento) mais apertado para títulos grandes (-0.02em) para sensação de "Design Gráfico".
*   **Corpo:** Contraste perfeito. Nada de cinza chapado. Uso de off-white (`#F1F5F9`) sobre dark.

### 4. Componentes Chave

#### **Hero Section**
*   Layout centralizado, mas com "respiro" absurdo.
*   Headline com gradiente metálico/dourado suave, não amarelo.
*   Botão: Sem borda grossa. Efeito de brilho interno (`inset box-shadow`).

#### **Cards (PainPoints & Benefits)**
*   Remover fundos brancos chapados.
*   Usar superfícies escuras translúcidas sobre o fundo texturizado.
*   Ícones: Minimalistas, traço fino (Lucide/Feather style).

#### **Bio (Ney Felipe)**
*   Estilo **Bento Grid** (Grades assimétricas, cantos arredondados perfeitos).
*   Foto recortada com qualidade máxima.

## Ação Imediata
Reescrever `index.css` com as novas variáveis e classes utilitárias de "God Mode".
