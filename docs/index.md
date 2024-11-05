<table>
<tr>
<Table>
  <tr>
    <td><a href=""><img src="/docs/images/bank.png" alt="Bank Of America" border="0" width="150"></a></td>
    <td>
      <a href="https://www.inteli.edu.br/"><img src="/docs/images/logo-inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="150"></a>
    </td>
  </tr>
</table>

# Projeto Cora

## Grupo Lexis

### :student: Integrantes

- <a href="https://www.linkedin.com/in/username/">Breno Santana</a>
- <a href="https://www.linkedin.com/in/username/">Bianca Borges</a>
- <a href="https://www.linkedin.com/in/username/">Isabella Saldanha</a>
- <a href="https://www.linkedin.com/in/username/">Gabrielly Vitor</a>
- <a href="https://www.linkedin.com/in/username/">Paula Piva</a>

# Sumário

- [1. Visão Geral do Projeto](#1-visão-geral-do-projeto)
  - [1.1 Entendimento do Parceiro](#11-entendimento-do-parceiro)
    - [1.1.1 Partes Interessadas](#111-partes-interessadas)
    - [1.1.2 Análise da Indústria](#112-análise-da-indústria)
    - [1.1.3 Modelo de Negócio](#113-modelo-de-negócio)
    - [1.1.4 Tendências](#114-tendências)
  - [1.2 Problema (Business Drivers)](#12-problema-business-drivers)
  
- [2. Proposta da Solução](#2-proposta-da-solução)
  - [2.1 Descritivo Geral da Solução](#21-descritivo-geral-da-solução)
  - [2.2 Benefícios da Solução](#22-benefícios-da-solução)
  - [2.3 Proposta de Valor (Value Proposition Canvas)](#23-proposta-de-valor-value-proposition-canvas)
  - [2.4 Matriz de Risco](#24-matriz-de-risco)
  - [2.5 Estimativa de Investimento](#25-estimativa-de-investimento)

- [3. Entendimento de Design](#3-entendimento-de-design)
  - [3.1 Análise dos Usuários](#31-análise-dos-usuários)
    - [3.1.1 Personas](#311-personas)
  - [3.2 Experiência do Usuário](#32-experiência-do-usuário)
  - [3.3 Proposta de UX](#33-proposta-de-ux)
    - [3.3.1 Wireframes](#331-wireframes)
  - [3.4 Mockup](#34-mockup)
  - [3.5 Interface de Usuário](#35-interface-de-usuário)
    - [3.5.1 Instruções de Uso e Teste](#351-instruções-de-uso-e-teste)
  - [3.6 Pilha de Tecnologias](#36-pilha-de-tecnologias)

- [4. Projeto de Solução](#4-projeto-de-solução)
  - [4.1 Arquitetura da Solução](#41-arquitetura-da-solução)
    - [4.1.1 Análise de Requisitos](#411-análise-de-requisitos)
    - [4.1.2 Proposta de Arquitetura](#412-proposta-de-arquitetura)
  - [4.2 Padrões de Trabalho](#42-padrões-de-trabalho)
  - [4.3 API Speech to Text](#43-api-speech-to-text)
  - [4.4 Projeto de Banco de Dados](#44-projeto-de-banco-de-dados)
  - [4.5 Implementação do Algoritmo NLP](#45-implementação-do-algoritmo-nlp)
  - [4.6 Integração entre Serviços](#46-integração-entre-serviços)

- [5. Testes de Software](#5-testes-de-software)
  - [5.1 Teste do Serviço de Busca](#51-teste-do-serviço-de-busca)
  - [5.2 Teste do Serviço de PLN](#52-teste-do-serviço-de-pln)
  - [5.3 Teste do Core](#53-teste-do-core)
  - [5.4 Teste dos Webhooks](#54-teste-dos-webhooks)
  - [5.5 Testes Unitários do Frontend](#55-testes-unitários-do-frontend)

- [6. Integração APIs e Backend](#6-integração-apis-e-backend)

- [7. Deploy da Aplicação](#7-deploy-da-aplicação)

- [8. Integração do Frontend com o Backend Implementado](#8-integração-do-frontend-com-o-backend-implementado)
  - [8.1 Estrutura do Projeto](#81-estrutura-do-projeto)
  - [8.2 Ambiente de Desenvolvimento](#82-ambiente-de-desenvolvimento)
  - [8.3 Chamadas à API](#83-chamadas-à-api)
  - [8.4 Tratamento de Erros](#84-tratamento-de-erros)
  - [8.5 Testes de Integração](#85-testes-de-integração)

- [9. Funcionalidades Implementadas na Prova de Conceito](#9-funcionalidades-implementadas-na-prova-de-conceito)

- [Referências](#referências)

# 1. Visão Geral do Projeto
  &emsp;Considerando a necessidade do Bank of America em desenvolver uma solução tecnológica para otimização do processo de acompanhamento das mudanças regulatórias na indústria financeira no Brasil, o projeto Cora foi proposto. 
  
  &emsp;A solução visa automatizar o processo de monitoramento e classificação de Leis, Regulamentações e Regras (LRRs) emitidas por órgãos reguladores, como a SELIC, por meios como o Processamento de Linguagem Natural (NLP). 
  
## 1.1 Entendimento do Parceiro

&emsp;&emsp;A análise de indústria do parceiro é fundamental para entender o ambiente de mercado em que os parceiros de negócios operam, identificando riscos e oportunidades. Esse processo detalha as dinâmicas de mercado, como competição, regulamentações e tendências emergentes, essencial para desenvolver estratégias eficazes e realizar ajustes operacionais alinhados às condições da indústria. Ao compreender esses fatores, as empresas podem otimizar a colaboração e a tomada de decisão, garantindo uma parceria bem-sucedida e resiliente. No caso do Bank Of America, com a necessidade de desenvolver uma solução tecnológica para otimização do processo de acompanhamento das mudanças regulatórias na indústria financeira no Brasil, é importante de maneira inicial realizar uma pesquisa profunda sobre seu papel como instituição na sociedade brasileira e os efeitos desse projeto para todos que se beneficiariam com o mesmo. A seguir, mais detalhes sobre essa análise de mercado:

### 1.1.1 Partes Interessadas

&emsp;&emsp;No contexto do Bank of America no Brasil, é necessário realizar uma boa análise de mercado, mapeando principalmente as partes interessadas, que desempenham papéis essenciais e têm responsabilidades específicas que impactam diretamente a operação e estratégia da instituição financeira. Essas partes interessadas e suas responsabilidades interconectadas formam a base sobre a qual o Bank of America estrutura suas operações e estratégias no Brasil, visando não apenas o sucesso financeiro, mas também a integridade e sustentabilidade de longo prazo de suas operações. Cada uma dessas entidades, como grandes corporações, instituições governamentais, investidores e reguladores financeiros, possuem responsabilidades e competências específicas, que movimentam o funcionamento do banco e de alguma forma são impactadas por meio da solução em desenvolvimento, sendo elas:

| Interessados | Descrição |
| ------------ | --------- |
|**1. Clientes Corporativos:** | Esses são os principais consumidores dos serviços de corporate e investment banking que o Bank of America oferece. A responsabilidade dos clientes corporativos é colaborar com o banco, fornecendo informações precisas e mantendo um diálogo aberto sobre suas necessidades e expectativas. Em troca, eles esperam que o banco forneça soluções financeiras inovadoras, seguras e eficientes que suportem seus objetivos de negócios. |
| **2. Reguladores Financeiros:** | No Brasil, órgãos como o Banco Central do Brasil (BACEN) e a Comissão de Valores Mobiliários (CVM) regulam as atividades bancárias. Eles são responsáveis por garantir que o Bank of America cumpra todas as leis e regulamentos locais pertinentes. Esses reguladores estabelecem as diretrizes que o banco deve seguir para garantir a estabilidade financeira e a integridade do mercado. |
| **3. Investidores:** | Os investidores do banco incluem acionistas e detentores de títulos que investem capital na instituição. Eles são responsáveis por monitorar o desempenho financeiro do banco e exigem transparência e retorno adequado sobre seus investimentos. O Bank of America deve gerenciar suas operações de forma eficiente para satisfazer as expectativas dos investidores e manter sua confiança. |
| **4. Funcionários:** | Os funcionários do Bank of America são essenciais para a execução de suas operações. Eles são responsáveis por manter os padrões éticos do banco, fornecer excelente atendimento ao cliente e implementar soluções tecnológicas avançadas. Em troca, esperam um ambiente de trabalho seguro, oportunidades de carreira e remuneração justa. |
| **5. Comunidade e Sociedade:** | Como uma entidade corporativa, o Bank of America tem responsabilidades sociais para com as comunidades em que opera. Isso inclui práticas de negócios éticas, iniciativas de sustentabilidade e contribuições para o desenvolvimento econômico local. O banco deve agir de maneira responsável para apoiar a sociedade e mitigar quaisquer impactos negativos de suas operações. |

&emsp;&emsp;Com esse mapeamente realizado, é possível perceber que muitas pessoas e instituições são impactadas diretamente e/ou indiretamente pelas ações do Banco. Assim, percebe-se que o Bank of America deve navegar por um ambiente complexo e desafiador no Brasil, equilibrando as expectativas e necessidades de diversas partes interessadas, ao mesmo tempo que se adapta às rápidas mudanças tecnológicas e às crescentes demandas por operações financeiras mais sustentáveis e responsáveis. A habilidade em gerenciar essas expectativas e adaptar-se eficazmente às mudanças continua sendo um fator crítico para o sucesso do banco no mercado, tendo como foco, o cenário brasileiro. O uso de linguagem natural para o desenvolvimento dessa solução, deve permitir maior eficiência e suprir as necessidades de algumas partes interessadas, além de promover maior estruturação tecnológica para a instituição.

### 1.1.2 Análise da Indústria

&emsp;&emsp;Para realizar uma análise de insdústria, é necessáio avaliar todos os campos de atuação da instituição na sociedade brasileira. No contexto do parceiro, o Bank of America se estabelece no mercado financeiro do país como uma das principais instituições bancárias internacionais, operando principalmente no nicho de corporate e investment banking. No contexto brasileiro, o setor bancário é caracterizado por uma intensa competição, tanto de grandes bancos locais quanto de outros players globais. A indústria é rigorosamente regulada pela legislação nacional, exigindo que instituições como o Bank of America não apenas sigam as regras locais, mas também adaptem suas operações globais às especificidades do mercado brasileiro. Isso inclui compreender a volatilidade econômica do país e responder adequadamente às flutuações macroeconômicas, ou seja, devem se manter preparados, antecipando possíveis problemas no âmbito econômico, social e tecnológico, por exemplo.

&emsp;&emsp;Falando nisso, além das complexidades regulatórias e econômicas, o Bank of America enfrenta o desafio de manter a relevância em um ambiente onde as inovações tecnológicas estão transformando a maneira como os serviços bancários são entregues. A digitalização dos serviços financeiros é uma tendência crescente no Brasil, com bancos investindo pesadamente em tecnologia para melhorar a experiência dos clientes e funcionários, além de aumentar a eficiência operacional. O BofA, portanto, precisa integrar soluções tecnológicas avançadas em sua oferta de serviços para manter-se competitivo e atender às expectativas dos clientes corporativos, que demandam transações mais rápidas, seguras e transparentes. Com a solução prosposta, o foco está direcionado também para o público de funcionários, permitindo assim um aumento na eficiência interna de trabalho, por meio de tecnologias mais robustas e interativas.

### 1.1.3 Modelo de Negócio

&emsp;&emsp;O modelo de negócios do Bank of America no Brasil é focado em oferecer soluções financeiras especializadas para grandes corporações e instituições, com um forte enfoque em serviços de corporate e investment banking. Esses serviços incluem consultoria em fusões e aquisições, financiamento de projetos, operações de mercado de capitais e gestão de ativos. A estratégia do banco é baseada em aproveitar sua presença global e expertise para fornecer soluções personalizadas que atendam às complexas necessidades financeiras de seus clientes brasileiros. Este modelo permite ao Bank of America não apenas desenvolver relacionamentos de longo prazo com seus clientes, mas também se adaptar rapidamente às mudanças nas condições do mercado e nas regulamentações locais. Um dos pilares do modelo de negócios do Bank of America é a integração de serviços avançados de tecnologia financeira. 

&emsp;&emsp;Isso se reflete no uso de plataformas digitais que facilitam as operações bancárias e financeiras, tornando-as mais ágeis e seguras. O banco investe continuamente em tecnologia para melhorar a eficiência operacional e a segurança dos dados, elementos essenciais para manter a confiança do cliente e a integridade do sistema financeiro. Além disso, essa orientação tecnológica ajuda a personalizar os serviços oferecidos, proporcionando uma experiência mais satisfatória e adaptada às necessidades específicas dos clientes corporativos. O BofA também se destaca pelo seu compromisso com práticas sustentáveis e responsáveis, integrando os critérios ESG em seu modelo de negócios. O banco não apenas busca oportunidades de investimento que se alinhem com esses critérios, mas também promove iniciativas que contribuem para o desenvolvimento sustentável, incluindo financiamento de projetos que têm impacto positivo no ambiente social e ecológico, refletindo uma responsabilidade corporativa que vai além do retorno financeiro. 

### 1.1.4 Tendências

&emsp;&emsp;O Bank of America, como uma instituição financeira líder globalmente, está na vanguarda de várias tendências significativas no setor bancário, influenciando e sendo influenciado por mudanças tecnológicas, regulatórias e sociais. De modo geral, uma das tendências mais impactantes é a digitalização dos serviços financeiros. O banco tem investido fortemente em tecnologia para automatizar os processos, melhorar a segurança cibernética e proporcionar uma experiência de usuário mais integrada e eficiente. Isso inclui a implementação de tecnologias como a inteligência artificial, aprendizagem de máquina e linguagem natural para oferecer serviços personalizados e prever as necessidades dos clientes, além de melhorar os sistemas de prevenção de fraudes e gestão de riscos. Outra tendência significativa é o compromisso crescente com a sustentabilidade e a responsabilidade corporativa. 

&emsp;&emsp;O Bank of America tem sido um dos bancos pioneiros na adoção de práticas de negócios sustentáveis, integrando critérios ambientais, sociais e de governança (ESG) em suas operações e decisões de investimento. Isto reflete uma mudança mais ampla no setor financeiro, onde há um aumento na demanda por produtos de investimento sustentáveis e uma pressão regulatória e de mercado para operar de forma mais responsável em relação ao ambiente e à sociedade. Além disso, há uma tendência de globalização dos serviços financeiros, onde bancos como o Bank of America estão expandindo suas operações para mercados emergentes e diversificando seus portfólios para incluir uma maior variedade de produtos financeiros e serviços em diferentes regiões. Isso envolve não apenas a expansão geográfica, mas também a adaptação cultural e regulatória às diferentes normas e expectativas locais. Esta abordagem global, contudo, exige uma estratégia cuidadosamente equilibrada para mitigar os riscos associados à instabilidade econômica e política em algumas regiões.

## 1.2 Problema (Business Drivers)
  
  Após a crise financeira global de 2008, os reguladores mantêm esforços contínuos para fortalecer o sistema financeiro, o que gera um aumento significativo no volume e ritmo das mudanças nas regulamentações do mercado. Para se adaptarem às constantes mudanças que as entidades reguladoras impõem, as instituições financeiras precisam de uma gestão de mudanças regulatórias, e esse processo é chamado de "Req Change". Esse processo envolve o monitoramento diário de mudanças nas LRRs (Laws, Rules, and Regulations - "LRR"), análise de impacto, comunicação entre as frentes de negócios, revisões políticas, treinamentos e conscientização, documentação e relacionamento com órgãos reguladores.

O processo de "Req Change" do Bank of America (BofA) é realizado por analistas que são responsáveis por acompanhar as alterações nas LRRs diariamente. Eles monitoram o surgimento de novas normas, baixando, classificando e tagueando os documentos manualmente. O problema desse processo ser manual é que ele está sujeito a erros humanos. Caso os analistas não detectem uma nova norma que envolva áreas em que o BofA opera, o banco pode sofrer consequências, como multas.

Essa margem para erro evidencia a necessidade de uma ferramenta que automatize as funções dos analistas. Essa solução deve baixar as novas normas dos sites dos órgãos reguladores, classificá-las, tagueá-las e armazená-las em um banco de dados. Dessa forma, o Bank of America reduzirá os custos com esse processo e os analistas poderão focar seus esforços em outras atividades.


# 2. Proposta da Solução
  &emsp;Essa seção apresenta a proposta de solução para o problema identificado, incluindo uma descrição geral da solução, a proposta de valor para o parceiro Bank of America, a matriz de risco e a estimativa de investimento.

## 2.1 Descritivo Geral da Solução
  &emsp;A solução proposta para o Bank of America é uma aplicação web que automatiza o processo de captação, classificação e consulta de LRRs (Regulações e Requisitos Legais). O sistema monitorará diariamente os sites dos órgãos reguladores, capturando novas regulamentações e utilizando processamento de linguagem natural (PLN) para classificá-las automaticamente.
    
  &emsp;As LRRs serão exibidas em uma interface intuitiva, que permitirá a busca e visualização das informações. Os usuários poderão realizar pesquisas por meio de áudio ou texto, com o suporte de tecnologias de PLN, o que facilitará a localização e a organização das regulamentações. A aplicação também oferecerá uma funcionalidade para edição das tags, auxiliando em uma identificação mais familiar para os analistas.
  
  &emsp;Para garantir escalabilidade, a infraestrutura do projeto será construída sobre uma arquitetura orientada a serviços (SOA). Essa abordagem permitirá a futura integração de novos serviços e funcionalidades, facilitando a expansão e manutenção contínuas, além de assegurar que o sistema evolua conforme as necessidades do Bank of America. 

  ## 2.2 Benefícios da solução
  &emsp; O ponto focal da proposta para o Bank of America tem como objetivo principal a automação do processo de monitoramento e classificação de LRRs, trazendo diversos benefícios para a instituição. 

  &emsp;A solução proposta permitirá que o banco acompanhe as mudanças regulatórias de forma mais eficiente e precisa, reduzindo a margem de erro e minimizando o risco de não conformidade com as regulamentações. A aplicação também contribuirá para a otimização do tempo dos analistas, que poderão se dedicar a atividades mais estratégicas e de maior valor. Além disso, a automação do processo de classificação permitirá uma organização mais eficiente das LRRs, facilitando a busca e a consulta das informações necessárias.

  &emsp;Ainda pensando na jornada dos analistas, a CORA oferece uma interface intuitiva e amigável, que simplifica a interação com o sistema e melhora a experiência do usuário. A funcionalidade de busca por voz e texto, aliada ao processamento de linguagem natural, torna a pesquisa mais ágil e eficaz. Os usuários terão acesso a uma funcionalidade de edição de tags, que permite uma personalização das informações que a LLM utilizará, tornando o processo de classificação mais transparente e adaptável.

  &emsp;Por fim, a CORA ainda apresenta algumas informações estáticas, que podem ser as maiores aliadas na tomada de decisões estratégicas e otimização de tempo. A aplicação oferece uma visão geral das tags recentes, quantidades de LRRs do último dia e confiabilidade do tagueamento, que podem ser utilizadas para identificar padrões e tendências, além de servir de curadorias na eficácia do processo de classificação.

## 2.3 Proposta de Valor (Value Proposition Canvas)
  &emsp;O Value Proposition Canvas é uma ferramenta que auxilia as empresas a compreenderem melhor o perfil do cliente e a proposta de valor que a solução oferece. A ferramenta é dividida em dois blocos: Perfil do Cliente e Proposta de Valor. O Perfil do Cliente, na direita, é composto de três seções que descrevem as tarefas, dores e ganhos do cliente. Já a Proposta de Valor, na esquerda, é composta por três seções que descrevem os produtos e serviços, os criadores de ganhos e os alívios que a solução oferece.

<div align="center">

<sub>Figura X - Value Proposition Canvas</sub>

![Value Proposition Canvas](../assets/value_proposition.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

&emsp;O Value Proposition Canvas para o parceiro Bank of America levou em conta a solução planejada, que consiste em uma aplicação WEB para captação, classificação e consulta de LRR's. O bloco Perfil do Cliente foi preenchido com base nas informações coletadas sobre as atividades realizadas pelos membros do parceiro, como o monitoramento e classificação de LRR's. Isso permitiu uma melhor compreensão das possíveis dificuldades enfrentadas, incluindo a demanda de tempo para acessar os reguladores, o processo manual das atividades realizadas e os empecilhos de monitoramento das novas LRRs. Os benefícios esperados pelos usuários são voltados para uma otimização da pesquisa, tagueamento e acompanhamento das LRR's.

&emsp; O bloco Proposta de Valor descreve maneiras de aliviar as dores e conseguir os benefícios esperados, sendo preenchido através da análise feita no perfil do cliente. Assim, recursos como a automatização do processo de captação, o taguemaneto das regulamentações pelo processamento de lingugagem natural e uma visualização centralizada das novas LRR's, corroboram para atender as necessidades do usuário de forma eficiente. Por conseguinte, a possibilidade de utilizar uma interface simples que forneça uma busca facilitada e organização das informações contribui para a construção de benefícios para o Bank Of America.

## 2.4 Matriz de Risco

&emsp;&emsp;A matriz de risco é uma ferramenta essencial para a identificação, avaliação e mitigação dos riscos que podem impactar o sucesso do projeto. Nesta seção, é apresentado a análise dos riscos, tanto negativos (ameaças) quanto positivos (oportunidades), categorizados de acordo com a probabilidade de ocorrência e o impacto potencial no projeto.

<h6 align="center"> Figura x: Matriz de risco </h6>

<div align="center">
  <img src="../docs/images/matriz_risco.png" >
</div>

<h6 align="center"> Fonte: Elaborado pelo grupo Lexis </h6>

**Ameaças (Riscos Negativos)**

Mudanças inesperadas nos sites

Probabilidade: 70%
Impacto: Moderado
Mitigação: Monitorar constantemente os sites e implementar mecanismos de alerta que notifiquem automaticamente sobre mudanças significativas. 

Problemas no acesso aos sites de LRRs

Probabilidade: 50%
Impacto: Moderado
Mitigação: Desenvolver redundâncias e alternativas de acesso, como APIs alternativas ou fontes de dados secundárias.

Falta de adesão dos usuários

Probabilidade: 50%
Impacto: Muito Alto
Mitigação: Implementar programas para familiarizar os usuários com a nova plataforma, além de fornecer suporte contínuo para garantir a adesão.

Falta de precisão no tagueamento

Probabilidade: 30%
Impacto: Alto
Mitigação: Desenvolver uma fase de testes rigorosa para garantir a precisão no tagueamento e ajustar algoritmos conforme necessário.

A solução final não atender às expectativas

Probabilidade: 30%
Impacto: Muito Alto
Mitigação: Realizar levantamento detalhado de requisitos com os principais stakeholders e garantir um ciclo de feedback contínuo durante o desenvolvimento. 


**Oportunidades (Riscos Positivos)**

Aumento na eficiência operacional

Probabilidade: 90%
Impacto: Muito alto
Aproveitamento: Monitorar métricas de eficiência e utilizar as melhores práticas para maximizar a automação dos processos.

Prevenção de erros humanos

Probabilidade: 70%
Impacto: Muito alto
Aproveitamento: Desenvolver e implementar mecanismos para reduzir ainda mais a possibilidade de erros.

Alta adesão da equipe à plataforma

Probabilidade: 70%
Impacto: Alto
Aproveitamento: Criar uma cultura de colaboração, incentivando o uso contínuo e melhorias baseadas no feedback dos usuários.

Redução de custos operacionais

Probabilidade: 70%
Impacto: Moderado
Aproveitamento: Alocar os recursos economizados em outras áreas estratégicas.

Investimento do cliente no projeto

Probabilidade: 30%
Impacto: Alto
Aproveitamento: Utilizar o investimento para expandir o escopo do projeto e implementar melhorias adicionais que podem trazer mais valor para o cliente.

&emsp;&emsp;A matriz de risco apresentada oferece uma visão clara dos principais riscos que podem impactar o projeto. Para os riscos negativos, foram estabelecidas ações de mitigação para reduzir a probabilidade ou o impacto dessas ameaças. Quanto às oportunidades, as ações propostas visam maximizar os benefícios para garantir que o projeto não apenas atinja, mas supere as expectativas dos stakeholders.


## 2.5 Estimativa de Investimento

&emsp;&emsp;A imagem abaixo apresenta a estimativa de investimento para o desenvolvimento da aplicação CORA, uma solução focada na otimização do processo de acompanhamento das mudanças regulatórias na indústria financeira no Brasil, em colaboração com o Bank of America. A estimativa de investimento também pode ser encontrada em `docs\Estimativa de investimento - Cora.xlsx`, para uma melhor visualização.

<div align="center">
  <p>Figura x - Estimativa de Investimento - CORA</p>
  <img src="../assets/Estimativa de Investimento.png" alt="Estimativa de Investimento">
  <p>Fonte: Autoria própria</p>
</div>

&emsp;&emsp;A tecnologia que será utilizada no desenvolvimento desta aplicação inclui ferramentas avançadas de processamento de linguagem natural (NLP) para a análise e classificação das regulamentações, além de uma plataforma web que permitirá a consulta das LRRs através de comandos em linguagem natural. A infraestrutura do projeto será baseada em uma arquitetura de microserviços, utilizando APIs para integração e uma base de dados robusta para o armazenamento e gerenciamento das informações regulatórias. A escolha dessas tecnologias visa garantir alta disponibilidade, escalabilidade e segurança.

&emsp;&emsp;O custo de produção foi calculado com base em dois meses de desenvolvimento, considerando uma equipe composta por desenvolvedores, engenheiros de software e especialistas em compliance regulatório. Este custo inclui todos os recursos necessários para a construção, testes e implementação da solução. A manutenção da aplicação, que funcionará 24 horas por dia durante 12 meses, envolve monitoramento contínuo, suporte técnico, atualizações e ajustes para garantir a operação em ambientes de produção.

&emsp;&emsp;**Custo de Implementação da Prova de Conceito (PoC)**: Para a prova de conceito, o custo foi estimado em **R$ 92.900,00**, conforme detalhado na planilha. Este valor inclui:
  - Desenvolvedores de Software Front-end e Back-end, Designer UI/UX, Engenheiro de Software e Testador QA.

&emsp;&emsp;**Estimativa de Custo para a Solução Final**: O custo total para a produção completa foi calculado em **R$ 239.467,82**, levando em consideração mão de obra adicional e serviços de infraestrutura, incluindo componentes de software e materiais como firewall e testes de segurança.

&emsp;&emsp;**Projeções de Custos e Receitas para o Período de Um Ano**: O custo anual de manutenção foi projetado em **R$ 42.367,82**, e o valor total para produção e manutenção por um ano é de **R$ 705.513,84**.

&emsp;&emsp;**Margem de Lucro e Impostos**: Para determinar o preço final da solução, aplicamos uma margem de 17% sobre o lucro e o custo de produção para cobrir os impostos. Além disso, uma margem de 20% foi adicionada sobre o custo de produção e manutenção, garantindo a viabilidade financeira do projeto para o desenvolvedor. Após a conclusão da produção, o preço poderá ser ajustado para refletir apenas os custos de manutenção, possibilitando uma oferta competitiva no mercado. Assim, o valor total para produção, manutenção, lucro e impostos é de aproximadamente **R$ 990.541,43**.

&emsp;&emsp;Esses pontos delineiam a viabilidade econômica e operacional do projeto CORA, assegurando que os investimentos iniciais e contínuos sejam recompensados pela projeção de receitas.

# 3. Entendimento de Design
  Essa seção apresenta o entendimento de design do projeto. A análise dos usuários inclui a definição de personas, que são representações dos usuários ideais da solução, e a jornada do usuário, que descreve as etapas que os usuários seguem ao interagir com a aplicação.

## 3.1 Análise dos usuários

&emsp;&emsp;Um estudo de experiência do usuário (UX) é essencial para o desenvolvimento de qualquer sistema, e isso é particularmente verdadeiro para instituições financeiras como o Bank of America. Nessas instituições, aspectos como segurança, eficiência e satisfação do cliente são de vital importância. Investindo em um estudo de UX bem elaborado, o Bank of America não só pode assegurar que seu sistema cumpra com as expectativas funcionais, mas também proporcionar uma experiência de usuário excepcionalmente positiva. Este investimento pode traduzir-se em maior fidelidade dos clientes e uma vantagem competitiva significativa no mercado. Essa abordagem é fundamental em um ambiente altamente competitivo e tecnologicamente avançado, onde a facilidade de uso e a acessibilidade podem ser decisivas para reter clientes ou vê-los migrar para a concorrência. Um design de UX bem elaborado não apenas melhora a eficiência operacional, como também reduz os custos de suporte ao cliente. Além disso, ao aprimorar a usabilidade e a acessibilidade, a instituição pode melhorar significativamente a percepção da marca entre os consumidores, fortalecendo sua posição no mercado. 

&emsp;&emsp;O sistema de análise de resultados do Bank of America é uma ferramenta fundamental para garantir a conformidade com os regulamentos estabelecidos por órgãos reguladores financeiros, como BACEN e ANBIMA. Este sistema não apenas ajuda a monitorar e reportar as atividades financeiras, mas também permite que o banco avalie sua eficiência operacional e integridade financeira. Realizar uma pesquisa sobre os usuários desse sistema de análises envolve entender as diversas necessidades e desafios enfrentados pelos usuários finais, que variam desde funcionários do banco responsáveis pela conformidade e reporte até os analistas que utilizam os dados para informar decisões estratégicas. O estudo tem como foco em como esses diferentes usuários interagem com o sistema, as dificuldades que encontram e como o sistema pode ser melhorado para facilitar uma experiência de usuário mais eficiente e menos propensa a erros, como informado pelo parceiro, contribuindo assim para um ambiente de conformidade funcional e confiável. 

### 3.1.1 Personas 

&emsp;&emsp;Uma persona trata-se de uma ferramenta bastante utilizada no desenvolvimento de sistemas de software, pois representa um usuário ideal fictício, derivado de análises detalhadas e dados coletados de um segmento real da base de usuários. No contexto do desenvolvimento de software, a persona é fundamental para o entendimento de quem será o usuário final, sendo construída com características específicas como idade, profissão, biografia, hábitos tecnológicos, interesses, contexto de interação, dores, necessidades entre outros. Essas características são detalhadas com informações hipotéticas, visando serem as mais prováveis num cenário real, para criar um modelo com o qual desenvolvedores e designers possam identificar e desenvolver com foco no público alvo. Isso permite que o projeto seja mais direcionado para solucionar as dores apontadas por seus usuários, trazendo assim um sistema com uma alta possibilidade de sucesso em sua utilização e eficie~encia!

&emsp;&emsp;Para o desenvolvimento e entrega final adequada do projeto para o Bank Of America, foram criadas algumas personas com base nas informações apresentadas pelo parceiro. Dentre elas, a Daniela Gallego, uma Compliance Officer de 35 anos, residente em São Paulo. Formada em Engenharia da Computação pelo Insper, onde também completou um MBA em 2018, ela deseja permanecer como PO, mas está interessada em assumir um papel de gestão. Utiliza as análises de órgãos reguladores para avançar em projetos relevantes que necessitam dessas informações, mas enfrenta dificuldades com a eficiência na recepção desses resultados em tempo real e de maneira organizada. Suas habilidades incluem um alto nível de letramento tecnológico, excelente comunicação e conhecimento substancial em negócios. Segue abaixo a imagem com todas as informações:

<div align="center">
  <img src="/assets/persona-1.png" alt="Persona 1"/>
</div>

&emsp;&emsp;A imagem acima retrata outra persona, sendo o Gabriel Oliveira, um analista pleno de 28 anos, residente em São Paulo. Formado em Ciência da Computação pela Unicamp em 2019, ele tem um forte interesse por jogos digitais e em planejar viagens com sua família. Profissionalmente, ele almeja evoluir para uma posição de Analista Sênior em Data Science e deseja um sistema que aumente a eficiência e a organização em seu trabalho. Ele realiza análises manuais diárias baseadas em critérios estabelecidos por órgãos reguladores, enfrentando desafios devido à demora e dificuldade dessas análises com o sistema atual do parceiro. Gabriel expressa a necessidade de um sistema que agilize o trabalho, permitindo buscas e respostas mais rápidas e específicas de acordo com critérios regulatórios. Essas personas são usuários que podem facilmente ser encontrados no ambiente de trabalho do BofA, pois são eles os principais afetados pela solução!

<div align="center">
  <img src="/assets/persona-2.png" alt="Persona 1"/>
</div>

## 3.2 Experiência do usuário

&emsp;&emsp;De acordo com Jacob Nielsen, um renomado especialista em usabilidade, a jornada do usuário descreve detalhadamente as etapas que uma pessoa segue ao interagir com um produto ou serviço, desde o primeiro contato até a realização de um objetivo específico. Essa ferramenta é extremamente versátil, pois ajuda a compreender as necessidades e pensamentos dos clientes, identificando suas expectativas e pontos de dor ao longo do caminho. Portanto, é evidente a importância de desenvolver uma jornada para o usuário da solução proposta, conforme indicado a seguir:

<h6 align="center"> Figura x: Mapa de jornada do usuário </h6>

<div align="center">
  <img src="../docs/images/Jornada do usuário.png" >
</div>

<h6 align="center"> Fonte: Elaborado pelo grupo Lexis </h6>

&emsp;&emsp;A jornada de Gabriel Oliveira evidencia a importância de uma solução que atenda às suas necessidades de forma prática e eficaz, permitindo uma análise rápida e precisa de regulamentações. É claro que a solução proposta deve focar na simplificação do processo de busca, eliminando as dificuldades e ansiedades que Gabriel enfrenta atualmente. A implementação de uma ferramenta que centralize todas as LRRs (Leis, Regulamentações e Regras) em uma única plataforma, com monitoramento diário e notificações automáticas, não só atenderia suas necessidades, mas também proporcionaria uma experiência mais satisfatória, refletida em maior eficiência e confiabilidade na execução de suas tarefas.


## 3.3 Proposta de UX
  &emsp;A proposta de UX para a solução do Bank of America visa criar uma experiência de usuário intuitiva e eficiente, que atenda as necessidades dos analistas de forma prática e eficaz.

  &emsp;A interface do usuário foi projetada para ser limpa, organizada e fácil de usar, com foco na usabilidade. Cada elemento dentro das telas foi pensado com tamanhos adequados, além de ícones e botões indicativos. A tipografia será pensada para ser legível e agradável, e as cores serão cuidadosamente selecionadas para garantir os níveis adequados de contraste e acessibilidade.

  &emsp;Os principais elementos da proposta podem ser conferidos mais detalhadamente no wireframe a seguir.

### 3.3.1 Wireframes
 &emsp;O wireframe é uma representação visual de baixa fidelidade de uma interface de usuário. Ele auxilia a planejar a estrutura de uma página. No contexto do projeto, os wireframes foram desenvolvidos para representar as principais funcionalidades da solução proposta, incluindo a exibição das regulamentações, o tagueamento e a visualização das LRRs.

&emsp;A proposta principal será apresentada em uma única tela com rolagem vertical. O design está dividido em três seções principais: a visão inicial, a lista de regulamentações e a visualização detalhada de uma LRR específica.

<div align="center">

<sub>Figura X - Wireframe: Visão geral</sub>

![Value Proposition Canvas](../assets/tela_inteira.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>


**Seção inicial**
&emsp;Essa seção é a primeira visão do usuário ao acessar a plataforma. Ela contém a barra de pesquisa, que permite ao usuário pesquisar por regulamentações específicas, por áudio ou voz. Ela foi pensada para ser visualmente limpa, com um campo de pesquisa centralizado e botões de pesquisa indicativos.

&emsp;Quando o usuário optar pela pesquisa por áudio, a seleção será destacada e aparecerá uma mensagem para o usuário que o sistema está ouvindo. A mensagem de voz será exibida no campo da pesquisa, indicando que o sistema está processando a fala do usuário.

<div align="center">

<sub>Figura X - Wireframe: Seção inicial</sub>

![Value Proposition Canvas](../assets/tela_pesquisa.png)

![Value Proposition Canvas](../assets/tela_pesquisa_audio.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

**Lista de regulamentações**
&emsp;Essa seção exibe a lista de regulamentações capturadas e tagueadas. Cada regulamentação é exibida como uma linha na tabela, contendo informações como o título, a data de publicação, órgão emissor e os tags associados. O usuário pode trocar a paginação da tabela para visualizar mais regulamentações e clicar nelas para ver mais detalhes.

&emsp;Na lateral direita da página, há um indicativo sobre o número de regulamentações adicionadas nas últimas 24 horas, permitindo ao usuário saber se houve atualizações recentes. Para complementar, existe um pequeno quadro que exibe os assuntos (tags) recentes com mais regulamentações, facilitando a busca por temas específicos.

<div align="center">

<sub>Figura X - Wireframe: Lista de Regulamentações</sub>

![Value Proposition Canvas](../assets/tela_tabela.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

**Detalhamento das LRRs**
&emsp;Essa seção exibe as informações detalhadas de uma LRR específica, ao clicar em uma linha da tabela de regulamentações. Ela contém as principais informações, as tags associados e, caso o documento contenha, um resumo da LRR. O usuário pode baixar o arquivo da regulamentação, além de editar as tags associados.


<div align="center">

<sub>Figura X - Wireframe: Detalhamento das LRRs</sub>

![Value Proposition Canvas](../assets/tela_detalhes.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

## 3.4 Mockup

&emsp;&emsp;Um mockup é uma representação visual estática do design de um projeto, utilizado para apresentar conceitos, ideias e funcionalidades de uma forma que simule o produto final. É uma etapa intermediária entre o wireframe (esboço mais básico e estrutural) e o protótipo funcional, permitindo às equipes e stakeholders visualizar como será a aparência do aplicativo ou site antes da implementação técnica. No caso do desenvolvimento da solução Cora para o Bank Of America, o [mockup da Cora](https://www.figma.com/design/qSeghxfwT9Bxuzhok6mj1E/CORA?node-id=54-2&t=RI2uhad5JPRFPB3c-1) foi desenvolvido com base em um wireframe já idealizado pela equipe na seção 3.2 deste documento. Esse processo garantiu que o design visual estivesse alinhado com os objetivos estratégicos e técnicos do projeto desde o início.

&emsp;&emsp;De início, a paleta de cores escolhida para o mockup por ser relevante para manter a identidade visual do projeto. Cores como azul, vermelho e tons neutros foram selecionadas para refletir confiança, urgência e profissionalismo, respectivamente. Essas cores são usadas de maneira estratégica para destacar elementos importantes na interface, guiando o usuário através das funcionalidades de maneira intuitiva. Os componentes também foram cuidadosamente desenhados para garantir consistência e usabilidade. Incluem elementos como botões, campos de entrada, tabelas de dados e modais que são essenciais para a interação do usuário. Cada componente é projetado para ser responsivo e acessível, garantindo uma experiência de usuário suave e eficaz.

<div align="center">

<sub>Figura X - Paleta de Cores </sub>

![Paleta de Cores](../assets/paleta-cores.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

&emsp;&emsp;Além disso, como complemento, o setup do mockup incorpora o uso de ícones consistentes, tipografia clara e elementos de marca que alinham o design com a identidade corporativa do Bank Of America. Para um mockup mais elaborado e para facilitar o desenvolvimento do frontend, foram desenhados componentes essenciais como a Barra de Pesquisa e o Microfone. Este último tem indicações visuais para quando está ativado ou desativado, mostrando as cores azul e vermelho, respectivamente, para sinalizar que o usuário iniciou ou encerrou o reconhecimento de áudio do sistema. Abaixo, segue a imagem desses componentes, detalhando essa interatividade e reforçando a funcionalidade intuitiva do design.

<div align="center">

<sub>Figura X - Componentes </sub>

![Componentes](../assets/componentes-cora.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

&emsp;&emsp;Nas imagens abaixo deste texto, é possível observar que a Home da solução Cora para o BofA foi meticulosamente projetada para oferecer dois temas visuais opcionais: claro e escuro. Essa funcionalidade tem o objetivo de proporcionar conforto visual e aprimorar a experiência do usuário. Todas as cores utilizadas seguem o guia de estilos do próprio Bank Of America, garantindo uma integração visual coesa. A Home serve como o portal inicial de acesso, permitindo ao usuário chegar à página necessária para começar suas análises de normas e regulamentações. Aqui, ele pode optar pela busca em formato de texto ou pelo reconhecimento de áudio, que são elementos centrais deste projeto, facilitando assim o acesso rápido e eficiente às informações desejadas.

<div align="center">

<sub>Figura X - Home Claro </sub>

![Home Mockup](../assets/tema-claro.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>


<div align="center">

<sub>Figura X - Home Escuro </sub>

![Home Mockup](../assets/tema-escuro.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

&emsp;&emsp;Após acessar a Home e deslizar a tela para baixo, o usuário é direcionado à Página Inicial, que apresenta informações importantes do sistema. Nesta página, há uma tabela detalhada contendo normas, datas, assuntos tagueados e o órgão regulador responsável. Adicionalmente, a página inclui uma tabela de tópicos recentes, mostrando a porcentagem de confiabilidade do tagueamento e a quantidade de novas regulamentações introduzidas nas últimas 24 horas. Esses dados são extremamente valiosos, facilitando análises mais precisas e efetivas pelos usuários. Esta organização e apresentação de informações não só otimizam a navegação como também ampliam a capacidade dos usuários de entender e interagir com os dados atualizados, garantindo assim uma experiência de usuário aprimorada e resultados analíticos de alta qualidade.

</div>

<div align="center">

<sub>Figura X - Página Inicial </sub>

![Componentes](../assets/pagina-inicial.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

&emsp;&emsp;Por fim, o mockup da solução Cora é meticulosamente projetado para garantir que os usuários possam navegar com facilidade através das funcionalidades, prestando especial atenção à escalabilidade e à capacidade de adaptação a diferentes dispositivos e tamanhos de tela. Essencial para o desenvolvimento do projeto no Bank Of America, o mockup da solução Cora é uma ferramenta fundamental, facilitando a visualização do produto final antes da etapa de codificação. Incorporando elementos de design estratégicos, como a funcionalidade de NLP e uma paleta de cores cuidadosamente selecionada, o mockup é essencial para garantir que a solução final seja não só esteticamente agradável, mas também funcionalmente concreta.

## 3.5 Interface de Usuário

&emsp;&emsp;A interface de usuário (UI) é o meio pelo qual um usuário interage com um sistema, dispositivo ou software. Ela inclui todos os elementos visuais, auditivos e funcionais que facilitam essa interação, como botões, menus, ícones, formulários, textos, cores e disposição dos componentes na tela, anteriormente elaborados de forma estratégica no wireframe e mockup da solução. Com isso, a interface de usuário tem o objetivo de tornar a experiência do usuário intuitiva, eficiente e agradável, garantindo que as ações e comandos necessários sejam facilmente acessíveis e compreensíveis. Uma boa interface de usuário deve equilibrar estética e funcionalidade, proporcionando uma navegação clara, rápida e coerente com as expectativas dos usuários.

&emsp;&emsp;A interface de usuário da solução "Cora" para o Bank of America foi cuidadosamente planejada para proporcionar uma experiência fluida e intuitiva, com foco na eficiência e facilidade de uso. O processo de design iniciou-se com a criação de wireframes, como detalhado na seção 3.3 deste documento, que serviram como esboços preliminares para organizar os componentes visuais e funcionais da interface. Esses wireframes foram fundamentais para definir o layout e a interatividade, permitindo revisões e ajustes antes de avançar para os mockups. Os mockups, discutidos na seção 3.4, trouxeram uma representação visual mais refinada, incorporando esquemas de cores e elementos gráficos que enriqueceram tanto a estética quanto a usabilidade da aplicação.

<div align="center">

<sub>Figura X - Comparação de Temas</sub>

![Comparação de Temas](../assets/light-dark.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

&emsp;&emsp;O frontend atual, desenvolvido para a apresentação da solução "Cora" oferece um design limpo, moderno e estratégico, com opções visuais de temas claro e escuro, que são visualmente agradáveis e adequados para diferentes preferências e condições de iluminação. A barra de pesquisa centralizada na Home promove uma interação direta e simplificada, permitindo assim que os usuários localizem rapidamente os documentos desejados, seja por texto ou por reconhecimento de áudio, que é o foco principal de aprendizado deste projeto. As respostas da pesquisa são organizadas de maneira clara na página, com a adição de filtros úteis e estatísticas que melhoram a navegação e a tomada de decisão. Segue abaixo a imagem referente à página inicial:

<div align="center">

<sub>Figura X - Páginas Iniciais</sub>

![Páginas Iniciais](../assets/inicial-light-dark.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

&emsp;&emsp;A interface também implementa feedback visual eficiente, como barras de progresso e indicadores de status, que informam os usuários sobre a precisão e o estado da verificação dos documentos. Esses elementos não só aumentam a interatividade, mas também reforçam a confiança nos resultados apresentados. A equipe de desenvolvimento, ao utilizar wireframes e mockups, foi capaz de iterar rapidamente e responder às necessidades dos usuários, resultando em uma solução eficiente e esteticamente consistente que apoia o BofA no manejo de documentos regulatórios. Conclui-se que a interface de usuário da solução "Cora", desenvolvida em React, alcançou os objetivos estabelecidos. A interface não apenas atende às expectativas do Bank of America, mas também melhora significativamente a produtividade e eficiência dos funcionários que utilizam o sistema diariamente.

## 3.5.1 Instruções de Uso e Teste

&emsp;&emsp;A solução "Cora" do Bank of America, focada em processamento de linguagem natural (NLP), oferece uma interface de usuário moderna e intuitiva, permitindo que os usuários realizem pesquisas de regulamentações de maneira prática e eficiente. O principal ponto de interação é a barra de pesquisa, localizada na página inicial, que aceita tanto entradas de texto quanto comandos de voz, permitindo uma experiência de busca versátil. Para usar a barra de pesquisa, o usuário pode simplesmente digitar termos de busca, como "normas de crédito de 2019", ou utilizar o microfone integrado para fazer perguntas por voz. A funcionalidade de reconhecimento de áudio converte a fala do usuário em texto, integrando-se ao sistema de NLP para interpretar e retornar os resultados desejados. 

&emsp;&emsp;As regulamentações e atualizações normativas relacionadas à pesquisa são exibidas diretamente na interface abaixo da barra de pesquisa, permitindo uma navegação rápida e eficiente. Durante os testes da solução, foi possível observar a precisão da ferramenta ao processar tanto consultas textuais quanto de áudio. Frases como "Mostre-me normas do assunto crédito, de 2019" foram interpretadas corretamente e resultaram na exibição das normas relevantes de forma organizada. A aplicação é capaz de lidar com diferentes tipos de consultas, exibindo resultados com filtros de ano, assunto e outros parâmetros, facilitando o acesso às informações de maneira rápida e eficiente para os usuários. A seguir, o passo a passo e exemplo de uso da solução "Cora" para o Bank of America:

—

#### **Passo 1: Acessando a Solução "Cora"**
- **Abra a solução "Cora"** no seu navegador através do link fornecido pela instituição (interno ao Bank of America).
- Você será direcionado à página inicial, onde verá uma barra de pesquisa centralizada na tela.

#### **Passo 2: Escolhendo o Modo de Pesquisa**
- **Pesquisa por Texto**: Se preferir digitar, clique na barra de pesquisa e insira as palavras-chave ou a frase de pesquisa. 
  - Exemplo: Digite "Normas sobre crédito de 2019" para buscar todas as normas relacionadas ao crédito emitidas no ano de 2019.
  
- **Pesquisa por Áudio**: Para usar a pesquisa por voz, clique no ícone do microfone ao lado da barra de pesquisa. Aguarde o sinal de ativação e fale claramente o que deseja buscar.
  - Exemplo: Diga "Mostre-me normas sobre crédito de 2019". O sistema irá transcrever sua voz e processar a pesquisa automaticamente.

#### **Passo 3: Recebendo os Resultados**
- Após inserir o termo de pesquisa ou concluir a gravação do áudio, o sistema processará a solicitação e exibirá os resultados logo abaixo da barra de pesquisa.
- Os resultados são apresentados de maneira organizada, com informações como:
  - **Título da Norma** (ex.: "Ofício para CNI - Revisão de Estágio de PPE em Fundos de Investimento")
  - **Data de Emissão** (ex.: "21/09/2019")
  - **Assunto** (ex.: "Crédito")
  - **Link** para acessar o documento completo.

#### **Passo 4: Filtrando os Resultados**
- Os resultados podem ser filtrados por período, assunto ou relevância conforme sua necessidade. Utilize os filtros disponíveis na interface para refinar ainda mais os documentos exibidos.

---

### **Exemplo de Uso**:

1. **Cenário**: Você deseja buscar todas as normas emitidas em 2019 sobre crédito.
   
2. **Ação**: 
   - Digite "Normas de crédito de 2019" na barra de pesquisa ou clique no ícone do microfone e fale "Mostre-me normas sobre crédito de 2019".
   
3. **Resultado**: 
   - O sistema apresentará uma lista de documentos regulatórios, como ofícios e orientações emitidos em 2019, relacionados ao tema de crédito. A lista incluirá o título da norma, a data de emissão e um link para acessar os documentos completos.

4. **Acompanhamento**: 
   - Caso queira ajustar os resultados, você pode usar os filtros ou refazer a pesquisa com termos mais específicos.

—

&emsp;&emsp;Com essas instruções e exemplo, é possível identificar que a solução "Cora" está sendo desenvolvida para facilitar a busca e análise de regulamentações e atualizações de normas, utilizando principalmente o processamento de linguagem natural (NLP) como foco central. A integração com reconhecimento de áudio (Speech-to-Text) permite que o usuário realize pesquisas tanto por texto quanto por voz, tornando a experiência ainda mais acessível e eficiente. Este passo a passo permite que o usuário navegue de forma simples e intuitiva pela solução "Cora", utilizando as funcionalidades implementadas para localizar informações regulatórias de forma rápida, precisa e eficiente, promovendo uma interação fluida e automatizada entre o usuário e os dados.

## 3.6 Pilha de tecnologias 
  
  No desenvolvimento do UX do projeto vão ser usadas as seguintes tecnologias e suas respectivas funções:

  - **Javascript:** Linguagem de progamação que será ser utilizada no frontend.

  - **React:** Biblioteca de Javascript que será utilizada para a criação de interfaces de usuário.

  - **Node.js:** Ambiente de execução Javascript que será utilizado no backend.

  - **Python:** Linguagem de programação que será utilizada no backend.

  - **FastAPI:** Framework web que será utilizado no backend.

  - **PostgreSQL:** Banco de dados relacional.

  - **RDS:** Serviço de banco de dados relacional da AWS.

  - **S3:** Serviço de armazenamento de objetos da AWS.

  - **EC2:** Serviço de computação em nuvem da AWS.

  - **Web Speech API:** API de Speech-to-Text.
 
 - **Word2vec:** biblioteca de PLN.

 - **Bert:** biblioteca de PLN.

 - **RabbitMQ:** Serviço de mensageria.
 
 - **PyPDF2:** Biblioteca para leitura de arquivos PDF.

 - **Selenium**: Ferramenta de Web scrapping.

Essas tecnologias serão utilizadas para a construção da solução proposta.


# 4. Projeto de Solução
  Essa seção apresenta o projeto de solução para o problema identificado, incluindo a arquitetura da solução, a relação com os requisitos funcionais e a proposta de implementação.

## 4.1 Arquitetura da Solução
  A arquitetura da solução é um elemento fundamental para garantir que o sistema atenda aos requisitos do parceiro Bank of America. Abaixo, é apresentada a proposta de arquitetura, que descreve os principais componentes e como eles interagem para fornecer a funcionalidade desejada.

### 4.1.1 Análise de Requisitos
&emsp; Nesta seção, será abordado os requisitos funcionais e não funcionais do projeto, que fazem parte do desenvolvimento de um sistema bem-sucedido. Os requisitos funcionais estabelecem as funções específicas que o sistema precisa realizar, enquanto os requisitos não funcionais se concentram em atributos como desempenho, segurança, usabilidade e escalabilidade, que são importantes para garantir uma boa experiência do usuário e o funcionamento eficiente da aplicação.

#### Requisitos Funcionais
&emsp;Os requisitos funcionais são as especificações de como o sistema deve funcionar e quais funcionalidades ele deve oferecer. Eles detalham as tarefas e operações que deve ser capaz de realizar para atender às necessidades dos usuários. No contexto do projeto, os requisitos foram elaborados com base nas conversas com o parceiro, pensando nas funcionalidades que seriam mais úteis para o usuário final. 

&emsp;A seguir são listados os requisitos funcionais da aplicação, divididos em funcionalidades principais. Cada funcionalidade é descrita com base em seus critérios de aceitação, que são condições que devem ser atendidas para que a funcionalidade seja considerada implementada com sucesso. Além disso, são contemplados os cenários de teste para cada funcionalidade.

**RF001 - Listagem**

A aplicação deve conseguir listar as regulamentações.

*Critérios de aceitação*
1. O sistema deve exibir todas as regulamentações disponíveis no banco de dados.
2. O sistema deve permitir que o usuário ordene a listagem por critérios.
3. Cada item deve permitir que o usuário interaja com um clique para visualizar maiores informações do documento.
4. O usuário deve conseguir baixar as regulamentações disponíveis pela aplicação.


| **Nome**                                           | **Pré-condição**                                                                                      | **Procedimentos**                                                                                                                                  | **Resultado Esperado**                                                                                                         | **Pós-condição**                                      |
|----------------------------------------------------|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| Listagem de regulamentações                        | O banco de dados deve conter regulamentações.                                                           | 1. Acessar a tela de listagem de regulamentações. <br> 2. Verificar se as regulamentações estão sendo exibidas.                                   | O sistema deve exibir todas as regulamentações disponíveis no banco de dados.                                                   | Nenhuma.                                                |
| Ordenação de regulamentações                       | O banco de dados deve conter regulamentações.                                                           | 1. Acessar a tela de listagem de regulamentações. <br> 2. Escolher um critério de ordenação. <br> 3. Aplicar a ordenação.      | O sistema deve ordenar a listagem conforme o critério selecionado.                                                             | Nenhuma.                                                |
| Visualização detalhada de regulamentação           | O banco de dados deve conter regulamentações.                                                           | 1. Acessar a tela de listagem de regulamentações. <br> 2. Clicar em uma regulamentação específica.                                                | O sistema deve exibir maiores informações do documento selecionado.                                                             | Nenhuma.                                                |
| Download de uma regulamentação                         | O banco de dados deve conter regulamentações.| 1. Acessar a tela de listagem de regulamentações. <br> 2. Clicar na opção de download em uma regulamentação específica.                           | O sistema deve iniciar o download da regulamentação selecionada.                                                                | A regulamentação deve ser baixada para o dispositivo.  |

<br>

**RF002 -  Captura de regulamentações**

O sistema deve capturar as LRR's das entidades regulamentadoras. 

*Critérios de aceitação*
1. O sistema deve identificar quando uma regulamentação já existe no sistema
2. O sistema deve manter um log detalhado de todas as atividades de captura, como data, hora, fonte



| **Nome**                                           | **Pré-condição**                                                                                     | **Procedimentos**                                                                                                                                                       | **Resultado Esperado**                                                                                                                | **Pós-condição**                                             |
|----------------------------------------------------|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Captura de LRR's                                              | O acesso as fontes das entidades regulamentadoras deve estar configurado.                                                      | 1. Executar o script de web scraping. <br> 2. Verificar a integridade dos arquivos.                                              | O sistema deve capturar e armazenar corretamente as LRR's.                                                       | As LRR's capturadas devem ser armazenadas no S3.
| Identificação de regulamentação duplicada          | O banco de dados deve conter regulamentações existentes.                                               | 1. Iniciar o processo de captura de regulamentações. <br> 2. Capturar uma regulamentação já existente no sistema.                                                      | O sistema deve identificar que a regulamentação já existe no sistema e evitar a duplicação.                                           | Nenhuma.                                                       |
| Log de atividades de captura                        | O sistema deve ter um mecanismo de logging habilitado.                                                 | 1. Iniciar o processo de captura de regulamentações. <br> 2. Capturar uma nova regulamentação. <br> 3. Verificar o log de atividades para a regulamentação capturada.   | O sistema deve registrar no log todas as atividades de captura, incluindo a data, hora e fonte da regulamentação capturada.            | O log deve estar atualizado com as informações de captura.   |

<br>

**RF003 -  Pesquisa**

O usuário deve ser capaz de procurar regulamentações.

*Critérios de aceitação*

1. O sistema deve permitir a pesquisa por texto e por voz.
2. O sistema deve converter a entrada de voz em texto e usar esse texto para realizar a pesquisa.
3. O sistema deve ser capaz de encontrar as regulamentações baseadas no input do usuário.
4. O sistema deve permitir que o usuário refine os resultados da pesquisa por critérios adicionais.


| **Nome**                                           | **Pré-condição**                                                                                      | **Procedimentos**                                                                                                                                                       | **Resultado Esperado**                                                                                                                  | **Pós-condição**                                              |
|----------------------------------------------------|--------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Pesquisa por texto                                 | O banco de dados deve conter regulamentações.                                                          | 1. Acessar a funcionalidade de pesquisa. <br> 2. Inserir um termo de busca no campo de texto. <br> 3. Executar a pesquisa.                                             | O sistema deve exibir as regulamentações que correspondem ao termo de busca inserido.                                                   | Nenhuma                                                       |
| Pesquisa por voz                                   | 1. O banco de dados deve conter regulamentações. <br> 2. O sistema deve estar integrado a uma API de reconhecimento de voz. | 1. Acessar a funcionalidade de pesquisa. <br> 2. Iniciar a pesquisa por voz e falar o termo de busca. <br> 3. Aguardar a conversão de voz em texto e a execução da pesquisa. | O sistema deve converter a entrada de voz em texto e exibir as regulamentações que correspondem ao termo de busca.                      | Nenhuma                                                       |

**RF004 -  Classificação**

O sistema deve classificar as regulamentações captadas.

*Critérios de aceitação*

1. O sistema deve classificar as regulamentações em tags obtidas pelo conteúdo das regulamentações.
2. O usuário deve ser capaz de alterar o tagueamento das regulamentações.
3. O sistema deve permitir a adição de múltiplas tags a uma única regulamentação.
4. O sistema deve permitir a filtragem de regulamentações com base nas tags.


| **Nome**                                           | **Pré-condição**                                                                                     | **Procedimentos**                                                                                                                                                       | **Resultado Esperado**                                                                                                                  | **Pós-condição**                                              |
|----------------------------------------------------|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| Classificação automática de regulamentações        | O sistema deve ter o serviço de Processamento de Linguagem Natural (PLN) para classificação configurado.               | 1. Capturar uma nova regulamentação. <br> 2. Verificar a integridade do documento.<br> 3. Transformar o arquivo para um formato acessível.<br> 4. Passar o conteúdo pelo script de PLN.                  | O sistema deve classificar a regulamentação em tags relevantes obtidas pelo conteúdo da regulamentação.                                  | A regulamentação deve estar classificada com as tags geradas. |
| Alteração manual de tags                            | O sistema deve ter regulamentações classificadas com tags.                                             | 1. Acessar a regulamentação classificada. <br> 2. Editar as tags atribuídas automaticamente. <br> 3. Salvar as alterações.                                             | O usuário deve ser capaz de alterar as tags da regulamentação.                                                                           | As alterações devem ser refletidas na regulamentação.          |
 Busca por tags                                  | O sistema deve ter regulamentações classificadas com tags.                                             | 1. Acessar a funcionalidade de pesquisa ou listagem de regulamentações. <br> 2. Pesquisar o nome de uma tag no campo de busca.                                 | O sistema deve encontrar as regulamentações com base nas tags escritas.                                                                | Resultados filtrados disponíveis para visualização.           |



#### Requisitos Não Funcionais 

&emsp;&emsp;Mapear requisitos não funcionais para desenvolvimento de software é uma prática essencial para garantir que uma aplicação atenda às necessidades e expectativas dos usuários, bem como aos padrões de qualidade e desempenho. Os requisitos não funcionais descrevem aspectos do sistema que não estão diretamente ligados às funções específicas do software, mas que são essenciais para a viabilidade, desempenho, manutenção e usabilidade do sistema. Para um sistema que é utilizado em um contexto financeiro regulado, como o acesso ao sistema do Bank of America com necessidade de conformidade regulatória, é fundamental incluir critérios de aceitação que garantam a aderência às normas e leis, bem como a capacidade de gerar e acessar informações críticas regulatórias de forma eficiente e segura. Abaixo, detalha a importância de cada tipo de requisito não funcional citado, conforme a norma ISO25010:

**RNF01 - Desempenho**
- Critério de Aceitação: O sistema deve responder em até 2 segundos para listagem de regulamentações, e até 3 segundos para pesquisa.
- Pré-condição: O sistema deve estar corretamente configurado e o banco de dados deve estar otimizado.
- Procedimentos: 
  1. Realizar uma consulta de listagem ou pesquisa de regulamentações.
  2. Medir o tempo de resposta.
- Resultado Esperado: O tempo de resposta deve estar dentro dos limites estabelecidos (2 segundos para listagem e 3 segundos para pesquisa).
- Pós-condição: A listagem ou pesquisa de regulamentações deve ser apresentada ao usuário sem atrasos significativos.

**RNF02 - Usabilidade**
- Critério de Aceitação: A interface deve ser intuitiva, com feedback em tempo real nas pesquisas.
- Pré-condição: O sistema deve estar com a interface totalmente desenvolvida e testada em navegadores compatíveis.
- Procedimentos: 
  1. Realizar testes de usabilidade com usuários reais.
  2. Verificar se o usuário consegue completar as operações (listagem, download, pesquisa, alteração de tags) em até 3 cliques ou menos.
  3. Testar o feedback visual e sugestões automáticas durante a pesquisa.
- Resultado Esperado: O usuário deve conseguir utilizar as funcionalidades principais (listar, pesquisar, baixar, editar tags) sem dificuldades.
- Pós-condição: O sistema deve registrar interações para futuras melhorias de usabilidade, mas sem impactar a experiência do usuário.

**RNF03 - Confiabilidade**
- Critério de Aceitação: O sistema deve identificar e evitar regulamentações duplicadas acima de 85% de precisão.
- Pré-condição: O banco de dados deve estar corretamente sincronizado e os algoritmos de detecção de duplicidade devem estar implementados.
- Procedimentos: 
  1. Capturar uma regulamentação já existente.
  2. Verificar se o sistema detecta corretamente a duplicidade e impede a inserção de um novo registro.
- Resultado Esperado: O sistema deve impedir duplicações e fornecer um aviso claro ao usuário.
- Pós-condição: A integridade do banco de dados é mantida, sem duplicação de registros.

**RNF04 - Segurança**
- Critério de Aceitação: Todo download de regulamentação deve ser realizado com segurança (via SSL).
- Pré-condição: O sistema deve ter certificados SSL corretamente configurados.
- Procedimentos: 
  1. Acessar uma regulamentação e iniciar um download.
  2. Verificar o certificado SSL e se o download é iniciado sem problemas de segurança.
- Resultado Esperado: O download deve ocorrer sem alertas de segurança e o arquivo deve ser baixado corretamente.
- Pós-condição: O usuário possui uma cópia segura da regulamentação no dispositivo.

**RNF05 - Manutenibilidade**
- Critério de Aceitação: O sistema deve permitir fácil manutenção e extensão de funcionalidades.
- Pré-condição: O código deve estar modularizado e bem documentado.
- Procedimentos: 
  1. Realizar a adição de uma nova funcionalidade (como um novo critério de pesquisa).
  2. Verificar o impacto da mudança no sistema.
- Resultado Esperado: A nova funcionalidade deve ser adicionada sem causar problemas em outras partes do sistema.
- Pós-condição: O sistema permanece funcional e pronto para futuras expansões.

**RNF06 - Compatibilidade**
- Critério de Aceitação: O sistema deve funcionar de forma consistente nos principais navegadores (Chrome e Edge).
- Pré-condição: As tecnologias front-end utilizadas devem ser compatíveis com os navegadores modernos.
- Procedimentos: 
  1. Realizar testes de usabilidade e funcionalidade em diferentes navegadores.
  2. Verificar o comportamento da aplicação em dispositivos móveis.
- Resultado Esperado: A aplicação deve funcionar corretamente e exibir as funcionalidades sem distorções em todos os navegadores.
- Pós-condição: O sistema está disponível para usuários em diferentes plataformas e navegadores.

**RNF07 - Compatibilidade de Pesquisa por Voz**
- Critério de Aceitação: O sistema de pesquisa por voz deve converter a entrada de voz em texto com uma taxa de sucesso de 95%.
- Pré-condição: O sistema deve estar integrado a uma API de reconhecimento de voz (Api do Navegador).
- Procedimentos: 
  1. Realizar diferentes buscas utilizando a funcionalidade de voz.
  2. Verificar se o sistema converte corretamente e retorna os resultados adequados.
- Resultado Esperado: O sistema deve exibir regulamentações relacionadas ao texto derivado da entrada de voz.
- Pós-condição: A funcionalidade de pesquisa por voz é usada sem falhas ou mal-entendidos frequentes.

&emsp;&emsp;Esses critérios de aceitação detalhados asseguram que o sistema não só atende às expectativas funcionais e de desempenho, mas também cumpre com rigorosas exigências regulatórias do setor financeiro, garantindo conformidade, segurança e acessibilidade para os usuários no ambiente regulado. Cada um desses requisitos não funcionais possui um critério de aceitação específico que ajuda as equipes de desenvolvimento e teste a garantir que o sistema final esteja alinhado com as expectativas e necessidades dos usuários, bem como com os objetivos comerciais e técnicos da organização. A adoção destes padrões e a sua verificação contínua são essenciais para o sucesso e a sustentabilidade de qualquer solução de software.

### 4.1.2 Proposta de Arquitetura

A arquitetura de software de um sistema é fundamental para garantir que ele atenda de forma eficaz aos requisitos funcionais e não funcionais estabelecidos. Neste contexto, a solução desenvolvida foi projetada para capturar, processar, e disponibilizar regulamentações de forma automatizada e eficiente, utilizando técnicas avançadas como Processamento de Linguagem Natural (PLN) e web scraping. A arquitetura proposta não apenas garante a correta implementação das funcionalidades desejadas, como também assegura que o sistema seja escalável, seguro, e fácil de manter. Esta seção detalha a arquitetura da solução, descrevendo seus principais componentes e explicando como cada um deles contribui para o atendimento dos requisitos do sistema.

  <img src="../assets/arquitetura da solução.jpeg">

### Relação com os Requisitos Funcionais

1. **Web Scraping dos Sites**
   - **Funcionalidade**: A captura das regulamentações é realizada por meio de web scraping nos sites principais. 
   - **Requisitos Relacionados**: 
     - **RF002 - Captura de regulamentações**: O sistema deve listar as regulamentações capturadas dos sites e garantir que regulamentações duplicadas não sejam incluídas no banco de dados.
   - **Critérios de Aceitação**: A arquitetura precisa garantir que o processo de captura seja preciso e que os logs detalhados sejam mantidos, o que está representado pelo Sistema de Log.

2. **Processamento de Linguagem Natural (PLN) - Tagueamento**
   - **Funcionalidade**: Após a captura, as regulamentações são processadas por um módulo de PLN para tagueamento, que organiza e classifica as regulamentações para que possam ser facilmente encontradas durante a pesquisa.
   - **Requisitos Relacionados**: 
     - **RF004 - Tagueamento de regulamentações**: O sistema deve automaticamente taguear as regulamentações capturadas.
   - **Critérios de Aceitação**: O sistema precisa ser capaz de realizar o tagueamento de forma automática e precisa, com suporte à modificação manual do tagueamento pelo usuário.

3. **Base de Dados**
   - **Funcionalidade**: O banco de dados centraliza o armazenamento de todas as regulamentações capturadas, tagueadas e permite que essas informações sejam acessadas e manipuladas.
   - **Requisitos Relacionados**: 
     - **RF001 - Listagem**: A listagem das regulamentações deve ser extraída da base de dados.
     - **RF006 - Exibir detalhamento da regulamentação**: As informações detalhadas de cada regulamentação devem ser recuperadas do banco de dados.
     - **RF008 - Filtros**: Os usuários podem aplicar filtros sobre os dados armazenados no banco.
   - **Critérios de Aceitação**: O banco de dados deve suportar consultas rápidas e ser escalável para atender à demanda de usuários simultâneos.

4. **PLN - Captura de Intenção**
   - **Funcionalidade**: Um segundo módulo de PLN é utilizado para capturar a intenção do usuário durante a pesquisa, seja por texto ou voz, e direcionar a pesquisa para os resultados mais relevantes.
   - **Requisitos Relacionados**: 
     - **RF003 - Pesquisa**: Este módulo é crucial para converter a entrada de voz em texto e realizar a pesquisa de regulamentações.
   - **Critérios de Aceitação**: O tempo de resposta deve ser rápido, garantindo que o sistema atenda ao requisito de desempenho e seja capaz de encontrar regulamentações conforme o input do usuário.

5. **Frontend**
   - **Funcionalidade**: A interface de usuário que permite a interação com o sistema, incluindo a pesquisa, visualização e download das regulamentações.
   - **Requisitos Relacionados**: 
     - **RF001 - Listagem**: A interface permite que os usuários visualizem e interajam com as regulamentações.
   - **Critérios de Aceitação**: O frontend deve ser intuitivo e consistente, garantindo uma boa experiência de usuário (Usabilidade).

6. **API**
   - **Funcionalidade**: A API serve como a ponte entre o frontend e a base de dados, facilitando a comunicação entre diferentes partes do sistema.
   - **Requisitos Relacionados**: 
     - **RF003 - Pesquisa**: A API processa as consultas de pesquisa e retorna os resultados relevantes.
   - **Critérios de Aceitação**: A API deve ser rápida e segura, garantindo a integridade dos dados e a escalabilidade do sistema.

7. **Sistema de Log**
   - **Funcionalidade**: O sistema de log monitora todas as atividades de captura e processamento, garantindo a rastreabilidade e a manutenção da integridade do sistema.
   - **Requisitos Relacionados**: 
     - **RF002 - Captura de regulamentações**: O sistema de log é crucial para manter um registro detalhado das atividades de captura.
   - **Critérios de Aceitação**: Logs precisos e abrangentes devem ser mantidos, garantindo a confiabilidade e segurança do sistema.

8. **Core**
   - **Funcionalidade**: O núcleo do sistema, que coordena a interação entre os diferentes módulos.
    - **Requisitos Relacionados**: 
      - **RF001 - Listagem**: O core é responsável por orquestrar a listagem das regulamentações.
      - **RF003 - Pesquisa**: O core processa as consultas de pesquisa e direciona para os módulos apropriados.
    - **Critérios de Aceitação**: O core deve ser eficiente e confiável, garantindo que as operações sejam realizadas de forma correta e rápida.

### Relação com os Requisitos Não Funcionais

- **Adequação Funcional**: A arquitetura garante que as funcionalidades de pesquisa, captura e listagem sejam realizadas de forma consistente e precisa, cumprindo os critérios de correção funcional.
  
- **Eficiência de Performance**: A separação dos módulos de PLN e a utilização de um banco de dados robusto contribuem para o rápido processamento e resposta às consultas do usuário, atendendo aos requisitos de tempo de resposta e capacidade.

- **Compatibilidade**: A arquitetura é projetada para ser interoperável com os principais navegadores e dispositivos, garantido pela API e pela consistência da interface frontend.

- **Usabilidade**: A arquitetura modular permite um frontend intuitivo, enquanto os módulos de PLN garantem que as interações do usuário sejam compreendidas e processadas eficientemente.

- **Confiabilidade e Segurança**: A inclusão de um sistema de log e uma arquitetura segura asseguram que o sistema seja confiável e protegido, atendendo aos requisitos de integridade e disponibilidade.

- **Manutenibilidade**: A clara separação de componentes e a utilização de módulos bem definidos facilitam a manutenção e a escalabilidade do sistema.

- **Portabilidade**: A arquitetura deve permitir a exportação dos dados em diferentes formatos, mantendo a flexibilidade de uso e migração dos dados.


## 4.2 Padrões de Trabalho

&emsp;&emsp;Estabelecer padrões de trabalho é essencial para garantir que todos no grupo estejam em sintonia e sigam um fluxo de trabalho eficiente e organizado. Os padrões funcionam como um guia comum, ajudando a evitar mal-entendidos e promovendo uma colaboração mais fluida. Quando todos sabem exatamente como as tarefas devem ser feitas e quais são as expectativas, o time pode focar no que realmente importa: entregar um produto de alta qualidade. Com diretrizes claras, conseguimos minimizar o retrabalho, otimizar nosso tempo e garantir que tudo esteja em conformidade com os objetivos do projeto.

#### Padrões de Trabalho

1. **Padrões de Card no GitHub Projects:**
   - **Utilização de Issues:** Todas as tarefas devem ser registradas como issues no GitHub.
   - **Milestones:** As issues são organizadas em milestones, que servem como marcos importantes no nosso cronograma, sendo elas as sprints. Eles nos ajudam a monitorar o progresso do projetos e garantir que tudo será entregue.
   - **Labels:** Utilizamos labels para categorizar as issues, o que facilita a visualização do tipo de tarefa (ex: bug, feature, documentação).

2. **Padrão de Branch:**
   - **Main:** A branch principal, onde mantemos a versão estável e pronta para produção.
   - **Develop:** A branch de desenvolvimento, onde novas funcionalidades e correções são integradas antes de seguirem para a produção.
   - **Hotfix:** Branch para correções urgentes em produção, ou seja, usada para resolver problemas críticos de forma rápida.
   - **Bugfix:** Branch dedicada à correção de bugs que não precisam ser corrigidos imediatamente, mas devem ser resolvidos antes do próximo release.
   - **Feature:** Branches dedicadas ao desenvolvimento de novas funcionalidades. Cada nova feature deve ter sua própria branch para facilitar a gestão e revisão do código.

3. **Padrão de Commit:**
   - **Tipos de Commits:**
     - **feat:** Para o desenvolvimento de novas funcionalidades.
     - **fix:** Para correção de bugs.
     - **docs:** Para mudanças na documentação.
     - **style:** Para ajustes de estilo, como formatação, pontuação, etc.
     - **refactor:** Para refatoração de código que melhora a estrutura ou performance sem alterar a funcionalidade.
     - **test:** Para adição ou modificação de testes.
     - **chore:** Para tarefas de manutenção que não afetam o código de produção.
   - **Idioma:** Todos os commits devem ser feitos em português, garantindo que a equipe inteira compreenda as mudanças realizadas.

4. **Presença na Daily:**
   - A daily é um ponto de encontro diário onde todos revisam e atualizam o progresso do projeto, além de comunicar possíveis impedimentos. A presença de todos é fundamental para manter o alinhamento da equipe e garantir que nada fique para trás.

5. **Revisão Contínua das Tarefas (PR no GitHub):**
   - Cada tarefa deve ser submetida via Pull Request (PR) no GitHub, sempre vinculada a uma tarefa específica no GitHub Projects.
   - As revisões de PR seguem um esquema de pares, onde cada desenvolvedor revisa o código de outro. Isso garante uma revisão constante e equilibrada:
     - **Paula Piva** revisa **Breno Lima**
     - **Breno Lima** revisa **Bianca Borges**
     - **Bianca Borges** revisa **Isabella Fernandes**
     - **Isabella Fernandes** revisa **Gabrielly Vitor**
     - **Gabrielly Vitor** revisa **Paula Piva**

&emsp;&emsp;Esses padrões foram criados para ajudar a equipe a trabalhar de maneira mais eficiente, garantindo que todos os aspectos do desenvolvimento sejam cobertos com qualidade, aumentando assim, a qualidade do projeto.

## 4.3 Api Speech to Text

A API de Conversão de Áudio em Texto (Speech to Text) é responsável por processar arquivos de áudio e convertê-los em texto, utilizando o serviço IBM Watson Speech to Text. Esta API será essencial para funcionalidades de pesquisa na aplicação, onde o áudio recebido será transcrito automaticamente, permitindo buscas e interações baseadas em voz. A integração com o IBM Watson garante alta precisão e confiabilidade, aproveitando modelos treinados especificamente para o idioma português brasileiro.

#### Endpoints Disponíveis

##### 1. **Processar Áudio**

- **Endpoint:** `/process-audio`
- **Método HTTP:** `POST`
- **Descrição:** Este endpoint recebe um arquivo de áudio no formato `wav` e retorna a transcrição do áudio em texto, juntamente com um índice de confiança.

###### Parâmetros de Entrada

- **`audio_file`** (Requerido): Um arquivo de áudio no formato `wav` que será transcrito.
  - **Tipo:** `multipart/form-data`
  - **Descrição:** Arquivo de áudio que deve ser enviado como `multipart/form-data`. Este arquivo será processado pela API para realizar a transcrição.

###### Respostas

**200 OK**
  - **Descrição:** Transcrição bem-sucedida do áudio enviado.
  - **Exemplo de Corpo da Resposta:**
    ```json
    {
      "transcription": "Este é o texto transcrito do áudio enviado.",
      "confidence": 0.95
    }
    ```
  - **Campos da Resposta:**
    - **`transcription`**: A transcrição do áudio enviado.
      - **Tipo:** `string`
      - **Descrição:** Texto que representa a conversão do áudio em palavras.
    - **`confidence`**: O índice de confiança da transcrição.
      - **Tipo:** `float`
      - **Descrição:** Um valor decimal que indica o nível de confiança do modelo na transcrição realizada.

#### Testes - Speech to Text

**Teste 1**

<div align="center">

<sub>Figura X - Teste 1 - Áudio perto do microfone</sub>

<sup>Fonte: Elaborado pelos autores</sup>

</div>


| **Nome**                              | **Pré-condição**                                                                                                       | **Procedimentos**                                                                                                                                                                                                                                                                                      | **Resultado Esperado**                                                                                                                     | **Pós-condição**                                     |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Áudio Perto do Microfone | O sistema deve estar configurado com o serviço IBM Watson Speech to Text e o endpoint `/speech-to-text/` deve estar ativo. | 1. Gravar um áudio próximo ao microfone com o conteúdo relevante para teste. <br> 2. Preparar o arquivo de áudio no formato `.wav` para envio. <br> 3. Enviar o arquivo `audio_comum.wav` ao endpoint `/speech-to-text/` utilizando o método `POST` via Postman. | O sistema deve transcrever o áudio com alta precisão, retornando a frase esperada e um índice de confiança superior a 0.9. A transcrição deve refletir fielmente o conteúdo do áudio. | O sistema retorna a transcrição e o índice de confiança. |

**Teste 2**

<div align="center">

<sub>Figura X - Teste 2 - Áudio longe do microfone</sub>

![Teste - Speech to Text](../assets/teste-api-speech-to-text2.jpg)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

| **Nome**                                 | **Pré-condição**                                                                                                       | **Procedimentos**                                                                                                                                                                                                                                                                                      | **Resultado Esperado**                                                                                                                     | **Pós-condição**                                     |
|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Áudio Longe do Microfone | O sistema deve estar configurado com o serviço IBM Watson Speech to Text e o endpoint `/speech-to-text/` deve estar ativo. | 1. Gravar um áudio longe do microfone com o conteúdo relevante para teste. <br> 2. Preparar o arquivo de áudio no formato `.wav` para envio. <br> 3. Enviar o arquivo `audio_longe.wav` ao endpoint `/speech-to-text/` utilizando o método `POST` via Postman. | O sistema deve transcrever o áudio corretamente, retornando a frase esperada e um índice de confiança de `1.0`, indicando uma transcrição precisa e de alta confiança. | O sistema retorna a transcrição e o índice de confiança. |

**Teste 3**

<div align="center">

<sub>Figura X - Teste 3 - Áudio com ruído</sub>

![Teste - Speech to Text](../assets/teste-api-speech-to-text3.jpg)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

| **Nome**                             | **Pré-condição**                                                                                                       | **Procedimentos**                                                                                                                                                                                                                                                                                      | **Resultado Esperado**                                                                                                                     | **Pós-condição**                                     |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Áudio com Ruído   | O sistema deve estar configurado com o serviço IBM Watson Speech to Text e o endpoint `/speech-to-text/` deve estar ativo. | 1. Gravar um áudio com presença de ruído de fundo com o conteúdo relevante para teste. <br> 2. Preparar o arquivo de áudio no formato `.wav` para envio. <br> 3. Enviar o arquivo `audio_ruido.wav` ao endpoint `/speech-to-text/` utilizando o método `POST` via Postman. | O sistema deve transcrever o áudio corretamente, retornando a frase esperada e um índice de confiança de `1.0`, indicando uma transcrição precisa e de alta confiança, apesar do ruído. | O sistema retorna a transcrição e o índice de confiança. |

**Teste 4**

<div align="center">

<sub>Figura X - Teste 4 - Áudio vazio</sub>

![Teste - Speech to Text](../assets/teste-api-speech-to-text4.jpg)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

| **Nome**                          | **Pré-condição**                                                                                                       | **Procedimentos**                                                                                                                                                                                                                                                                                      | **Resultado Esperado**                                                                                                                     | **Pós-condição**                                     |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Áudio Vazio    | O sistema deve estar configurado com o serviço IBM Watson Speech to Text e o endpoint `/speech-to-text/` deve estar ativo. | 1. Gravar um áudio com praticamente nenhum som ou com sons muito baixos. <br> 2. Preparar o arquivo de áudio no formato `.wav` para envio. <br> 3. Enviar o arquivo `audio_vazio.wav` ao endpoint `/speech-to-text/` utilizando o método `POST` via Postman. | O sistema deve retornar uma transcrição com baixa confiança, possivelmente capturando sons mínimos ou retornando uma transcrição incompleta. Neste caso, o índice de confiança retornado foi `0.62`, indicando incerteza na transcrição. | O sistema retorna a transcrição e o índice de confiança. |

## Complemento de Reconhecimento de Áudio

&emsp;&emsp;Para o desenvolvimento do projeto com o uso de processamento de linguagem natural na aplicação web para o Bank of America, a equipe implementou no próprio frontend uma funcionalidade para busca por voz, atendendo às necessidades dos usuários da aplicação. Essa ferramenta utilizada previamente à conversão do áudio em texto, é essencial para a coleta e armazenamento da voz do usuário de forma eficiente, integrando-se perfeitamente ao sistema Com isso,  o arquivo de áudio é enviado para a API de conversão de fala para texto (Speech to Text), executando assim a pesquisa do usuário.

&emsp;&emsp;Na aplicação de fato, na barra de pesquisa, o componente utilizado para essa pesquisa foi configurado para permitir tanto a entrada de texto quanto a pesquisa por voz. A instância de reconhecimento de fala, quando inicializada, é configurada para operação contínua, capturando comandos de voz em tempo real. Ao ativar a pesquisa por voz, o áudio é capturado e após a finalização, o mesmo é convertido em arquivo de áudio e enviado para a API de Speech to Text. A seguir, será detalhado os testes realizados para validar essa funcionalidade fundamental para o sucesso da solução:

**Teste 1**

<div align="center">

<sub>Figura X - Teste 1 - Audio sendo transcrito no Frontend</sub>

![Teste - Reconhecimento de Áudio](../assets/teste-recebimento-audio.jpg)

</div>


| **Nome**                              | **Pré-condição**                                                                                                       | **Procedimentos**                                                                                                                                                                                                                                                                                      | **Resultado Esperado**                                                                                                                     | **Pós-condição**                                     |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Reconhecimento de Áudio | O sistema deve oferecer a opção ao usuário de iniciar sua pesquisa por meio de reconhecimento de áudio. | 1. Caso a funcionalidade seja ativada, o sistema deve reconhecer o áudio do usuário. <br> 2. Coletar e armazenar o áudio do usuário. <br> 3. Ao final da fala do usuário, o sistema deve encerrar a captação de áudio . | O sistema deve transformar esse áudio coletado em arquivo. Esse arquivo de áudio deve ser gravado de forma clara e bem-sucedida. | O sistema envia o arquivo de áudio para a API Speech To Text. |

## 4.4 Projeto de Banco de Dados

&emsp;&emsp;Nesta seção, abordamos o design do banco de dados para o Cora, com ênfase nos modelos conceitual e lógico. Esses elementos são essenciais para assegurar a eficiência, integridade e desempenho da plataforma, oferecendo uma experiência de uso fluida e produtiva para os usuários.

### Modelo Lógico

&emsp;&emsp;O modelo lógico do sistema tem como objetivo organizar e gerenciar as regulamentações e normas relevantes para a solução. O sistema permite a categorização das normas através de tags, facilitando a busca e o gerenciamento dessas informações. As entidades e seus relacionamentos foram cuidadosamente definidos para garantir a integridade e a eficiência do sistema.

<div align="center">

<sub>Figura X - Modelo Lógico</sub>

![Modelo Lógico](../assets/Modelo%20lógico.drawio.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

&emsp;&emsp;O modelo lógico apresentado oferece uma estrutura robusta para o gerenciamento de normas e suas associações com tags. Ao organizar as normas de forma clara e acessível, o sistema proporciona uma ferramenta eficaz para garantir a conformidade e facilitar o acesso às regulamentações relevantes, contribuindo para uma gestão mais eficiente e organizada.

## 4.5 Implementação do Algoritmo NLP 

&emsp;&emsp;Para o desenvolvimento eficaz do Projeto Cora, uma solução inovadora criada pela equipe para o Bank of America, utiliza-se o Processamento de Linguagem Natural (NLP), que é  o uso de IA que permite a máquinas compreenderem, interpretarem e responderem à linguagem humana de maneira eficiente e contextualizada. Além disso, foi também utilizado um conjunto de tecnologias avançadas, visando facilitar análises e pesquisas sobre normas e regulamentações dos órgãos reguladores brasileiros, como Bacen, CVM e Anbima. O projeto integra reconhecimento de voz e NLP, permitindo que os funcionários acessem informações regulatórias de forma otimizada e eficiente por meio de comandos de voz, agilizando processos críticos da instituição. A seguir, será apresentado mais detalhes sobre a implementação desse valioso algoritmo de NLP, localizado também no [Google Colab](https://colab.research.google.com/drive/1_turWxrsADZ5MGa7eTpe9Tl2alyn1qYi?usp=sharing):

### Objetivos
&emsp;&emsp;Com o uso de NLP, reconhecimento de voz e tecnologias em nuvem, o principal objetivo é facilitar a consulta das regulações. Sendo assim, o sistema permite:
- Conversão de áudio em texto para processamento;
- Pesquisas rápidas e precisas sobre normas e regulamentações;
- Classificação automática das informações por órgãos reguladores, como Bacen, CVM e Anbima.

### Tecnologias Utilizadas
&emsp;&emsp;A solução utiliza uma arquitetura moderna e escalável, com as seguintes tecnologias:
| Tecnologia | Descrição |
| ---------- | --------- |
| Reconhecimento de Voz | Converte comandos de áudio em texto utilizável. |
| NLP com BERT | Modelo pré-treinado para o português, ajustado para o entendimento de normas e regulamentações. |
| AWS (Amazon Web Services) | Usado para o armazenamento de dados e processamento na nuvem, garantindo escalabilidade e segurança no gerenciamento das informações. |
| Vetorização | Transforma texto em representações numéricas, usando algoritmos de embeddings e vetores de palavras.

### Escolha do Modelo BERT
&emsp;&emsp;A equipe optou pelo modelo BERT para o desenvolvimento da solução Cora, devido à sua capacidade de capturar o contexto bidirecional das palavras em uma frase, o que o torna extremamente eficaz em tarefas de classificação de texto e compreensão de linguagem natural. O BERT analisa tanto as palavras anteriores quanto as subsequentes, proporcionando uma interpretação mais precisa e aprofundada, especialmente em textos longos e complexos, como regulamentações financeiras, onde a clareza contextual é fundamental para a correta interpretação das normas. Além disso, sua arquitetura permite ajustar o modelo para tarefas específicas com um mínimo de ajuste, garantindo flexibilidade e eficiência na aplicação ao cenário regulatório.

<div align="center">

<sub>Figura X - Modelo Bert</sub>

![Modelo Bert](../assets/modelo-bert.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

### Treinamento do Modelo
&emsp;&emsp;O modelo BERT (Bidirectional Encoder Representations from Transformers) é uma arquitetura de rede neural desenvolvida pela Google, amplamente utilizada para a tarefa de processamento de linguagem natural. A capacidade do BERT de entender o contexto de uma palavra em um texto é o que o torna tão poderoso. Ele é pré-treinado em um grande corpus de texto e depois ajustado (fine-tuned) para tarefas específicas como classificação, extração de entidades, e outras. Este processo de ajuste fino envolve a alimentação de exemplos específicos da tarefa em questão, permitindo ao modelo aprender nuances que são específicas para a tarefa e o domínio. 

**1. Preparação dos Dados:**
   - Os dados foram inicialmente pré-processados, com as frases sendo convertidas em representações numéricas adequadas para o aprendizado de máquina através de tokenização, usando o tokenizador do BERT. Essa etapa inclui converter o texto em tokens e, posteriormente, em índices que correspondem ao vocabulário do BERT.
   - As classificações ou rótulos foram extraídos e transformados em formatos compatíveis para treinamento, criando os conjuntos de entrada (X) e as respectivas classificações (y), onde X consiste em sequências de índices e y em rótulos categóricos.

**2. Divisão dos Dados:**
   - Os dados foram divididos em conjuntos de treinamento e validação, usando a função `train_test_split` com uma proporção comum como 80% para treinamento e 20% para validação/teste, garantindo que o modelo seja avaliado em dados não vistos durante o treinamento.
   - A divisão foi realizada com um parâmetro de `random_state` para garantir a consistência e reprodutibilidade dos conjuntos de dados divididos em múltiplas execuções.

**3. Treinamento do Modelo:**
   - O modelo BERT foi configurado com parâmetros específicos, como número de épocas, taxa de aprendizado, e tamanho do lote, utilizando o framework adequado, por exemplo, Hugging Face's Transformers.
   - Durante o treinamento, o modelo ajusta seus pesos internos para minimizar a perda, aprendendo a associar as entradas tokenizadas às suas respectivas classificações.

**4. Avaliação do Modelo:**
   - Após o treinamento, o modelo foi avaliado usando o conjunto de validação/teste para medir seu desempenho. Utilizou-se funções como `evaluate` para obter métricas de desempenho, tais como precisão, recall, e F1-score.
   - O desempenho do modelo é detalhado em um relatório de avaliação, que fornece uma visão clara de como o modelo está performando em termos de classificar corretamente novos exemplos em comparação com os rótulos verdadeiros.

Essas etapas são fundamentais para o desenvolvimento e avaliação de um modelo BERT para tarefas de classificação no campo do processamento de linguagem natural.

#### Métricas de Desempenho:
&emsp;&emsp;Essa etapa de treinamento foi fundamental para garantir que o modelo seja capaz de classificar corretamente as consultas dos usuários em relação às regulamentações dos órgãos reguladores.
- O modelo apresentou os seguintes resultados:
  - Precisão (Precision) para as três classes variou de 94% a 100%.
  - Recall variou de 95% a 100%.
  - F1-score foi alto para todas as classes, indicando que o modelo foi eficiente tanto em precisão quanto em sensibilidade.
  - A acurácia geral foi de 98%. 
A alta taxa das métricas demonstra que o modelo está com overfitting, situação esperada devido ao dataset  com dados sintético, apresentando pouca variabilidade e, consequentemente, alta previsibilidade.

<div align="center">

<sub>Figura X - Acurácia</sub>

![Previsão](../assets/acuracia-nlp.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

### Previsão
&emsp;&emsp;Após o treinamento do modelo, o próximo passo é a etapa de previsão, onde o modelo é aplicado para classificar novos dados que não foram utilizados durante o treinamento. Esse processo permite que o sistema de Processamento de Linguagem Natural (NLP) da solução Cora entregue respostas rápidas e precisas, otimizando o atendimento a consultas regulatórias em tempo real. Com isso, os usuários/funcionários podem acessar informações importantes de forma ágil, melhorando a eficiência no cumprimento de normas e regulamentações. Abaixo segue uma descrição detalhada do processo de previsão no Projeto Cora.

| Etapas | Descrição |
| ------ | --------- |
| 1. Preparação dos Novos Dados de Entrada | Para preparar os novos dados de entrada, os quais não foram vistos durante o treinamento, uma nova classe é organizada para estruturar os dados a serem processados. Essa etapa inclui a tokenização do input (texto ou fala convertida em texto) para que ele seja compatível com o modelo treinado. O tokenizador é aplicado para dividir o texto em tokens e garantir que os dados estejam formatados corretamente, seguindo os mesmos parâmetros usados durante o treinamento, como o comprimento fixo dos tokens. |
| 2. Encapsulamento dos Dados Tokenizados | O input tokenizado é encapsulado em uma instância da classe `RealDataDataset`, semelhante ao que foi feito durante o treinamento com o conjunto de dados. Isso facilita o processamento e a entrada dos dados no modelo. |
| 3. Avaliação do Modelo: | O método `model.eval()` é usado para colocar o modelo em modo de avaliação. Isso desativa certas operações, como dropout, que são utilizadas durante o treinamento para melhorar a generalização do modelo, mas não são necessárias no momento da previsão. |
| 4. Previsão | Com o modelo em modo de avaliação, ele faz previsões sobre o novo input. O modelo gera uma saída numérica, e a classe com maior probabilidade é selecionada como a previsão final. Exemplo: Se um funcionário do Bank of America faz uma pergunta sobre as regulamentações da Anbima, o modelo de NLP processa a consulta e retorna a categoria mais adequada, como "Anbima" ou outra entidade reguladora relevante. |
| 5. Conversão da Previsão para Texto | Após o cálculo da previsão numérica, as classes previstas são convertidas de volta para texto, utilizando o mapeamento de classes que foi criado durante o treinamento. Isso permite que a previsão seja compreensível e apresentada de forma útil para o usuário. |

<div align="center">

<sub>Figura X - Previsão</sub>

![Previsão](../assets/previsao-nlp.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

### Pipeline de Pesquisa

&emsp;&emsp;O pipeline de pesquisa no Projeto Cora foi desenvolvido para processar consultas dos usuários e retornar resultados úteis com base nas previsões do modelo de NLP.  Desse modo, a função atua como pipeline, sequenciando as etapas necessárias para,  fornecer respostas contendo a previsão, data, regulador e tags similares a partir do texto de entrada. 

#### Função `resultado`

A função `resultado` recebe como entrada:
- texto: O texto de entrada da consulta feita pelo usuário.
- tags: Um conjunto de tags previamente definidas para categorizar as respostas.


| Etapas | Descrição |
| ------ | --------- |
| 1. Previsão | Utiliza a função `bert_prever`, que aplica o modelo BERT para prever a classificação do texto inserido, com base no treinamento anterior. |
| 2. Verificação de Vetores | Usa a função `check_vectors` para verificar a similaridade entre os vetores de previsão gerados pelo modelo Word2Vec (model_w2v) e as tags fornecidas. As similaridades mais altas são extraídas com a função `pegar_similaridades`. |
| 3. Extração de Datas | A função `encontrar_datas` busca e extrai datas do texto de entrada. |
| 4. Texto Minúsculo e Regulação | O texto é transformado em minúsculas com `texto_para_minusculo`, e a função `extrair_reguladores` é chamada para identificar os reguladores (ex.: Bacen, CVM) mencionados no texto. |
| 5. Retorno | A função retorna quatro elementos:
     - Previsão: A categoria ou classe prevista para o texto.
     - Datas: As datas identificadas no texto.
     - Reguladores: As entidades regulatórias mencionadas no texto.
     - Similaridades: As tags mais semelhantes à consulta com base na análise vetorial. |

#### Exemplo de Resultado
No exemplo fornecido, a consulta `('textos de dinheiro do bacen de 20/09/2003')` resultou no seguinte:
- Previsão: ['Finanças']
- Datas: ['20/09/2003']
- Reguladores: ['bacen']
- Tags Similares: [('Banking as a Service', 0.8961), ('investidores profissionais', 0.8259), ('gestão de fundos', 0.8032)]

&emsp;&emsp;Esse pipeline fornece uma interface eficiente para processar perguntas complexas e retornar informações relevantes com base em previsões de NLP e análise de similaridade.

### Implementação do Modelo NLP
#### 1. Pré-processamento
- Reconhecimento de Voz: O áudio capturado pelo sistema é convertido em texto utilizando serviços de reconhecimento de fala, como o AWS Transcribe.
- Tokenização e Remoção de Stopwords: O texto é segmentado em tokens e filtrado para remover palavras irrelevantes.
- Vetorização: Os textos são transformados em vetores numéricos que representam a semântica das frases.

<div align="center">

<sub>Figura X - Vetorização</sub>

![Vetorização](../assets/vetorizacao-nlp.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

#### 2. Uso de Bibliotecas Essenciais
&emsp;&emsp;O projeto faz uso de diversas bibliotecas de suporte para garantir a eficiência no pré-processamento e no treinamento do modelo:

- spaCy: Usada para tokenização avançada, reconhecimento de entidades e análise de dependências gramaticais.
- Regex (Expressões Regulares): Utilizado para realizar buscas padronizadas dentro do texto, como a extração de datas e entidades regulamentadoras específicas.
- numpy e pandas: Bibliotecas essenciais para a manipulação de arrays numéricos e dados tabulares, respectivamente.
- gdown: Usada para fazer o download de arquivos do Google Drive, facilitando o carregamento de modelos ou datasets pré-treinados.
- pickle: Utilizada para salvar e carregar objetos Python serializados, como modelos treinados ou transformações de dados, possibilitando a reutilização posterior.

#### 3. Métricas de Avaliação
&emsp;&emsp;Para garantir que o modelo está funcionando corretamente e sendo avaliado de maneira eficaz, utilizamos as seguintes métricas:

- classification_report: Gera um relatório com precisão, recall e F1-score, avaliando o desempenho do modelo.
- cosine_similarity: Utilizado para calcular a similaridade de cosseno entre dois vetores, comum em problemas de comparação de documentos ou textos.

### Benchmark entre modelos

Além do BERT, o projeto também testou utilizar outro algoritmo para otimização do processo de classificação: Random Forest Classifier. O **RandomForestClassifier** é um modelo de aprendizado de máquina baseado em árvores de decisão que opera construindo múltiplas árvores durante o treinamento e entregando a média das previsões de cada árvore. Ele é eficaz para muitos problemas de classificação e regressão, oferecendo robustez a ruídos e sobreajuste. No entanto, ele não é especializado para lidar com dados textuais complexos e depende de uma etapa adicional de vetorização que pode não capturar nuances contextuais e semânticas do texto.

Por outro lado, o **BERT (Bidirectional Encoder Representations from Transformers)** é um modelo de processamento de linguagem natural baseado em uma arquitetura de rede neural profunda que aprende representações de texto considerando o contexto completo de uma frase ou texto (bidirecionalmente), ao contrário de modelos anteriores que apenas consideravam uma direção por vez. Ele foi pré-treinado em grandes quantidades de texto e ajustado (fine-tuned) para tarefas específicas, o que o torna extremamente eficaz para compreender e classificar textos complexos e contextuais.

A escolha do BERT pela equipe para o Projeto Cora é justificada por várias razões:

1. **Compreensão Contextual**: BERT oferece uma capacidade superior de compreender o contexto em que as palavras são usadas. Isso é fundamental para a interpretação precisa de regulamentações e normas, onde o contexto é essencial para entender corretamente o significado e as implicações.

2. **Adaptação a Tarefas Específicas**: O modelo pode ser facilmente ajustado para tarefas específicas sem a necessidade de alterações arquitetônicas profundas. Isso permite à equipe adaptar o modelo para entender melhor os textos regulatórios, algo que o RandomForest não poderia fazer de forma tão eficaz.

3. **Performance em NLP**: BERT tem demonstrado resultados líderes em várias benchmarks de NLP, tornando-o ideal para o processamento e análise de textos complexos encontrados em documentos regulatórios.

4. **Eficiência e Flexibilidade**: A capacidade de BERT para processar texto em um formato que já considera tanto os aspectos pré-treinados quanto a capacidade de fine-tuning o torna uma opção mais eficiente e flexível para projetos que demandam uma compreensão profunda de linguagem natural.

5. **Inovação e Fronteira Tecnológica**: Utilizar o BERT coloca o Bank of America na fronteira da inovação tecnológica, usando o que há de mais avançado em AI para resolver problemas reais de negócio, oferecendo uma vantagem competitiva significativa.

A integração do BERT no Projeto Cora demonstra um compromisso em usar tecnologias avançadas para melhorar a eficiência e precisão nas operações regulatórias, garantindo que as informações sejam acessadas e processadas de maneira confiável e ágil.

### Deploy no modelo NLP

Abaixo, está descrito o processo detalhado de deploy de um algoritmo de Processamento de Linguagem Natural (NLP) em uma instância EC2 da AWS.

1. **Criar nova instância EC2 do tipo `t2.medium`**

   - Acesse o console de gerenciamento da AWS.
   - Vá para o serviço EC2 e clique em "Launch Instance".
   - Selecione uma AMI (Amazon Machine Image) padrão, como "Ubuntu Server 20.04 LTS".
   - Escolha o tipo de instância `t2.medium` para ter uma configuração com 2 vCPUs e 4 GB de RAM.
   - Configure o grupo de segurança para permitir tráfego TCP na porta 8000:
     - Vá para a seção de "Security Group".
     - Crie um novo grupo de segurança ou edite um existente.
     - Adicione uma regra de entrada:
       - Tipo: Custom TCP Rule
       - Porta: 8000
       - Origem: `0.0.0.0/0` (para permitir tráfego de qualquer IP, ou especifique um IP ou faixa de IPs para maior segurança).
   - Complete o restante das configurações padrão e clique em "Launch".

<div align="center">

<sub>Figura X - Detalhes da Instância EC2</sub>

![Detalhes da Instância EC2](../assets/Instância-ec2.jpg)

<sup>Fonte: Elaborado pelos autores</sup>

</div>


<div align="center">
<sub>Figura X - Configuração das portas</sub>

![Configuração das portas](../assets/configuracao-portas.jpg)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

2. **Acessar a instância EC2 via SSH**

   - Após a instância ser inicializada, copie o endereço IPv4 público da instância.
   - No terminal local, use o comando SSH para acessar a instância:
     ```bash
     ssh -i /path/to/your-key.pem ubuntu@ec2-XX-XX-XX-XX.compute-1.amazonaws.com
     ```
   - Certifique-se de que o arquivo `.pem` da chave SSH tenha permissões apropriadas:
     ```bash
     chmod 400 /path/to/your-key.pem
     ```

3. **Atualizar pacotes e instalar Git na instância EC2**

   - Após acessar a instância via SSH, atualize o sistema e instale o Git:
     ```bash
     sudo apt update
     sudo apt install git -y
     ```

4. **Adicionar chave SSH para conectar com o GitHub**

   - Gere uma chave SSH na instância EC2:
     ```bash
     ssh-keygen -t ed25519 -C "your_email@example.com"
     ```
   - Pressione Enter para aceitar o local padrão do arquivo. Configure uma frase secreta, se desejado.
   - Adicione a chave SSH ao agente SSH:
     ```bash
     eval "$(ssh-agent -s)"
     ssh-add ~/.ssh/id_ed25519
     ```
   - Exiba a chave pública gerada:
     ```bash
     cat ~/.ssh/id_ed25519.pub
     ```
   - Copie a chave SSH pública e adicione-a às suas chaves SSH no GitHub. Vá para **Settings > SSH and GPG keys > New SSH key**.

5. **Clonar o repositório dentro da EC2**

   - Clone o repositório GitHub na instância EC2:
     ```bash
     git clone git@github.com:seu-usuario/2024-2A-T09-ES07-G05.git
     ```
   - Navegue até o diretório do projeto clonado:
     ```bash
     cd 2024-2A-T09-ES07-G05
     ```

6. **Instalar dependências do projeto**

   - Instale o Python e `pip`, se necessário:
     ```bash
     sudo apt install python3-pip -y
     ```
   - Instale as dependências do projeto utilizando `pip`:
     ```bash
     pip3 install -r requirements.txt
     ```

7. **Rodar o servidor com o Uvicorn**

   - Utilize o Uvicorn para iniciar o servidor:
     ```bash
     uvicorn pln_intencao:app --host 0.0.0.0 --port 8000
     ```

   - O servidor estará agora acessível publicamente na porta 8000 da sua instância EC2. Abra um navegador e acesse o IP público da sua instância na porta 8000 para confirmar que o deploy foi bem-sucedido.


<div align="center">
<sub>Figura X - Exemplo de requisição já utilizando a EC2</sub>

![Exemplo de requisição](../assets/requisição-ec2.jpg)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

<div align="center">

<sub>Figura X - Requisição vista do terminal</sub>

![Requisição vista do terminal](../assets/servidor-rodando.jpg)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

## 4.6 Integração entre serviços

### Webhook: Serviço de Busca x Core

#### 1. Descrição das Rotas e Endpoints

##### Rota: `/normas/search/`

**Método HTTP:** `POST`

**Descrição:** Este endpoint é responsável por realizar uma busca de normas com base nos critérios fornecidos. Após a busca, se houver resultados, os dados são enviados para um webhook externo.  

**Endpoint do Webhook externo:** `http://127.0.0.1:8080/webhook/busca-normas`

**Formato de dados esperado:** O corpo da requisição (`body`) deve ser enviado no formato JSON, contendo os campos de pesquisa detalhados abaixo.

**Exemplo de requisição:**
  
```json
{
    "tema": ["Teste"],
    "data_expedicao": ["2024-10-24"],
    "regulador": ["Regulador X"],
    "tags": [
        ["ESG", 0.89681077],
        ["SELIC", 0.8259202]
    ]
}
```

#### 2. Estrutura dos dados recebidos

###### **Campos esperados no body da requisição:**

**tema** (`List[str]`): 
  - Uma lista de strings representando temas que serão usados para filtrar as normas. 
  - Exemplo: `["Finanças", "Investimento"]`

**data_expedicao** (`List[str]`): 
  - Uma lista de strings no formato de data (`YYYY-MM-DD`) representando as datas de expedição das normas a serem buscadas. Este campo pode ser vazio caso não seja fornecida nenhuma data.
  - Exemplo: `["2024-10-24"]`

**regulador** (`List[str]`): 
  - Uma lista de strings contendo os nomes dos reguladores. Pode ser uma lista vazia caso o regulador não seja especificado.
  - Exemplo: `["Regulador X"]`

**tags** (`List[List[Union[str, float]]]`): 
  - Uma lista de listas onde cada item contém uma string que representa o nome de uma tag e um valor `float` que indica a relevância dessa tag. As tags são usadas para refinar a busca.
  - Exemplo: 
    ```json
    [
        ["ESG", 0.89681077],
        ["SELIC", 0.8259202]
    ]
    ```

##### **Campos esperados no body para o Webhook:**

**normas** (`List[Dict]`): 
  - A lista de normas encontradas no backend com base nos critérios de busca. Cada norma tem os seguintes campos:
    - `id_norma` (int): O identificador da norma.
    - `nome` (str): O nome da norma.
    - `data_expedicao` (str): A data de expedição da norma.
    - `descricao` (str): Uma breve descrição da norma.
    - `regulador` (str): O nome do regulador responsável pela norma.
    - `revogacao` (bool): Um valor booleano indicando se a norma foi revogada.
    - `arquivo` (str): O arquivo relacionado à norma (em formato hash ou código).
    - `tags` (`List[str]`): A lista de tags associadas à norma.

**Exemplo de JSON de resposta enviado ao Webhook:**

```json
{
    "normas": [
        {
            "id_norma": 1,
            "nome": "Norma de Teste",
            "data_expedicao": "2024-09-05",
            "descricao": "Descrição da norma",
            "regulador": "Regulador X",
            "revogacao": true,
            "arquivo": "85c24d5ac76e02459d7373ead77c15c5cd3748f0c7bbb00d32e92d7d0fb4aa3a",
            "tags": ["ESG", "Governança", "SELIC"]
        }
    ]
}
```


### Webhook: SpeechToText x Core
#### 1. Descrição das Rotas e Endpoints

##### Rota: `/webhook/transcription-completed/`

**Método HTTP:** `POST`

**Descrição:** Este endpoint é responsável por receber a transcrição de áudio realizada pelo Speech To Text e encaminhar os resultados para o Core. Assim, o Core pode processar as informações e enviá-las para o serviço de Processamento de Linguagem Natural (PLN).

**Endpoint do Webhook externo:** `http://127.0.0.1:8080/webhook/transcription-completed`

**Formato de dados esperado:** O corpo da requisição (body) deve ser enviado no formato JSON, contendo o texto transcrito.

**Exemplo de requisição:**
  
```json
{
    "text": "Este é o texto transcrito do áudio."
}

```

#### 2. Estrutura dos dados recebidos

###### **Campos esperados no body da requisição:**

**text** (`str`): 
  - O texto transcrito do áudio enviado pelo frontend. Este campo é obrigatório.
 - Exemplo: `"Este é o texto transcrito do áudio."`

##### **Estrutura dos Dados Enviados para o Serviço de PLN:**

**text_transcribed** (`str`): 
 - O texto transcrito enviado ao serviço de PLN.
 - Exemplo: `"Este é o texto transcrito do áudio."`

**Exemplo de JSON enviado ao serviço de PLN:**

```json
{
    "text_transcribed": "Este é o texto transcrito do áudio."
}
```

# 5. Testes de Software
Os testes de software são essenciais para garantir a qualidade e confiabilidade de um sistema, especialmente em projetos complexos. Nesta seção, descrevemos os testes realizados para validar os diferentes componentes do projeto, incluindo o serviço de busca, o serviço de PLN, o Core e os webhooks.

## 5.1 Teste do serviço de busca
Testes realizados para a funcionalidade de busca e criação de informações na solução "Cora" do Bank of America, com foco na interação do frontend com a API. A solução permite que os usuários busquem por normas, tags associadas, e utilizem a barra de pesquisa de maneira eficiente para recuperar dados específicos. Além disso, a plataforma suporta a criação de novas tags e normas através de requisições POST, garantindo que as operações de busca e atualização de dados sejam processadas corretamente pelo backend, proporcionando uma experiência de usuário dinâmica e responsiva.

### GET - /normas

**1. Pré-condição:**
- O sistema "Cora" deve estar em pleno funcionamento, com a API conectada ao backend e acessível.
- A barra de pesquisa deve estar visível na página inicial da interface do usuário.
- O endpoint `/normas` da API deve estar ativo e retornando dados de regulamentações, como mostrado no exemplo da imagem (retorno JSON com informações de normas).
- O usuário deve ter acesso à funcionalidade de pesquisa, seja por texto ou por reconhecimento de áudio.

**2. Cenário de Teste:**
- O usuário acessa a página inicial da solução "Cora".
- Insere o termo "normas de crédito de 2019" na barra de pesquisa ou utiliza o reconhecimento de áudio para o mesmo comando.
- O serviço de PLN recebe a intenção e envia ela para a API de busca.
- O sistema envia uma solicitação GET ao endpoint da API (`http://127.0.0.1:8000/normas`).
- O backend processa a solicitação e retorna uma lista de regulamentações conforme a busca realizada.

**3. Resultado Esperado:**
- A API deve retornar um status **200 OK**, confirmando o sucesso da solicitação.
- As normas relevantes devem ser exibidas na interface abaixo da barra de pesquisa, contendo informações como: título da norma, data de expedição, descrição, regulador, se foi revogada ou não, e as tags relacionadas (como no exemplo: "ESG", "Governança", "SELIC").
- A resposta JSON deve ser formatada corretamente, e a interface deve exibir os resultados de forma organizada, filtrando corretamente conforme o termo de busca inserido pelo usuário.

**4. Resultado Obtido:**
- O sistema retornou o status **200 OK**, conforme a imagem de exemplo.
- A norma testada foi exibida com as seguintes informações: nome ("Norma de Teste"), data de expedição ("2024-09-05"), descrição ("Descrição da norma"), regulador ("Regulador X"), revogação (true), arquivo vinculado, e as tags relevantes ("ESG", "Governança", "SELIC").
- O frontend exibiu corretamente os dados na tela, mostrando as regulamentações de acordo com o termo pesquisado.

**5. Pós-condição:**
- O sistema permanece estável e pronto para novas interações, permitindo que o usuário realize novas buscas ou refine os resultados utilizando diferentes filtros ou palavras-chave.
- A interface continua responsiva, pronta para receber novas entradas de texto ou áudio, e o backend está preparado para novas requisições.

<div align="center">

<sub>Figura X - Teste Busca 1</sub>

![Teste Busca 1](../assets/busca-1.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

### POST - /normas/search

**1. Pré-condição:**
- O sistema "Cora" deve estar funcional, com a API conectada ao backend e acessível.
- A barra de pesquisa avançada deve estar disponível na interface do usuário, possibilitando buscas detalhadas por parâmetros como tema, regulador e tags.
- O endpoint `/normas/search` da API deve estar ativo e funcionando corretamente, pronto para receber solicitações POST com filtros detalhados.

**2. Cenário de Teste:**
- O usuário acessa a página inicial da solução "Cora" e utiliza a barra de pesquisa.
- O sistema envia uma solicitação POST ao endpoint da API (`http://127.0.0.1:8000/normas/search`), com os parâmetros de busca retornados pelo PLN.
  
**3. Resultado Esperado:**
- A API deve retornar um status **200 OK**, confirmando o sucesso da solicitação POST.
- A resposta JSON deve conter uma lista de normas que atendam aos critérios de pesquisa inseridos, exibindo informações como: título da norma, data de expedição, descrição, regulador, tags e arquivo associado.
- Os resultados devem ser exibidos corretamente na interface, de acordo com os filtros aplicados.

**4. Resultado Obtido:**
- O sistema retornou o status **200 OK**, conforme a imagem de exemplo.
- A norma testada foi exibida com as seguintes informações: nome ("Norma de Teste 2"), data de expedição ("2024-11-12"), descrição ("Descrição da norma"), regulador ("Regulador A"), e as tags relevantes ("ESG", "SELIC").
- O frontend exibiu corretamente os dados na tela, mostrando os resultados filtrados com base nos parâmetros fornecidos.

**5. Pós-condição:**
- O sistema permanece estável e funcional, permitindo que o usuário realize novas pesquisas com diferentes parâmetros.
- A interface de usuário continua responsiva, preparada para realizar novas requisições ao backend por meio da barra de pesquisa avançada.

<div align="center">

<sub>Figura X - Teste Busca 2 </sub>

![Teste Busca 2](../assets/busca-2.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>


### POST - /normas

**1. Pré-condição:**
- O sistema "Cora" deve estar funcional, com a API conectada ao backend e acessível.
- O endpoint `/normas` deve estar ativo e pronto para receber requisições POST, permitindo a criação de novas normas regulatórias.
- O usuário deve ter permissões necessárias para criar novas normas através da interface de usuário.

**2. Cenário de Teste:**
- Uma nova regulamentação é captada.
- A regulamentação é enviada com os campos obrigatórios:
  - **Nome**: "Norma Nova"
  - **Data de expedição**: "2024-05-20"
  - **Descrição**: "Descrição da norma legal"
  - **Regulador**: "Regulador X"
  - **Revogação**: `false`
  - **Arquivo**: um identificador de arquivo específico
- O sistema envia uma solicitação POST ao endpoint da API (`http://127.0.0.1:8000/normas`) com os dados inseridos no corpo da requisição (conforme a imagem).

**3. Resultado Esperado:**
- A API deve retornar um status **200 OK**, indicando que a norma foi criada com sucesso.
- A resposta JSON deve confirmar a criação da norma, contendo uma mensagem de sucesso ("Norma criada com sucesso") e o ID da nova norma criada (neste caso, **id: 10**).
- A nova norma deve ser inserida corretamente no banco de dados e acessível para futuras consultas.

**4. Resultado Obtido:**
- O sistema retornou o status **200 OK**, conforme a imagem de exemplo.
- A resposta JSON confirmou a criação da norma com a mensagem "Norma criada com sucesso" e o ID da nova norma (10).
- A norma foi criada corretamente com as informações fornecidas, e o sistema está pronto para realizar novas operações.

**5. Pós-condição:**
- A nova norma está disponível para consulta no sistema "Cora".
- O sistema permanece estável e pronto para a criação de novas normas ou realização de outras operações.

<div align="center">

<sub>Figura X - Teste Busca 3</sub>

![Teste Busca 3](../assets/busca-3.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

### GET - /tags

**1. Pré-condição:**
- O sistema "Cora" deve estar funcional e com a API conectada ao backend.
- O endpoint `/tags` deve estar ativo e pronto para responder a requisições GET.
- O usuário deve ter acesso à interface de usuário para realizar buscas relacionadas a tags de regulamentações.

**2. Cenário de Teste:**
- O usuário acessa a página ou funcionalidade de busca por tags na solução "Cora".
- Para exibição na interface de pesquisa, o sistema realiza uma solicitação GET ao endpoint `/tags` para recuperar uma lista de tags utilizadas nas regulamentações cadastradas no sistema.
- O sistema envia a requisição GET ao endpoint da API (`http://127.0.0.1:8000/tags`), esperando uma lista de tags em resposta.

**3. Resultado Esperado:**
- A API deve retornar um status **200 OK**, confirmando o sucesso da requisição GET.
- A resposta JSON deve conter uma lista de tags com informações como:
  - **id_tag**: identificador da tag (ex.: 1, 2)
  - **nome**: nome da tag (ex.: "Governança", "ESG")
- As tags devem ser exibidas corretamente na interface do usuário, com a possibilidade de usá-las como filtros em outras buscas de regulamentações.

**4. Resultado Obtido:**
- O sistema retornou o status **200 OK**, conforme a imagem de exemplo.
- A resposta JSON listou duas tags:
  - **id_tag: 1**, **nome: "Governança"**
  - **id_tag: 2**, **nome: "ESG"**
- As tags foram exibidas corretamente na interface e estavam prontas para serem utilizadas em buscas ou para classificar regulamentações.

**5. Pós-condição:**
- O sistema permanece estável e pronto para novas buscas ou operações relacionadas às tags.
- A interface de usuário continua responsiva e pronta para processar novos filtros de busca usando as tags obtidas.

<div align="center">

<sub>Figura X - Teste Busca 4</sub>

![Teste Busca 4](../assets/busca-4.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

### GET - /normas-tags

**1. Pré-condição:**
- O sistema "Cora" deve estar operacional e com a API conectada ao backend.
- O endpoint `/normas-tags` deve estar ativo e pronto para responder a requisições GET.
- O usuário deve ter permissão de acesso à interface de busca que realiza consultas de normas e suas respectivas tags.

**2. Cenário de Teste:**
- O usuário acessa a interface da solução "Cora" e realiza uma solicitação GET para o endpoint `/normas-tags` por meio de uma interface de consulta de tags vinculadas a normas.
- A solicitação deve recuperar informações sobre as normas e seus respectivos tags, além de detalhes como se a norma foi revogada ou não.
- O sistema envia a requisição GET ao endpoint da API (`http://127.0.0.1:8000/normas-tags`), esperando uma resposta contendo as normas e suas tags associadas.

**3. Resultado Esperado:**
- A API deve retornar um status **200 OK**, indicando que a requisição GET foi processada com sucesso.
- A resposta JSON deve listar as normas associadas às suas respectivas tags e incluir dados como:
  - **ID da Norma**
  - **Tags** associadas à norma
  - **Revogação**: indicador booleano mostrando se a norma foi revogada (ex.: `true` ou `false`).
- As normas e suas tags devem ser exibidas corretamente na interface do usuário, permitindo uma análise clara das normas e seus relacionamentos com as tags.

**4. Resultado Obtido:**
- O sistema retornou o status **200 OK**, conforme mostrado na imagem de exemplo.
- A resposta JSON continha as seguintes informações:
  - **ID da Norma**: 1, 2
  - **Tags**: uma lista de números representando as tags associadas a cada norma.
  - **Revogação**: indicador booleano com o valor `true` para a norma revogada.
- Os dados foram exibidos corretamente na interface do usuário, permitindo o uso dessas informações em consultas ou filtros adicionais.

**5. Pós-condição:**
- O sistema permanece estável e pronto para realizar novas buscas ou operações relacionadas às normas e suas tags.
- A interface de usuário continua responsiva, permitindo ao usuário acessar e processar as informações retornadas pela API.

<div align="center">

<sub>Figura X - Teste Busca 5</sub>

![Teste Busca 5](../assets/busca-5.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

### POST - /tags

**1. Pré-condição:**
- O sistema "Cora" deve estar funcional e com a API conectada ao backend.
- O endpoint `/tags` deve estar ativo e preparado para aceitar requisições POST, permitindo a criação de novas tags.
- O usuário deve ter permissões para criar novas tags no sistema.

**2. Cenário de Teste:**
- O usuário acessa a interface.
- Realiza a criação de uma nova tag (ex.: **"ESG"**).
- O sistema envia uma solicitação POST ao endpoint da API (`http://127.0.0.1:8000/tags`), com o dado da nova tag no corpo da requisição.

**3. Resultado Esperado:**
- A API deve retornar um status **200 OK**, indicando que a solicitação POST foi processada com sucesso.
- A resposta JSON deve incluir uma mensagem de confirmação ("Tag criada com sucesso") e o ID da nova tag criada (neste caso, **id: 4**).
- A nova tag deve ser inserida corretamente no banco de dados e estar disponível para uso em futuras operações, como buscas ou associação a normas.

**4. Resultado Obtido:**
- O sistema retornou o status **200 OK**, conforme mostrado na imagem de exemplo.
- A resposta JSON confirmou a criação da tag com a mensagem "Tag criada com sucesso" e o ID da nova tag (4).
- A nova tag foi criada corretamente com o nome fornecido ("ESG") e está disponível no sistema.

**5. Pós-condição:**
- A nova tag está disponível para ser usada em futuras buscas ou na associação com normas.
- O sistema permanece estável e pronto para realizar novas operações, como a criação de outras tags ou a consulta de tags já existentes.

<div align="center">

<sub>Figura X - Teste Busca 6</sub>

![Teste Busca 6](../assets/busca-6.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>


## 5.2 Teste do Serviço de PLN
Os testes abrangeram as seguintes áreas do serviço: download dos arquivos da s3, extração de dados, similaridade das tags e classificação de intenções.

Além disso, todas as funções envolvidas no processamento de linguagem natural para encontrar as intenções foram testadas previamente e estão documentas no notebook `algoritmo_pln.ipynb`.

Os testes foram realizados com a biblioteca ``pytest`` e ``unittest``. Para rodar os testes é necessário seguir os passos:

1. Entrar no diretório: ``cd .\src\backend\app\service\pln_intencao\``
2. Instalar as dependências: ``pip install -r requirements.txt``
3. Rodar o comando ``env:PYTHONPATH="$env:PYTHONPATH;$(pwd)"`` para adicionar o diretório ao path do Python.
4. Rodar os testes: ``pytest``

Em caso de sucesso, a saída será semelhante a:

<div align="center">
<sub>Figura X - Testes com sucesso</sub>

![Exemplo de requisição](../assets/sucesso_testes.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

Em caso de falha, a saída apresentará a quantidade de testes que falharam e o motivo.

### Download dos Arquivos da S3
**Pré-condição:**
- A função download_from_s3 está implementada e pronta para ser testada.
- O módulo requests está mockado para retornar um arquivo de teste.

**Cenário de Teste:**
Testar o download de um arquivo de uma URL simulada e verificar se o conteúdo é salvo corretamente.

**Resultado Esperado:**
O arquivo deve ser salvo no caminho especificado e seu conteúdo deve corresponder ao mock b"conteudo_teste".

**Resultado Obtido:**
O teste passou e o arquivo foi salvo com o conteúdo correto.

**Pós-condição:**
O arquivo de teste foi removido do sistema de arquivos após o teste.

### Extração de Dados
#### a) Teste para extrair reguladores

**Pré-condição:**
- A função extrair_reguladores está implementada.

**Cenário de Teste:**
Testar a extração de reguladores de um texto.

**Resultado Esperado:**
A função deve retornar o nome do regulador, no caso do teste: ["Anbima"].

**Resultado Obtido:**
O teste passou e a função retornou ["Anbima"].

**Pós-condição:**
A função foi validada para reconhecer a palavra "Anbima" como um regulador.

#### b) Teste para encontrar datas

**Pré-condição:**
- A função encontrar_datas está implementada.

**Cenário de Teste:**
Testar a extração de datas de um texto que contém a data "15/08/2023".

**Resultado Esperado:**
A função deve retornar ["15/08/2023"].

**Resultado Obtido:**
O teste passou e a função retornou ["15/08/2023"].

**Pós-condição:**
A função foi validada para extrair corretamente a data do texto.

#### c) Teste para transformar texto em minúsculas

**Pré-condição:**
- A função texto_para_minusculo está implementada.

**Cenário de Teste:**
Testar a conversão de um texto para minúsculo.

**Resultado Esperado:**
A função deve retornar o texto totalmente em letras minúsculas.

**Resultado Obtido:**
O teste passou e o texto foi convertido corretamente para minúsculas.

**Pós-condição:**
A função foi validada para converter corretamente textos para letras minúsculas.

### Similaridade das Tags

**Pré-condição:**
- O modelo Word2Vec mockado está disponível e as funções check_vectors e pegar_similaridades estão implementadas.

**Cenário de Teste:**
Verificar a similaridade entre o termo "crédito" e uma lista de tags.

**Resultado Esperado:**
A função deve retornar uma lista de similaridades e "crédito" deve estar entre as tags resultantes.

**Resultado Obtido:**
O teste passou e a função retornou "crédito" como uma das tags semelhantes.

**Pós-condição:**
A função foi validada para calcular similaridades corretamente.

### Classificação de Intenções

**Pré-condição:**
- O código do modelo BERT e o tokenizer estão mockados.
- A função bert_prever está implementada e pronta para ser chamada.

**Cenário de Teste:**
Testar a função bert_prever usando um modelo BERT mockado e um tokenizer mockado, para verificar se a função retorna as labels corretas de acordo com as previsões do modelo.

**Resultado Esperado:**
A função deve retornar ['label2'] com base nos logits fornecidos pelo modelo mockado.

**Resultado Obtido:**
O teste passou e a função retornou ['label2'] como esperado.

**Pós-condição:**
A função bert_prever foi validada para a lógica de previsões.


## 5.3 Teste do Core

Os testes abrangeram as seguintes áreas do serviço: recebimento de transcrição via webhook, envio de dados de intenção para a API de busca, envio de mensagens para o RabbitMQ e recebimento de normas encontradas pelo webhook.

Além disso, todas as funções envolvidas no processo de integração com APIs e mensageria foram previamente testadas e estão documentadas.

Os testes foram realizados com a biblioteca pytest e mocker para realizar mocks de funções e serviços externos. Para rodar os testes, siga os passos abaixo:

1. Entrar no diretório: ```cd .\src\backend\app\service\core\tests```
2. Instalar as dependências: ```pip install -r requirements.txt```
3. Rodar os testes: ```pytest```
4. Em caso de sucesso, a saída será semelhante a:

<div align="center">
<sub>Figura X - Testes com sucesso</sub>

![Exemplo de requisição](../assets/testes_core_sucesso.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

Em caso de falha, a saída apresentará a quantidade de testes que falharam e o motivo.

## Webhook de Transcrição Completa

**Pré-condição:**

A função receive_webhook e listen_for_pln estão implementadas e mockadas.

**Cenário de Teste:**

Enviar uma requisição POST para o endpoint /webhook/transcription-completed com um dado de transcrição simulando a conclusão do processo.

**Resultado Esperado:**

A resposta deve retornar um código 200 com a mensagem {"message": "Texto transcrito recebido com sucesso."}.

**Resultado Obtido:**

O teste passou, e a resposta foi a esperada.

**Pós-condição:**

A função de processamento da transcrição foi chamada com o dado correto e a intenção é enviada para processamento posterior.

## Envio de Intenção para a API de Busca

**Pré-condição:**

A função requests.post está mockada para simular a chamada à API de busca e retorna uma resposta de sucesso.

**Cenário de Teste:**

Verificar se a função send_to_search_api envia corretamente o dado de intenção para a API de busca.

**Resultado Esperado:**

A função deve chamar requests.post com a URL correta e o JSON contendo a intenção.

**Resultado Obtido:**

O teste passou, e a chamada foi realizada corretamente com os parâmetros esperados.

**Pós-condição:**

A intenção foi enviada corretamente para a API de busca.
Envio de Mensagens para o RabbitMQ

**Pré-condição:**

A função connect_to_rabbit está implementada e mockada para simular uma conexão com o RabbitMQ.

**Cenário de Teste:**

Testar o envio de uma mensagem para a fila pln_queue no RabbitMQ através da função webhook_listener.

**Resultado Esperado:**

O método queue_declare deve ser chamado para garantir a criação da fila, e o método basic_publish deve enviar o texto para o RabbitMQ.

**Resultado Obtido:**

O teste passou e as funções do RabbitMQ foram chamadas conforme esperado.

**Pós-condição:**

A mensagem foi publicada corretamente na fila pln_queue.

## Webhook de Normas Encontradas

**Pré-condição:**

A API FastAPI está configurada e o endpoint /webhook/busca-normas está ativo.

**Cenário de Teste:**

Enviar uma requisição POST com uma lista de normas encontradas.

**Resultado Esperado:**

A resposta deve retornar um código 200 com a mensagem {"message": "Normas recebidas com sucesso."}.

**Resultado Obtido:**

O teste passou e a resposta foi a esperada.

**Pós-condição:**

As normas foram recebidas e processadas com sucesso no sistema.
Essa documentação fornece uma visão detalhada de cada teste executado, incluindo os passos para replicação e os resultados esperados e obtidos

## 5.4 Teste dos Webhooks

A integração via webhooks é um ponto crítico para garantir a comunicação eficiente entre sistemas no serviço de processamento de intenções e busca de normas. Webhooks permitem que eventos, como a conclusão de uma transcrição ou a busca por normas, sejam notificados em tempo real, acionando processos subsequentes de forma automática.

Nesta seção, abordaremos os testes desenvolvidos para verificar o comportamento correto dos webhooks implementados no sistema.

### Teste do Webhook de Transcrição

O teste do webhook de transcrição foi realizado para verificar se o core está recebendo o texto transcrito corretamente. O teste foi realizado utilizando o Postman para simular a requisição POST ao endpoint `/webhook/transcription-completed/` e verificar a resposta recebida.

Para realizar o teste é necessário:

1. Entrar no diretório: ``cd .\src\backend\app\service\core\``
2. Rodar o comando ``python -m venv venv"`` para criar o ambiente virtual.
3. Rodar o comando ``venv\Scripts\activate"`` para entrar no ambiente virtual.
4. Instalar as dependências: ``pip install -r requirements.txt``
5. Rodar o comando ``uvicorn main:app --reload --port 8080 `` para ativar o serviço.
6. Colocar a url ```http://localhost:8080/webhook/transcription-completed/``` no Postman e apertar "Send".
7. 4. Em caso de sucesso, a saída será semelhante a:

<div align="center">
<sub>Figura X - Testes com sucesso</sub>

![Exemplo de requisição](../assets/Teste_webhook_transcription.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

**Pré-condição:**
O backend e seus serviços devem estar rodando corretamente.

**Cenário de Teste:**
Testar o envio de um testo transcrito para o core via webhook.

**Resultado Esperado:**
O webhook deve enviar o texto transcrito para o core e receber uma resposta de sucesso.

**Resultado Obtido:**
O teste passou e a resposta de sucesso foi retornada.

**Pós-condição:**
O funcionamento do webhook foi validado.

## 5.5 Testes Unitários do Frontend

Os testes unitários são essenciais para garantir a qualidade e a confiabilidade de uma aplicação frontend. No contexto do CORA, utilizamos o **Jest**, uma biblioteca de testes em JavaScript, para implementar e executar testes unitários para todos os componentes da nossa aplicação React.

**Cobertura de Testes** 

Foram implementados testes para todos os 9 componentes, que são:

- `BarraPesquisa.jsx`
- `CampoInfos.jsx`
- `CardDados.jsx`
- `FerramentaPesquisa.jsx`
- `Microfone.jsx`
- `Modal.jsx`
- `Tabela.jsx`
- `Tag.jsx`
- `TagsRecentes.jsx`

Ao todo, foram desenvolvidos **36 testes** distribuídos entre os componentes, evidenciando uma **alta cobertura de testes**. Isso corresponde a uma média de 4 testes por componente, cobrindo os principais fluxos e funcionalidades de cada um.

<div align="center">
<sub>Figura X - Testes desenvolvidos</sub>

![Resultado após rodar os testes](../assets/testes-unitários-resultado.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

**Testes para Componentes Críticos**

Dois componentes se destacam como sendo críticos para a aplicação: o **Microfone** e a **Barra de Pesquisa**.

- **Microfone**: Esse componente é responsável por capturar e interpretar as pesquisas de voz, sendo um dos principais diferenciais da aplicação. Testes asseguram que a funcionalidade de gravação de áudio e transmissão dos comandos de voz funcione conforme o esperado. Os testes específicos implementados para o componente incluem:

  1. **Renderização correta do botão de microfone**: Verifica se o componente exibe o botão de microfone corretamente na tela, garantindo que a interface esteja preparada para capturar interações de voz.
  
  2. **Manipulação de classes no botão ao rolar a página**: Testa se o botão do microfone altera para a classe `fixed` ao atingir uma rolagem específica (500px), indicando uma mudança de estilo e comportamento visual no frontend.
  
  3. **Comportamento dinâmico de rolagem**: Verifica se o botão retorna ao estilo original quando a rolagem é menor que 420px, garantindo que as mudanças visuais e de estado no componente sejam consistentes.

- **Barra de Pesquisa**: Como parte central da experiência de usuário, a barra de pesquisa realiza o papel de principal ponto de interação para busca de informações. Testes específicos implementados para o componente incluem:

  1. **Renderização do input com placeholder correto**: Garante que o campo de pesquisa seja exibido com o placeholder adequado ("Digite uma regulamentação..."), assegurando a consistência visual da aplicação.
  
  2. **Atualização do valor do input**: Verifica se o valor digitado pelo usuário é refletido corretamente no campo de pesquisa, testando a interação e manipulação de estado.
  
  3. **Chamada de função de pesquisa ao pressionar Enter**: Testa a execução da função `onSearch` quando o usuário pressiona a tecla "Enter", simulando uma busca real. Esse teste inclui a simulação de uma requisição `fetch` para validar a integração com o back-end.
  
  4. **Fixação da barra ao rolar a página**: Verifica se a barra de pesquisa assume a classe `fixed` quando a rolagem atinge um valor específico, garantindo que a barra permaneça fixa no topo durante a navegação.
  
  5. **Exibição do placeholder de contagem regressiva**: Ao iniciar a contagem regressiva (quando `iniciarContagem` é `true`), o placeholder do campo de pesquisa deve indicar a contagem, mudando para "Começando a gravar em 5...", validando assim o comportamento dinâmico.
  
  6. **Atualização do valor da pesquisa com transcrição fornecida**: Quando a transcrição de áudio é fornecida como prop (`transcricao`), o valor do input deve ser atualizado automaticamente com o texto transcrito, confirmando a integração com o componente de áudio.

Os desmais testes dos demais componentes com menos grau de críticidade podem ser encontrados em `src\frontend\src\testes` com sua devida descrição do que está sendo testado em forma de comentários de código.

<div align="center">
<sub>Figura X - Exemplo de descrição dos testes no código</sub>

![Resultado após rodar os testes](../assets/exemplo-teste-unitario.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

**Tutorial para Rodar os Testes**

Para rodar os testes implementados, siga as etapas abaixo:

1. **Instalar dependências do projeto**: Caso ainda não tenha feito, certifique-se de instalar todas as dependências do projeto:
   ```bash
   npm install
   ```

2. **Executar os testes**: Para rodar todos os testes unitários, utilize o comando abaixo:
   ```bash
   npm test
   ```
   
   Esse comando irá iniciar o Jest e executar todos os testes configurados no projeto. A cobertura e os resultados serão exibidos no terminal.

3. **Verificar a cobertura de testes**: Caso deseje gerar um relatório de cobertura, execute:
   ```bash
   npm test -- --coverage
   ```
   Isso irá mostrar quais componentes possuem maior cobertura e onde ainda podem existir áreas não cobertas por testes.

Os testes unitários implementados garantem que os componentes principais do frontend funcionem corretamente, e que eventuais mudanças no código não introduzam novos bugs. Com uma alta cobertura de testes, temos mais segurança para realizar ajustes e evoluir a aplicação, especialmente nos componentes que são o core da solução (Microfone e Barra de Pesquisa). 

Além disso, o uso do **Jest** proporcionou uma estrutura de testes de fácil manutenção e leitura, permitindo que novos desenvolvedores se integrem rapidamente ao projeto e entendam os pontos críticos que precisam de validação contínua.

# 6. Integração APIs e Backend

&emsp;&emsp;A interação entre APIs e o backend envolve a comunicação estruturada onde o frontend ou outra aplicação envia solicitações à API para acessar ou modificar dados no backend, estabelecendo uma ponte entre diferentes sistemas. A API processa essas requisições utilizando métodos como GET, POST, PUT e DELETE, permitindo operações como consulta, criação, atualização ou exclusão de dados. O backend, ao receber essas solicitações, realiza a operação solicitada e retorna uma resposta, geralmente em formato JSON ou XML, que é processada pela API e exibida no frontend ou sistema solicitante. Esse processo garante uma comunicação eficiente, segura e padronizada entre sistemas distintos, promovendo integração e automação de tarefas.

&emsp;&emsp;Em relação ao projeto em desenvolvimento, essa interação entre APIs e o backend ocorre de maneira clara e eficiente. O frontend da solução “Cora” (interface do usuário) utiliza duas chamadas assíncronas para a API, utilizando a função `fetch`, para recuperar informações sobre regulamentações e tags diretamente do backend. A primeira chamada obtém os dados das "normas-tags" para calcular a confiabilidade das tags atribuídas automaticamente. O backend responde com uma lista de dados que é processada no frontend, e a confiabilidade é calculada e atualizada no estado da aplicação. Agora, a segunda chamada busca novas regulamentações emitidas nas últimas 24 horas e analisa as tags mais frequentes na última semana. 

&emsp;&emsp;O backend referente à essa chamada retorna uma lista de regulamentações, que é filtrada e analisada no frontend para calcular a quantidade de novas regulamentações e determinar qual tag foi mais usada. As informações são então exibidas para o usuário de forma clara e organizada, utilizando e atualizando os elementos visuais como os cartões de dados e tabelas na interface. Essa interação é essencial para manter a aplicação dinâmica e atualizada com informações em tempo real. O uso de `useEffect` garante que as chamadas à API ocorram assim que o componente é carregado, proporcionando uma experiência fluida ao usuário. As respostas do backend são processadas de forma assíncrona e exibidas na interface com elementos visuais que destacam as informações mais relevantes.

<div align="center">

<sub>Figura X - Frontend </sub>

![Frontend](../assets/frontend-ex.jpg)

<sup>Fonte: Elaborado pelos autores</sup>

</div>
  
&emsp;&emsp;Além disso, a transcrição de áudio desempenha um papel fundamental na solução "Cora", facilitando a interação do usuário por meio de comandos de voz na barra de pesquisa. Quando o usuário realiza a pesquisa, seja por texto ou por áudio, o sistema envia essa pesquisa para o Core da aplicação por meio do Webhook. Após isso, o Core envia a pesquisa para o NLP. Isso permite que o sistema de NLP realize a busca e exiba os resultados desejados ao usuário, como normas específicas ou documentos regulatórios.

Para realizar o envio da pesquisa foi implementado um POST na rota do Webhook de transcrição.
  
<div align="center">

<sub>Figura X - Código API e Backend </sub>

![Código API e Back](../assets/codigo-api-back.jpg)

</div> 

# 7. Deploy da Aplicação

Esta seção descreve o passo a passo para realizar o deploy da aplicação em uma instância EC2 da AWS. Todos os serviços são disponibilizados na instância, exceto o serviço de PLN, responsável por capturar a intenção do usuário. Como o serviço de PLN demanda muita memória, não foi possível disponibilizá-lo na conta gratuita da AWS, que possui limitações, como o tamanho de armazenamento.

1. **Criar nova instância EC2 do tipo `t2.medium`**

   - Acesse o console de gerenciamento da AWS.
   - Vá para o serviço EC2 e clique em "Launch Instance".
   - Selecione uma AMI (Amazon Machine Image) padrão, como "Ubuntu Server 20.04 LTS".
   - Escolha o tipo de instância `t2.medium` para ter uma configuração com 2 vCPUs e 4 GB de RAM.
   - Configure o grupo de segurança para permitir tráfego TCP na porta 8000, 8080, 5173 e 5432:
     - Vá para a seção de "Security Group".
     - Crie um novo grupo de segurança ou edite um existente.
     - Adicione uma regra de entrada para cada porta, nessa estrutura:
       - Tipo: Custom TCP Rule
       - Porta: 8000/8080/5173/5432
       - Origem: `0.0.0.0/0` (para permitir tráfego de qualquer IP, ou especifique um IP ou faixa de IPs para maior segurança).
   - Complete o restante das configurações padrão e clique em "Launch".

<div align="center">

<sub>Figura X - Detalhes da Instância EC2</sub>

![Detalhes da Instância EC2](../assets/istancia_cora.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

<div align="center">
<sub>Figura X - Configuração das portas</sub>

![Configuração das portas](../assets/portas_cora.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

2. **Acessar a instância EC2 via SSH**

   - Após a instância ser inicializada, copie o endereço IPv4 público da instância.
   - No terminal local, use o comando SSH para acessar a instância:
     ```bash
     ssh -i /path/to/your-key.pem ubuntu@ec2-XX-XX-XX-XX.compute-1.amazonaws.com
     ```
   - Certifique-se de que o arquivo `.pem` da chave SSH tenha permissões apropriadas:
     ```bash
     chmod 400 /path/to/your-key.pem
     ```

3. **Atualizar pacotes e instalar Git na instância EC2**

   - Após acessar a instância via SSH, atualize o sistema e instale o Git:
     ```bash
     sudo apt update
     sudo apt install git -y
     ```

4. **Adicionar chave SSH para conectar com o GitHub**

   - Gere uma chave SSH na instância EC2:
     ```bash
     ssh-keygen -t ed25519 -C "your_email@example.com"
     ```
   - Pressione Enter para aceitar o local padrão do arquivo. Configure uma frase secreta, se desejado.
   - Adicione a chave SSH ao agente SSH:
     ```bash
     eval "$(ssh-agent -s)"
     ssh-add ~/.ssh/id_ed25519
     ```
   - Exiba a chave pública gerada:
     ```bash
     cat ~/.ssh/id_ed25519.pub
     ```
   - Copie a chave SSH pública e adicione-a às suas chaves SSH no GitHub. Vá para **Settings > SSH and GPG keys > New SSH key**.

5. **Clonar o repositório dentro da EC2**

   - Clone o repositório GitHub na instância EC2:
     ```bash
     git clone git@github.com:seu-usuario/2024-2A-T09-ES07-G05.git
     ```
   - Navegue até o diretório do projeto clonado:
     ```bash
     cd 2024-2A-T09-ES07-G05
     ```
6. **Instalando Python e Node na instância**

   - Instale o Python, pip e , se necessário:
     ```bash
     sudo apt install python3-pip -y
     sudo apt install python3-venv -y
     ```
   - Instale o Node.js e npm:
     ```bash
     curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
     sudo apt install -y nodejs
     ```  

7. **Iniciando o backend**

   - Navegue até o diretório do core:
     ```bash
     cd src/backend/app/service/core
     ```
   - Crie um ambiente virtual e ative-o:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
   - Instale as dependências do backend:
     ```bash
     pip install -r requirements.txt
     ```
    Crie o .env com as variáveis de ambiente:
     ```bash
      nano .env 
     ```
      - Adicione as variáveis de ambiente:
      ```bash
      RABBITMQ_URL=amqp://guest:guest@localhost
      SEARCH_API_URL=url-da-api-de-busca
      ```
      - Aperte `Ctrl + O` para salvar e `Ctrl + X` para sair.
   - Inicie o servidor FastAPI:
     ```bash
     uvicorn app.main:app --host 0.0.0.0 --port 8080
     ```
  - Navegue até o diretório da API de busca:
     ```bash
     cd src/backend/app/service/busca
     ```
   - Crie um ambiente virtual e ative-o:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```
   - Instale as dependências do PLN:
     ```bash
     pip install -r requirements.txt
     ```
   - Crie o .env com as variáveis de ambiente:
     ```bash
      nano .env 
     ```
      - Adicione as variáveis de ambiente:
      ```bash
      DATABASE_URL=database-url
      DATABASE_USER=postgres
      DATABASE_PASSWORD=database-password
      DATABASE_NAME=database-name
      ```

      - Aperte `Ctrl + O` para salvar e `Ctrl + X` para sair.
   - Inicie o servidor FastAPI:
     ```bash
     uvicorn app.main:app --host 0.0.0.0 --port 8000
     ```
8. **Iniciando o frontend**

    - Navegue até o diretório do frontend:
      ```bash
      cd src/frontend
      ```
    - Instale as dependências do frontend:
      ```bash
      npm install
      ```
    - Inicie o servidor de desenvolvimento do frontend:
      ```bash
      npm run dev
      ```
  
A aplicação agora está acessível na porta 5173. Abra um navegador e acesse o IP público da sua instância na porta 5173 para confirmar que o deploy foi bem-sucedido.


<div align="center">
<sub>Figura X - Interface</sub>

![Interface](../assets/tela_cora.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

<div align="center">

<sub>Figura X - Front integrado</sub>

![Front integrado](../assets/front-integrado.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

<div align="center">

<sub>Figura X - Testando a rota das normas</sub>

![Teste da rota](../assets/testando_rota.png)

<sup>Fonte: Elaborado pelos autores</sup>

</div>

# 8. Integração do frontend com o backend implementado

&emsp;&emsp;A aplicação Cora se concentra na visualização e gerenciamento de regulamentações, permitindo que usuários busquem, visualizem e interajam com normas e suas respectivas tags. Para isso, a aplicação frontend comunica-se com um backend que fornece essas informações através de uma API REST.

### 8.1 Estrutura do projeto

&emsp;&emsp;O frontend foi construído com React e possui uma estrutura organizada, com componentes divididos em pastas específicas, como:

  - **`components`**: Contém todos os componentes reutilizáveis, como `BarraPesquisa`, `Tabela`, `Modal`, etc.
  - **`tests`**: Abriga os testes unitários e de integração, assegurando que as funcionalidades estejam funcionando corretamente e que a integração entre o frontend e o backend esteja correta.

### 8.2 Ambiente de Desenvolvimento

&emsp;&emsp;O ambiente de desenvolvimento foi configurado para facilitar a integração entre o frontend e o backend. O frontend foi configurado para rodar na porta 5173, enquanto o backend foi configurado para rodar nas portas 8000 e 8080. 

&emsp;&emsp;Para iniciar o frontend, basta executar o comando
`npm i` para instalar as dependências e, em seguida, `npm run dev` no diretório `src/frontend`. Isso iniciará o servidor de desenvolvimento e abrirá a aplicação no navegador padrão.

Para iniciar o backend, basta seguir os seguintes passos:
1. Entrar no diretório: `cd src/backend/app/service/core` e rodar o comando `uvicorn main:app --reload --port 8080`
2. Entrar no diretório: `cd src/backend/app/service/busca` e rodar o comando `uvicorn app.main:app --reload --port 8000`
5. Entrar no diretório: `cd src/backend/app/service/pln_intencao/app` e rodar o comando `uvicorn main:app --reload --port 8000`

Lembre que é necessário configurar os arquivos `.env` com as variáveis de ambiente necessárias para o funcionamento correto da aplicação.

### 8.3 **Chamadas à API**

&emsp;&emsp;A comunicação com o backend é feita através de chamadas HTTP. Os endpoints utilizados nos testes de integração foram:

  - **`GET /normas`**: Recupera todas as regulamentações disponíveis. Utilizado na tabela de exibição de normas.
  - **`POST /webhook/transcription-completed`**: Envia o texto transcrito para o backend para ser processado.
  - **`GET /tags`**: Obtém todas as tags disponíveis para serem associadas às normas.
  - **`GET /normas-tags/{id}`**: Recupera as tags associadas a uma norma específica.

### 8.4 **Tratamento de erros**

   - As chamadas à API incluem tratamento de erros básico, onde, se a resposta não for bem-sucedida (status diferente de 200), um erro é registrado no console e uma mensagem de erro é exibida para o usuário quando apropriado.

### 8.5 Testes de Integração

&emsp;&emsp;Os testes de integração foram realizados para garantir que a aplicação frontend interaja corretamente com o backend. Os principais testes incluem:

##### 1. **Testes de funcionamento da `BarraPesquisa`**

   - **Atualização do input**: Verifica se o valor do input na barra de pesquisa é atualizado corretamente quando o usuário digita.
   - **Envio de pesquisa**: Testa se a barra de pesquisa envia corretamente o texto transcrito para o endpoint `/webhook/transcription-completed` ao pressionar a tecla Enter.

```javascript
test('deve atualizar o valor do input quando o usuário digita', () => {
  render(<BarraPesquisa />);
  const input = screen.getByPlaceholderText('Digite uma regulamentação...');
  fireEvent.change(input, { target: { value: 'Nova Regulamentação' } });
  expect(input.value).toBe('Nova Regulamentação');
});
test('deve enviar pesquisa ao pressionar Enter na Barra de Pesquisa', async () => {
  render(<BarraPesquisa onSearch={jest.fn()} />);
  const input = screen.getByPlaceholderText('Digite uma regulamentação...');
  fireEvent.change(input, { target: { value: 'Nova Regulamentação' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  expect(await screen.findByText(/Nova Regulamentação/i)).toBeInTheDocument();
});
```

##### 2. **Testes do componente `Tabela`**

   - **Renderização das normas**: Verifica se as normas são exibidas corretamente na tabela quando são recuperadas do backend.
   - **Interação com a tabela**: Testa se o modal com detalhes da norma é aberto ao clicar em uma linha da tabela.

```javascript
test('deve renderizar as normas corretamente', async () => {
  render(<Tabela regulations={regulations} />);
  await waitFor(() => {
    expect(screen.getByText('Norma de Teste')).toBeInTheDocument();
    expect(screen.getByText('Norma de Teste 2')).toBeInTheDocument();
  });
});
test('deve abrir o modal ao clicar em uma linha da tabela', async () => {
  render(<Tabela regulations={regulations} />);
  await waitFor(() => {
    fireEvent.click(screen.getByText('Norma de Teste'));
  });
  expect(screen.getByText('Expedição:')).toBeInTheDocument();
});
```

##### 3. **Testes do componente `Modal`**

   - **Exibição de informações**: Verifica se o modal exibe corretamente as informações da norma selecionada.
   - **Fechamento do modal**: Testa se o modal fecha corretamente ao clicar no botão de fechar.

```javascript
test('deve renderizar corretamente com o conteúdo fornecido', async () => {
  render(<Modal open={true} onClose={() => {}} content={dataSelect} />);
  expect(await screen.findByText(dataSelect.nome)).toBeInTheDocument();
  expect(screen.getByText('Expedição:')).toBeInTheDocument();
});
test('deve fechar o modal ao clicar no botão de fechar', () => {
  const onCloseMock = jest.fn();
  render(<Modal open={true} onClose={onCloseMock} content={dataSelect} />);
  fireEvent.click(screen.getByRole('button', { name: 'close' }));
  expect(onCloseMock).toHaveBeenCalled();
});
```
&emsp;&emsp;Esses testes garantem que a aplicação esteja funcionando corretamente, permitindo que usuários interajam eficientemente com as regulamentações e suas tags. A abordagem modular permite fácil manutenção e adição de novas funcionalidades no futuro.

# 9. Funcionalidades implementadas na prova de conceito

1. **Captura de Regulamentações via Web Scraping**:

&emsp;&emsp;A captura das regulamentações é feita através de **web scraping** diretamente do site da ANBIMA, que é a principal fonte de dados. Este processo automatizado permite a coleta contínua e atualizada das regulamentações publicadas.

  - **Funcionalidade**: Automatizar a extração de regulamentações relevantes.

2. **Processamento e Tagueamento das Regulamentações (PLN)**:

&emsp;&emsp;Após a captura, as regulamentações passam por um módulo de **Processamento de Linguagem Natural (PLN)** para serem **tagueadas** e classificadas. Este módulo organiza os documentos, atribuindo tags que refletem seus principais temas e conteúdos.

  - **Funcionalidade**: As regulamentações são organizadas de forma a facilitar a busca e a recuperação de informações relevantes pelos usuários.

3. **Armazenamento Centralizado no Banco de Dados**:

&emsp;&emsp;O **banco de dados** centraliza todo o armazenamento das regulamentações capturadas e tagueadas. Ele permite que essas informações sejam facilmente acessadas e manipuladas, tanto pelo sistema quanto pelos usuários.

  - **Funcionalidade**: Garante a persistência das regulamentações, facilitando o acesso rápido e organizado.

4. **Captura de Intenção do Usuário (PLN)**:

&emsp;&emsp;Um segundo módulo de **PLN** é utilizado para capturar a **intenção do usuário** durante a pesquisa, seja por texto ou por voz. Este módulo interpreta as consultas e direciona o sistema para os resultados mais relevantes, otimizando a experiência de pesquisa.

  - **Funcionalidade**: Melhorar a precisão das pesquisas ao entender a intenção por trás das consultas.

5. **Interface de Usuário (Frontend)**:

&emsp;&emsp;A **interface de usuário** (frontend) permite a interação com o sistema, facilitando a **pesquisa**, **visualização** e **download** das regulamentações. O design da interface foi pensado para ser intuitivo e acessível, tornando a busca por documentos simples e eficiente.

  - **Funcionalidade**: Proporciona uma experiência amigável para o usuário final, com fácil acesso às regulamentações.

6. **API de Comunicação**:

&emsp;&emsp;A **API** serve como a ponte entre o frontend e a base de dados, facilitando a comunicação entre as diferentes partes do sistema. Ela garante que as solicitações de pesquisa e os retornos de dados ocorram de forma eficiente e rápida.

  - **Funcionalidade**: Media a troca de informações entre o frontend e o banco de dados, permitindo o funcionamento fluido do sistema.

&emsp;&emsp;Essas funcionalidades formam a base da solução implementada, com foco na captura, processamento, armazenamento e pesquisa eficiente das regulamentações, proporcionando uma experiência otimizada para o usuário.

# Referências

GRANDE, C. S. **Value Proposition Canvas: o que é e como utilizar**. Disponível em: <https://www.canalsonhogrande.com.br/post/value-proposition-canvas>. Acesso em: 11 ago. 2024.
  
**Webhook: o que é e para que servem webhooks?** Disponível em: <https://www.redhat.com/pt-br/topics/automation/what-is-a-webhook>. Acesso em: 5 set. 2024.
  
CANALTECH. **O que é web scraping e como ocorre?** Disponível em: <https://canaltech.com.br/seguranca/o-que-e-web-scraping/>. Acesso em: 23 set. 2024.