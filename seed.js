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
      profession: "Терапевт",
        title: 'Что делает врач',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Больной с болями в груди",
          caseVideo: "https://www.youtube.com/embed/VfW86fnQL5w",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Патологоанатом",
        title: 'Что делает паталогоанатом',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Привезли тело, подозрение на насильственную смерть.",
          caseVideo: "https://www.youtube.com/embed/VfW86fnQL5w",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        } 
      },
    {
      profession: "Вирусолог",
        title: 'Как проходит день вирусолога',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Разбилась пробирка с вирусом. Что делать?",
          caseVideo: "https://www.youtube.com/embed/VfW86fnQL5w",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Гост райтер",
        title: 'Кто такой гост райтер',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Пишем кальянный рэпчик о любви за полчаса.",
          caseVideo: "https://www.youtube.com/embed/VfW86fnQL5w",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Журналист",
        title: 'Журналистика в России',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Писать честно или терпеть обыски?",
          caseVideo: "https://www.youtube.com/embed/VfW86fnQL5w",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Человек, который пишет тебе курсач",
        title: 'Как пишутся курсовые.',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Предложили написать курсовую по роботехнике, а ты сам учил филологию, или Как стать экспертом в роботехнике за трое суток и семь литров кофе",
          caseVideo: "https://www.youtube.com/embed/VfW86fnQL5w",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Тестировщик",
        title: 'Что за профессия тестировщик',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Встретился забавный баг в черновой версии программы, сообщить или посмеяться?",
          caseVideo: "https://www.youtube.com/embed/VfW86fnQL5w",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Девелопер",
        title: 'Что за профессия девелопер',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Рисовать макеты или договариваться с заказчиком на словах?",
          caseVideo: "https://www.youtube.com/embed/VfW86fnQL5w",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Сисадмин",
        title: 'Что за профессия сисадмин',
        videoLink: "https://www.youtube.com/embed/BzV4BkxtyYs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Всё упало, всё сломалось, а я крайний.",
          caseVideo: "https://www.youtube.com/embed/VfW86fnQL5w",
          // <iframe width="560" height="315" src="https://www.youtube.com/embed/VfW86fnQL5w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
