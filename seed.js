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
      sphere: 'Медицина',
      image: 'https://pbs.twimg.com/profile_images/555249125176799232/zo0u-0D3.png'
    },
    {
      name: 'Патологоанатом',
      sphere: 'Медицина',
      image: 'https://pbs.twimg.com/profile_images/555249125176799232/zo0u-0D3.png'
    },
    {
      name: 'Вирусолог',
      sphere: 'Медицина',
      image: 'https://pbs.twimg.com/profile_images/555249125176799232/zo0u-0D3.png'
    },
    {
      name: 'Гост райтер',
      sphere: 'Литература',
      image: 'https://pbs.twimg.com/profile_images/555249125176799232/zo0u-0D3.png'
    },
    {
      name: 'Журналист',
      sphere: 'Литература',
      image: 'https://pbs.twimg.com/profile_images/555249125176799232/zo0u-0D3.png'
    },
    {
      name: 'Человек, который пишет тебе курсач',
      sphere: 'Литература',
      image: 'https://pbs.twimg.com/profile_images/555249125176799232/zo0u-0D3.png'
    },
    {
      name: 'Тестировщик',
      sphere: 'IT',
      image: 'https://pbs.twimg.com/profile_images/555249125176799232/zo0u-0D3.png'
    },
    {
      name: 'Девелопер',
      sphere: 'IT',
      image: 'https://pbs.twimg.com/profile_images/555249125176799232/zo0u-0D3.png'
    },
    {
      name: 'Сисадмин',
      sphere: 'IT',
      image: 'https://pbs.twimg.com/profile_images/555249125176799232/zo0u-0D3.png'
    }
    
  ]
  return Promise.all(professions.map((data) => Profession.create(data)))
}

function vidFabric() {
  const videos = [
    {
      profession: "6077074863064cca4d43a8b1",
        title: 'Больной с болями в груди',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseVideo: "https://www.youtube.com/watch?v=4fVaAqq5SYA&ab_channel=JustPucciThings",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "6077074863064cca4d43a8b2",
        title: 'Влог из морга',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseVideo: "https://www.youtube.com/watch?v=4fVaAqq5SYA&ab_channel=JustPucciThings",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        } 
      },
    {
      profession: "6077074863064cca4d43a8b3",
        title: 'Как проходит исследование короновируса',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseVideo: "https://www.youtube.com/watch?v=4fVaAqq5SYA&ab_channel=JustPucciThings",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "6077074863064cca4d43a8b4",
        title: 'Кто такой гост райтер',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseVideo: "https://www.youtube.com/watch?v=4fVaAqq5SYA&ab_channel=JustPucciThings",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "6077074863064cca4d43a8b5",
        title: 'Стоит ли стремиться быть журналистом в России',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseVideo: "https://www.youtube.com/watch?v=4fVaAqq5SYA&ab_channel=JustPucciThings",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "6077074863064cca4d43a8b6",
        title: 'Как пишутся курсовые.',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseVideo: "https://www.youtube.com/watch?v=4fVaAqq5SYA&ab_channel=JustPucciThings",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "6077074863064cca4d43a8b7",
        title: 'Что за профессия тестировщик',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseVideo: "https://www.youtube.com/watch?v=4fVaAqq5SYA&ab_channel=JustPucciThings",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "6077074863064cca4d43a8b8",
        title: 'Что за профессия девелопер',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseVideo: "https://www.youtube.com/watch?v=4fVaAqq5SYA&ab_channel=JustPucciThings",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "6077074863064cca4d43a8b9",
        title: 'Что за профессия сисадмин',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseVideo: "https://www.youtube.com/watch?v=4fVaAqq5SYA&ab_channel=JustPucciThings",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
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
