const servicos = [
  {
    id: 1,
    nome: "Aumento de Clientes Através do Google",
    descricao: "Serviço para atrair clientes usando o Google Meu Negócio.",
    conteudo: "Ideal para empresas que querem aparecer nas buscas do Google e no Google Maps, aumentando chamadas, visitas e contatos.",
    imagem: "../imgs/imagem-gmn-.png",
    beneficios: [
      "Melhora a presença no Google",
      "Aumenta contatos de clientes",
      "Ajuda sua empresa a ser encontrada no Maps"
    ],
    qtd_clientes: 20
  },
  {
    id: 2,
    nome: "Tráfego Pago Google Ads",
    descricao: "Anúncios pagos para aparecer em destaque no Google.",
    conteudo: "Com o Google Ads, sua empresa pode aparecer para pessoas que já estão procurando pelo seu produto ou serviço.",
    imagem: "../imgs/imagem-trafegopago-ads.png",
    beneficios: [
      "Resultados mais rápidos",
      "Anúncios para público interessado",
      "Maior chance de conversão"
    ], 
    qtd_clientes: 10
  },
  {
    id: 3,
    nome: "Clientes Através do Instagram",
    descricao: "Gestão profissional para perfil comercial no Instagram.",
    conteudo: "Serviço focado em melhorar a imagem do perfil, criar conteúdo estratégico e atrair mais clientes pela rede social.",
    imagem: "../imgs/imagem-socialmedia.png",
    beneficios: [
      "Perfil mais profissional",
      "Conteúdos estratégicos",
      "Mais engajamento com clientes"
    ],
    qtd_clientes: 5
  },
  {
    id: 4,
    nome: "Tráfego Pago Meta Ads",
    descricao: "Anúncios pagos no Instagram e Facebook.",
    conteudo: "Com o Meta Ads, sua empresa pode alcançar pessoas certas no Instagram e Facebook por meio de campanhas patrocinadas.",
    imagem: "../imgs/imagem-trafegopago-meta.png",
    beneficios: [
      "Alcance segmentado",
      "Mais visitas ao perfil",
      "Mais mensagens de possíveis clientes"
    ],
    qtd_clientes: 7
  },
  {
    id: 5,
    nome: "Criação de Sites",
    descricao: "Desenvolvimento de site profissional para negócios.",
    conteudo: "Um site profissional ajuda sua empresa a transmitir confiança, apresentar serviços e receber contatos de clientes.",
    imagem: "../imgs/imagem-criacao-sites.png",
    beneficios: [
      "Mais credibilidade",
      "Presença profissional na web",
      "Canal direto para apresentar serviços"
    ],
    qtd_clientes: 17
  }
];

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const servico = servicos.find(item => item.id === id);

const container = document.getElementById("detalhes-servico");

if (servico) {
  container.innerHTML = `
    <section class="detalhe-hero">
      <div class="detalhe-texto">
        <span class="detalhe-tag">Serviço de Marketing Digital</span>
        <h1>${servico.nome}</h1>
        <p>${servico.descricao}</p>
        <a href="index.html">
          <button class="botao-voltar">Voltar para serviços</button>
        </a>
      </div>

      <div class="detalhe-imagem">
        <img src="${servico.imagem}" alt="${servico.nome}">
      </div>
    </section>

    <section class="detalhe-conteudo">
      <h2>Sobre esse serviço</h2>
      <p>${servico.conteudo}</p>

      <h2>Como esse trabalho ajuda o seu negócio?</h2>
      <p>
        Esse serviço é indicado para empresas que querem atrair mais clientes,
        melhorar sua presença digital e transformar visualizações em contatos reais.
        A estratégia é pensada para aumentar a autoridade da marca e gerar mais
        oportunidades de venda.
      </p>

      <h2>Principais benefícios</h2>
      <div class="lista-beneficios">
        ${servico.beneficios.map(beneficio => `
          <div class="beneficio-item">
            <h3>✔</h3>
            <p>${beneficio}</p>
          </div>
        `).join("")}
      </div>

      <h2>Etapas do serviço</h2>
      <div class="etapas">
        <div>
          <h3>1. Análise</h3>
          <p>Entendemos o negócio, o público-alvo e os principais objetivos da empresa.</p>
        </div>

        <div>
          <h3>2. Planejamento</h3>
          <p>Criamos uma estratégia personalizada de acordo com o tipo de serviço escolhido.</p>
        </div>

        <div>
          <h3>3. Execução</h3>
          <p>Colocamos as ações em prática, seja no Google, Instagram, anúncios ou site.</p>
        </div>

        <div>
          <h3>4. Acompanhamento</h3>
          <p>Avaliamos os resultados e fazemos melhorias para aumentar o desempenho.</p>
        </div>
      </div>

      <section class="chamada-final">
        <h2>Quer crescer com estratégia?</h2>
        <p>
          A Unidade Marketing ajuda empresas a se posicionarem melhor no digital,
          atraindo mais clientes e fortalecendo sua presença online.
        </p>
        <button class="botao-voltar">Agendar uma reunião</button>
      </section>
    </section>
  `;
}

const canvasGrafico = document.getElementById("graficoClientes");

if (canvasGrafico) {

    const nomesServicos = servicos.map(servico => servico.nome);

    const quantidadeClientes = servicos.map(servico => servico.qtd_clientes);

    new Chart(canvasGrafico, {

        type: "pie",

        data: {
            labels: nomesServicos,

            datasets: [{
                data: quantidadeClientes,

                backgroundColor: [
                    "#36A2EB",
                    "#FF6384",
                    "#FF9F40",
                    "#FFCD56",
                    "#4BC0C0"
                ],

                borderColor: "#ffffff",
                borderWidth: 2
            }]
        },

        options: {

            responsive: true,

            plugins: {

                title: {
                    display: true,
                    text: "Distribuição de Clientes por Serviço",
                    color: "white",
                    font: {
                        size: 22
                    }
                },

                legend: {

                    position: "top",

                    labels: {
                        color: "white",
                        font: {
                            size: 14
                        }
                    }

                },

                tooltip: {

                    callbacks: {

                        label: function(context) {

                            const total = context.dataset.data.reduce(
                                (a, b) => a + b,
                                0
                            );

                            const valor = context.raw;

                            const porcentagem =
                                ((valor / total) * 100).toFixed(1);

                            return `${valor} clientes (${porcentagem}%)`;

                        }

                    }

                }

            }

        }

    });

}