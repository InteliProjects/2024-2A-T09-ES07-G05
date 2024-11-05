# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="assets/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width=40% height=40%></a>
</p>

<br>

# Automação com Reconhecimento de Voz

# Grupo Lexis 

## Solução Cora - Central de Organização e Regulamentação Automática

## 👨‍🎓 Integrantes: 
- <a href="https://www.linkedin.com/in/biancablins/">Bianca Borges</a>
- <a href="https://www.linkedin.com/in/breno-santana7/">Breno Santana</a>
- <a href="https://www.linkedin.com/in/gabriellysilvavitor/">Gabrielly Vitor</a>
- <a href="https://www.linkedin.com/in/isabella-fernandes-saldanha-138a631b4/">Isabella Saldanha</a>
- <a href="https://www.linkedin.com/in/paulapiva03/">Paula Piva</a>

## 👩‍🏫 Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/hermano-peixoto-1091796/">Hermano Peixoto</a>

### Instrutores
- <a href="https://www.linkedin.com/in/reginaldo-arakaki-9574222b/">Reginaldo Arakaki</a>
- <a href="https://www.linkedin.com/in/vthayashi/">Victor Hayashi</a>
- <a href="https://www.linkedin.com/in/hermano-peixoto-1091796/">Hermano Peixoto</a>
- <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a>
- <a href="https://www.linkedin.com/in/geraldo-magela-severino-vasconcelos-22b1b220/">Geraldo Magela</a>
- <a href="https://www.linkedin.com/in/lisane-valdo/">Lisane Valdo</a>
- <a href="https://www.linkedin.com/in/anacristinadossantos/">Ana Cristina dos Santos</a>

## 📜 Descrição

&emsp;&emsp;Este projeto, intitulado Cora, foi desenvolvido pelo grupo Lexis, visando o desafio de otimizar o processo de acompanhamento das mudanças regulatórias, na indústria financeira no Brasil. Este desafio é relevante para instituições que buscam manter a conformidade e aumentar a eficiência operacional. Partindo então dessa relevância, a solução Cora foi desenvolvida, com o objetivo de ser uma aplicação web que emprega o Processamento de Linguagem Natural (NLP) para revolucionar a gestão de mudanças regulatórias, especificamente para o parceiro Bank of America (BofA).

&emsp;&emsp;Cora é projetada para atender especificamente às necessidades do BofA na gestão de suas Local Regulatory Requirements (LRRs). Esta solução permite a antecipação, captura e implementação eficaz de alterações regulatórias. Além disso, a interface da Cora segue o padrão do guia de estilos do BofA, sendo eficiente e altamente interativa, facilitando a experiência do usuário. Implementando esta solução, o BofA não apenas melhora sua conformidade regulatória, mas também eleva os níveis de eficiência, garantindo uma vantagem competitiva sustentável no mercado financeiro brasileiro.

### Funcionalidades Avançadas da Cora:

- **Busca Inteligente de Texto e Voz:** Cora facilita a consulta às regulamentações utilizando um sistema avançado de busca em texto ou por reconhecimento de voz, o que agiliza significativamente o processo de identificação e análise de mudanças regulatórias.
- **Interface Intuitiva Inspirada nas Cores do BofA:** A interface da Cora foi projetada com base nas cores principais do BofA (azul, vermelho e branco), proporcionando uma experiência visual coerente e familiar. Além de visualmente agradável, a interface prioriza a facilidade de uso, garantindo uma navegação simples e intuitiva para os usuários.
- **Exibição das Regulamentações Mais Recentes:** A plataforma destaca as normativas mais recentes, assegurando que os usuários estejam sempre atualizados com as últimas mudanças.
- **Nível de Confiabilidade:** O Objetivo do sistema é sinalizar quando muitas tags estão sendo removidas das normas, indicando que o modelo de LLM se equivocou no tagueamento, funcionando assim como uma curadoria.
- **Sistema de Tagueamento:** As normas são etiquetadas com tags para facilitar a organização e a recuperação rápida de informações relacionadas.
- **Filtros Avançados na Tabela:** Os usuários podem filtrar as regulamentações na tabela de visualização, permitindo uma navegação eficiente e direcionada conforme a necessidade do usuário.

