const mongoose = require('mongoose')
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  poolSize: 10,
  bufferMaxEntries: 0
}

const DB_HOST = 'localhost'
const DB_NAME = 'profOrientation'
const DB_PORT = 27017

const dbConnectionURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

function dbConnect() {
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err)
    // console.log('Success connected to mongo')
  })
}

dbConnect()

const Profession = require('./database/professions')
const Video = require('./database/videos')



function profFabric() {
  const professions = [
    {
      name: 'Терапевт',
      sphere: 'Медицина'
    },
    {
      name: 'Патологоанатом',
      sphere: 'Медицина'
    },
    {
      name: 'Вирусолог',
      sphere: 'Медицина'
    },
    {
      name: 'Гост райтер',
      sphere: 'Литература'
    },
    {
      name: 'Журналист',
      sphere: 'Литература'
    },
    {
      name: 'Человек, который пишет тебе курсач',
      sphere: 'Литература'
    },
    {
      name: 'Тестировщик',
      sphere: 'IT'
    },
    {
      name: 'Девелопер',
      sphere: 'IT'
    },
    {
      name: 'Сисадмин',
      sphere: 'IT'
    }
    
  ]
  return Promise.all(professions.map((data) => Profession.create(data)))
}

function vidFabric() {
  const videos = [
    {
      profession: "6077074863064cca4d43a8b1",
        title: 'Больной с болями в груди',
        videoLink: "https://www.youtube.com/watch?v=Tr8asZGT7sA&ab_channel=%D0%96%D0%B8%D1%82%D1%8C%D0%97%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%BE%21",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: 'some case'
    },
    {
      profession: "6077074863064cca4d43a8b2",
        title: 'Влог из морга',
        videoLink: "https://www.youtube.com/watch?v=hVxqRXI9FcM&ab_channel=DSA",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: 'some case'
    },
    {
      profession: "6077074863064cca4d43a8b3",
        title: 'Как проходит исследование короновируса',
        videoLink: "https://www.youtube.com/watch?v=ue9_f7rV558&ab_channel=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B0%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%BC%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%B5",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: 'some case'
    },
    {
      profession: "6077074863064cca4d43a8b4",
        title: 'Кто такой гост райтер',
        videoLink: "https://www.youtube.com/watch?v=ZQz9ZZT0tFc&ab_channel=TemaFlex",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: 'some case'
    },
    {
      profession: "6077074863064cca4d43a8b5",
        title: 'Стоит ли стремиться быть журналистом в России',
        videoLink: "https://www.youtube.com/watch?v=q-STl1rSVEM&ab_channel=%D0%AD%D1%85%D0%BE%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D1%8B",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: 'some case'
    },
    {
      profession: "6077074863064cca4d43a8b6",
        title: 'Как пишутся курсовые.',
        videoLink: "https://www.youtube.com/watch?v=j9lTmWRaPro&ab_channel=%D0%98%D0%B2%D0%B0%D0%BD%D0%9A%D1%83%D0%BD%D0%BF%D0%B0%D0%BD",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0
    },
    {
      profession: "6077074863064cca4d43a8b7",
        title: 'Что за профессия тестировщик',
        videoLink: "https://www.youtube.com/watch?v=fUzlf9aHOcg&ab_channel=AMNUSA",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: 'some case'
    },
    {
      profession: "6077074863064cca4d43a8b8",
        title: 'Что за профессия девелопер',
        videoLink: "https://www.youtube.com/watch?v=5YiKakhDxK8&ab_channel=%D0%92%D0%B0%D0%B4%D0%B8%D0%BC%D0%A1%D0%B8%D0%B4%D0%BE%D1%80%D0%BE%D0%B2",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: 'some case'
    },
    {
      profession: "6077074863064cca4d43a8b9",
        title: 'Что за профессия сисадмин',
        videoLink: "https://www.youtube.com/watch?v=4pMLWglfLB0&ab_channel=%D0%9F%D0%90%D0%A0%D0%90%D0%94%D0%9F%D0%A0%D0%9E%D0%A4%D0%95%D0%A1%D0%A1%D0%98%D0%99",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: 'some case'
    }
    
  ]
  return Promise.all(videos.map((data) => Video.create(data)))
}


async function main() {
  await profFabric() // Фабрика профессий создает профессии в базе данных.
  await vidFabric() // Фабрика видео создает видео в базе данных.
}
main().then(() => {console.log('its work+')
mongoose.disconnect()})

module.exports = { profFabric }
module.exports = { vidFabric }
