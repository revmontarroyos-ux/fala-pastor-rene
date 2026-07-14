# Fala Pastor Renê — site definitivo

Projeto em **Next.js + React + TypeScript + Tailwind CSS + Framer Motion**, configurado para gerar um site estático e publicar automaticamente no GitHub Pages.

## Antes de publicar: três alterações obrigatórias

Abra `config/site.ts` e altere:

1. `checkoutUrl`: cole o link real do checkout da Kiwify.
2. `contactEmail`: informe um e-mail público de atendimento.
3. `instagramUrl` e `youtubeUrl`: substitua pelos canais corretos.

Também revise os 12 temas em `components/ThemesSection.tsx` para que correspondam ao sumário final do PDF.

## Publicação no repositório existente

1. Faça uma cópia de segurança dos arquivos atuais.
2. Descompacte este ZIP.
3. No repositório `Sodoma-gomorra`, apague ou substitua os arquivos antigos.
4. Envie **todo o conteúdo interno desta pasta**, inclusive `.github`.
5. No GitHub, acesse `Settings > Pages`.
6. Em `Source`, selecione **GitHub Actions**.
7. Faça um commit na branch `main`.
8. Abra a aba `Actions` e aguarde o fluxo “Publicar no GitHub Pages”.

## Rodar no computador

Instale Node.js 22 ou superior e execute:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Gerar versão estática

```bash
npm run build
```

Os arquivos prontos ficarão na pasta `out`.

## Contador de oferta

O contador fica desativado por padrão para evitar urgência falsa. Para ativá-lo, defina uma data real em `offerEndsAt`, dentro de `config/site.ts`.

## Analytics e Meta Pixel

Preencha `analyticsId` e `metaPixelId` em `config/site.ts`. Os scripts somente serão inseridos quando os campos tiverem valores.

## Domínio próprio

Ao usar domínio próprio, revise `siteUrl`, `robots.txt`, `sitemap.xml` e a configuração de `basePath` em `next.config.mjs`.

## Observação jurídica

As páginas de privacidade e termos são modelos iniciais. Devem ser revisadas de acordo com as integrações realmente ativadas, o fluxo de dados e a operação comercial.