### Benefícios da Cora:

- **Redução de Erros e Omissões:** Por automatizar o acompanhamento e análise das mudanças, Cora minimiza o risco de não conformidade por falhas humanas.
- **Agilidade e Precisão no Processo Regulatório:** A aplicação acelera e refina a adaptação às novas regulamentações, permitindo respostas rápidas e precisas às exigências regulatórias.
- **Aumento da Eficiência Operacional:** Com a otimização dos processos de monitoramento e análise, os colaboradores podem dedicar mais tempo a atividades estratégicas, aumentando o valor agregado ao trabalho regulatório.

## 📁 Estrutura de pastas

```
(raiz do projeto)
├── assets
│   └── imagens
├── docs
│   ├── imagens
│   ├── Estimativa de investimento - Lexis.xlsx
│   └── index.md
├── src
│   ├── backend
│   │   └── app
│   │       └── service
│   │           ├── busca
│   │           ├── core
│   │           ├── pln_intencao
│   │           ├── pln_taguamento
│   │           ├── speech_to_text
│   │           └── webscraping
│   └── frontend
│       └── src
│           ├── assets
│           ├── components
│           ├── testes
│           ├── testes_integracao
│           ├── notebooks
├── readme.md
```

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

- <b>`assets`</b>: Aqui estão os arquivos relacionados a parte gráfica do projeto, ou seja, as imagens e links de vídeos que os representam, como a logo do grupo e logo do parceiro, análises de mercado e etc.

- <b>`docs`</b>: Aqui estão todos os documentos referentes ao projeto. Há também um arquivo README para o grupo registrar a localização de cada artefato.

- <b>`src`</b>: Todo o código fonte criado para o desenvolvimento do projeto, incluindo backend, frontend e notebooks.

- <b>`README.md`</b>: Arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

## 🔧 Instalação

&emsp;&emsp;Para instalar o projeto exibido, primeiro clone o repositório utilizando `git clone https://github.com/Inteli-College/2024-2A-T09-ES07-G05`. Em seguida, navegue até a pasta do projeto e instale as dependências.

&emsp;&emsp;No frontend, execute `npm install` para instalar as dependências necessárias. No backend, em cada um dos serviços, execute `pip install -r requirements.txt` para instalar as bibliotecas Python. Certifique-se de que tanto o Node.js quanto o Python estão instalados corretamente em sua máquina.

&emsp;&emsp;Após configurar as dependências, execute os serviços separadamente:

- Para rodar o serviço de busca, navegue até o diretório apropriado e execute: `uvicorn main:app --reload --port 8000`.
- Para rodar o core, execute: `uvicorn main:app --reload --port 8080`.
- Para rodar os serviços de tagueamento, PLN e web scraping, utilize: `python main.py`.

&emsp;&emsp;O frontend estará acessível via `localhost`, assim como os serviços backend. Certifique-se de verificar a documentação específica do projeto para qualquer dúvida ou etapa adicional.

## 🗃 Histórico de lançamentos

* 0.1.0 - 16/08/2024
    * Entendimento do Negócio e Design.
* 0.1.1 - 30/08/2024
    * Sistema de NLP.
* 0.1.2 - 13/09/2024
    * . Construção do Backend.
* 0.1.3 - 27/09/2024
    * . Construção do Frontend.
* 0.1.5 - 10/10/2024
    * Entrega Final.

## 📋 Licença/License

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"> CORA by <a rel="cc:attributionURL dct:creator" property="cc:attributionName">Inteli, <a href="https://www.linkedin.com/in/biancablins/">Bianca Borges</a>,<a href="https://www.linkedin.com/in/breno-santana7/">Breno Santana</a>,<a href="https://www.linkedin.com/in/gabriellysilvavitor/">Gabrielly Vitor</a>,<a href="https://www.linkedin.com/in/isabella-fernandes-saldanha-138a631b4/">Isabella Saldanha</a>,<a href="https://www.linkedin.com/in/paulapiva03/">Paula Piva</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>
