const Sequelize = require("sequelize")
const sequelize = new Sequelize('gettrack','app','app',{
  host: "192.168.0.12",
  dialect: 'postgres'
})

const Posicao = sequelize.define('posicao', {

  id_veiculo: {
    type: sequelize.INTEGER
  },
  id_rastreador: {
    type: sequelize.INTEGER
  },
  data_hora: {
    type: sequelize.DATE
  },
  data_hora_gravacao: {
    type: sequelize.DATE
  },
  latitude: {
    type: sequelize.DOUBLE
  },
  longitude: {
    type: sequelize.DOUBLE
  },
  velocidade: {
    type: sequelize.INTEGER
  },
  direcao: {
    type: sequelize.FLOAT
  },
  posicao_memoria: {
    type: sequelize.INTEGER
  },
  numero_satelites: {
    type: sequelize.INTEGER
  },
  qualidade_gsm: {
    type: sequelize.INTEGER
  },
  qualidade_gprs: {
    type: sequelize.INTEGER
  },
  panico: {
    type: sequelize.INTEGER
  },
  ignicao: {
    type: sequelize.INTEGER
  },
  entradas: {
    type: sequelize.INTEGER
  },
  saidas: {
    type: sequelize.INTEGER
  },
  horimetro: {
    type: sequelize.INTEGER
  },
  odometro: {
    type: sequelize.INTEGER
  },
  observacao: {
    type: sequelize.STRING
  },
  logradouro: {
    type: sequelize.STRING
  },
  ip_gateway: {
    type: sequelize.STRING
  },
  ip_uploader: {
    type: sequelize.STRING
  },
  motivo: {
    type: sequelize.INTEGER
  },
  contador: {
    type: sequelize.INTEGER
  },
  telemetria: {
    type: sequelize.TEXT
  },
  tensao: {
    type: sequelize.FLOAT
  },
  id_telemetria: {
    type: sequelize.INTEGER
  },
  ponto_referencia: {
    type: sequelize.STRING
  },
  id_motorista: {
    type: sequelize.INTEGER
  },
  id_colaborador: {
    type: sequelize.INTEGER
  },
  id_mensagem: {
    type: sequelize.INTEGER
  },
  indefinido: {
    type: sequelize.INTEGER
  }
})
