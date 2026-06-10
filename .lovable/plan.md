# Plano de Implementação

## 1. Botões CTA (Hero + Header)

Criar 3 botões com os links:
1. **Lista de Espera** → https://tally.so/r/q4WgRO
2. **Arecê for Kids** (destaque, cor diferente, no meio) → https://areceforkids.lovable.app
3. **Para Investidores** → https://tally.so/r/obzjvx

Estilo:
- Botões 1 e 3: outline na cor `primary` (mesma paleta, visual secundário)
- Botão 2 (meio): preenchido em `accent` (laranja/terracota da paleta) para destaque
- Todos abrem em nova aba (`target="_blank"`, `rel="noopener noreferrer"`)

### 1a. HeroSection.tsx
Adicionar bloco logo após o botão "Conhecer o Produto":
- Layout: `flex flex-col sm:flex-row gap-3 justify-center` para responsividade (empilhados no mobile, em linha no desktop)
- Animação fade-in com delay

### 1b. Header.tsx
Adicionar os mesmos 3 botões na navbar, na ordem 1 → 2 → 3:
- Desktop: à direita do menu de navegação, em linha, tamanho compacto
- Mobile: dentro do menu hamburger, empilhados full-width abaixo dos links existentes
- Mesma regra de cor (botão 2 destacado)

## 2. Footer — Instagram
Em `Footer.tsx`, na seção Contato, adicionar abaixo do email:
```
<a href="https://instagram.com/arece_cosmeticos" target="_blank" rel="noopener noreferrer">
  <Instagram /> @arece_cosmeticos
</a>
```
(O ícone `Instagram` já está importado mas não usado.)

## 3. Equipe — novos membros
Em `TeamSection.tsx` adicionar 2 membros (total = 5):
- **Diogo Maia** — CMO - Chief Marketing Officer
- **Igor Felipe Lima** — CSO - Chief Scientific Officer

Fotos: subir as duas imagens anexadas via `lovable-assets` e referenciar pelo pointer JSON.
- image-3.png (rapaz de óculos, terno) → Diogo Maia
- image-4.png (barba, camisa xadrez) → Igor Felipe Lima

Grid responsivo: alterar de `md:grid-cols-3` para `md:grid-cols-2 lg:grid-cols-3` para acomodar 5 cards de forma equilibrada (2 linhas: 3+2 no desktop grande, 2+2+1 em tablet).

## Detalhes técnicos

- Reaproveitar tokens semânticos existentes (`primary`, `accent`, `primary-foreground`). Nenhuma cor hardcoded.
- Mobile-first: botões empilham, header colapsa no menu mobile.
- Sem mudanças de backend, schema ou dependências.

## Arquivos a modificar
- `src/components/HeroSection.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/TeamSection.tsx`
- `src/assets/diogo.png.asset.json` (novo)
- `src/assets/igor.png.asset.json` (novo)
