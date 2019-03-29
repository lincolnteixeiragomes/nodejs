const db = require('./db')

const Posicao = db.sequelize.define('posicao', {

  id_veiculo: {
    type: db.Sequelize.INTEGER
  },
  id_rastreador: {
    type: db.Sequelize.INTEGER
  },
  data_hora: {
    type: db.Sequelize.DATE
  },
  data_hora_gravacao: {
    type: db.Sequelize.DATE
  },
  latitude: {
    type: db.Sequelize.DOUBLE
  },
  longitude: {
    type: db.Sequelize.DOUBLE
  },
  velocidade: {
    type: db.Sequelize.DOUBLE
  },
  direcao: {
    type: db.Sequelize.FLOAT
  },
  posicao_memoria: {
    type: db.Sequelize.INTEGER
  },
  numero_satelites: {
    type: db.Sequelize.INTEGER
  },
  qualidade_gsm: {
    type: db.Sequelize.INTEGER
  },
  qualidade_gprs: {
    type: db.Sequelize.INTEGER
  },
  panico: {
    type: db.Sequelize.INTEGER
  },
  ignicao: {
    type: db.Sequelize.INTEGER
  },
  entradas: {
    type: db.Sequelize.INTEGER
  },
  saidas: {
    type: db.Sequelize.INTEGER
  },
  horimetro: {
    type: db.Sequelize.INTEGER
  },
  odometro: {
    type: db.Sequelize.INTEGER
  },
  observacao: {
    type: db.Sequelize.STRING
  },
  logradouro: {
    type: db.Sequelize.STRING
  },
  ip_gateway: {
    type: db.Sequelize.STRING
  },
  ip_uploader: {
    type: db.Sequelize.STRING
  },
  motivo: {
    type: db.Sequelize.INTEGER
  },
  contador: {
    type: db.Sequelize.INTEGER
  },
  telemetria: {
    type: db.Sequelize.TEXT
  },
  tensao: {
    type: db.Sequelize.FLOAT
  },
  id_telemetria: {
    type: db.Sequelize.INTEGER
  },
  ponto_referencia: {
    type: db.Sequelize.STRING
  },
  id_motorista: {
    type: db.Sequelize.INTEGER
  },
  id_colaborador: {
    type: db.Sequelize.INTEGER
  },
  id_mensagem: {
    type: db.Sequelize.INTEGER
  },
  indefinido: {
    type: db.Sequelize.INTEGER
  }
},{
  underscored: true,
  freezeTableName: true,
  tableName: 'posicao'  
})

module.exports = Posicao;
