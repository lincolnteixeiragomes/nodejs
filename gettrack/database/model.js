const Sequelize = require("sequelize")
const sequelize = new Sequelize('gettrack','app','app',{
  host: "192.168.0.12",
  dialect: 'postgres'
})

const Posicao = sequelize.define('posicao', {

  id_veiculo: {
    type: Sequelize.INTEGER
  },
  id_rastreador: {
    type: Sequelize.INTEGER
  },
  data_hora: {
    type: Sequelize.DATE
  },
  data_hora_gravacao: {
    type: Sequelize.DATE
  },
  latitude: {
    type: Sequelize.DOUBLE
  },
  longitude: {
    type: Sequelize.DOUBLE
  },
  velocidade: {
    type: Sequelize.INTEGER
  },
  direcao: {
    type: Sequelize.FLOAT
  },
  posicao_memoria: {
    type: Sequelize.INTEGER
  },
  numero_satelites: {
    type: Sequelize.INTEGER
  },
  qualidade_gsm: {
    type: Sequelize.INTEGER
  },
  qualidade_gprs: {
    type: Sequelize.INTEGER
  },
  panico: {
    type: Sequelize.INTEGER
  },
  ignicao: {
    type: Sequelize.INTEGER
  },
  entradas: {
    type: Sequelize.INTEGER
  },
  saidas: {
    type: Sequelize.INTEGER
  },
  horimetro: {
    type: Sequelize.INTEGER
  },
  odometro: {
    type: Sequelize.INTEGER
  },
  observacao: {
    type: Sequelize.STRING
  },
  logradouro: {
    type: Sequelize.STRING
  },
  ip_gateway: {
    type: Sequelize.STRING
  },
  ip_uploader: {
    type: Sequelize.STRING
  },
  motivo: {
    type: Sequelize.INTEGER
  },
  contador: {
    type: Sequelize.INTEGER
  },
  telemetria: {
    type: Sequelize.TEXT
  },
  tensao: {
    type: Sequelize.FLOAT
  },
  id_telemetria: {
    type: Sequelize.INTEGER
  },
  ponto_referencia: {
    type: Sequelize.STRING
  },
  id_motorista: {
    type: Sequelize.INTEGER
  },
  id_colaborador: {
    type: Sequelize.INTEGER
  },
  id_mensagem: {
    type: Sequelize.INTEGER
  },
  indefinido: {
    type: Sequelize.INTEGER
  }
})
