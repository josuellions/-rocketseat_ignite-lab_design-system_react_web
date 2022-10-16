# Rocketseat - Evento - Ignite LAB - 03

## Educador: Diego Fernandes

## Data: 10/10/2022 a 13/10/2022

- Construindo aplicação desde o Design no Figma
  -- https://www.figma.com/file/Q3kdRbjkueusFc3KG8yXoQ/Ignite-Lab---Design-System?node-id=0%3A1
- Criando projeto React com VITE
- Utilizando os Desing System trazidos do figma para desenvolvimento no code React

> $npm create vite@latest
> $npm i
> $npm run dev
> $npm install -D tailwindcss postcss autoprefixer

- Arquivo de configuração tailwindcss

  > npx tailwindcss init -p

- Story boocks
  -- permite testar o componente sem necessidade de acessar diretamente a tela

  > $npx sb init --builder @storybook/builder-vite --use-npm
  > $ npm run storybook

  -- Configurar para theme dark
  --- /.storybook/manager.js
  --- /.storybook/preview.js

  -- Configurar diretorios
  --- /.storybook/main.js

- Importando TOKEN de Desing System do Figma
  -- Configurar
  --- tailwind.config.cjs

  -- Condicional para Tailwindcss

  > $npm install --save clsx

  -- Radix-UI (Modificar e aceitar TAG HTML via component)

  > $npm install @radix-ui/react-slot

  -- Icons do React

  > $npm i phosphor-react

  -- Checkbox

  > $npm i @radix-ui/react-checkbox

  -- Testes unitarios com Storybook e JEST
  --- url: https://storybook.js.org/addons/@storybook/addon-interactions

  > $npm i -D @storybook/addon-interactions @storybook/jest @storybook/testing-library @storybook/test-runner -D

  -- TESTES NO TERMIMAL com Storybook / JEST
  -- Add no package.json script => "test-storybook": "test-storybook"

  > $npm run test-storybook 
  ou
  >$npm run test-storybook -- --watch ou --watchAll

-- Install AXIOS acesso API

> $ npm i axios

-- Mock Service : Mocar ou simular acesso a um serviço ou API (Frontend)
--- Criar uma API local no proprio navegador
url: https://mswjs.io/ (mock service worker) msw
url: https://storybook.js.org/
url: https://github.com/mswjs/msw-storybook-addon

> $npm i msw msw-storybook-addon -D
> $px msw init public/

- Add no /.storybook/main.cjs
  "staticDirs": [
  "../public"
  ],

  - Add no /.storybook/preview.cjs

  ```
    import { initialize, mswDecorator } from 'msw-storybook-addon';

    // Initialize MSW
    initialize();

    // Provide the MSW addon decorator globally
    export const decorators = [mswDecorator];
  ```

### Deploy continuo CI/CD

- Instalar
  > $npm i @storybook/storybook-deployer
  > $npm run deploy-storybook -- -o storybook-static

-- Criar arquivo configuração
-- /.git/workflows/deploy-docs.yml
-- Configurar quando publicado no GIT em dominio proprio não é necessario
-- /.storybook/main.js

```
 viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ignite-lab-design-system/'
    }

    return config
  }
```

--- Rodar o build localmente antes de subir para o git para criar Branche 'gh-pages'

> $ npm run deploy-storybook

--------------------------------- END ------------------------------------------

- TEMA DO VSCode
  -- Min Theme

TESTE
--------------------------------- END ------------------------------------------
