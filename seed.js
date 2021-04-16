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
      image: 'https://persomed.com.ua/sites/default/files/images/kakie-bolezni-lechit-terapevt.jpg'
    },
    {
      name: 'Патологоанатом',
      sphere: 'Медицина',
      image: 'https://niioz.ru/upload/iblock/e62/e6212e7fd11849cca5bddddb9547d228.jpg'
    },
    {
      name: 'Вирусолог',
      sphere: 'Медицина',
      image: 'https://cdn21.img.ria.ru/images/07e4/05/15/1571767352_0:31:2759:1583_1920x0_80_0_0_b183282503bde614313ae6f022650067.jpg'
    },
    {
      name: 'Гост райтер',
      sphere: 'Литература',
      image: 'https://lh3.googleusercontent.com/proxy/-KO1nBab_6IK62G2W4vn888otkEYziKerNBDxYJt5gFbOVTDTMNGqzVWZvL8SXXVXp1PYk3JeaZuVe9c3nxEoD_0uP0'
    },
    {
      name: 'Журналист',
      sphere: 'Литература',
      image: 'https://detector.media/doc/images/news/archive/2016/167900/ArticleImage_167900.png?t=1559816287'
    },
    {
      name: 'Человек, который пишет тебе курсач',
      sphere: 'Литература',
      image: 'https://image.freepik.com/free-photo/student-writing-on-notebook-while-using-laptop_7190-3172.jpg'
    },
    {
      name: 'Тестировщик',
      sphere: 'IT',
      image: 'https://enjoy-job.ru/wp-content/uploads/profs/tester1.jpg'
    },
    {
      name: 'Девелопер',
      sphere: 'IT',
      image: 'https://adukar.by/images/photo/razrabotchik.jpg'
    },
    {
      name: 'Сисадмин',
      sphere: 'IT',
      image: 'https://enjoy-job.ru/wp-content/uploads/profs/sysadmin1.jpg'
    }
    
  ]
  return Promise.all(professions.map((data) => Profession.create(data)))
}

function vidFabric() {
  const videos = [
    {
      profession: "Терапевт",
        title: 'Что делает врач',
        videoLink: "https://www.youtube.com/embed/uCL5Y4jipLc",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Больной с болями в груди",
          caseVideo: "https://www.youtube.com/embed/Tr8asZGT7sA",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Патологоанатом",
        title: 'Что делает паталогоанатом',
        videoLink: "https://www.youtube.com/embed/EJwWvwCESMs",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Привезли тело, подозрение на насильственную смерть.",
          caseVideo: "https://www.youtube.com/embed/Amix2RG_mao",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        } 
      },
    {
      profession: "Вирусолог",
        title: 'Как проходит день вирусолога',
        videoLink: "https://www.youtube.com/embed/JmoIK0zHvz4",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Разбилась пробирка с вирусом. Что делать",
          caseVideo: "https://www.youtube.com/embed/5wQoE53R4UY",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Гост райтер",
        title: 'Кто такой гост райтер',
        videoLink: "https://www.youtube.com/embed/ZQz9ZZT0tFc",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Пишем кальянный рэпчик о любви за полчаса.",
          caseVideo: "https://www.youtube.com/embed/t3em1oJCDoI",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Журналист",
        title: 'Журналистика в России',
        videoLink: "https://www.youtube.com/embed/kik-sQH7AHI",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Писать честно или терпеть обыски",
          caseVideo: "https://www.youtube.com/embed/NSpqslBl228",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Человек, который пишет тебе курсач",
        title: 'Как пишутся курсовые.',
        videoLink: "https://www.youtube.com/embed/j9lTmWRaPro",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Предложили написать курсовую по роботехнике, а ты сам учил филологию, или Как стать экспертом в роботехнике за трое суток и семь литров кофе",
          caseVideo: "https://www.youtube.com/embed/uuwJ_Tt9yy4",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Тестировщик",
        title: 'Что за профессия тестировщик',
        videoLink: "https://www.youtube.com/embed/fUzlf9aHOcg",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Встретился забавный баг в черновой версии программы, сообщить или посмеяться",
          caseVideo: "https://www.youtube.com/embed/sjkDel30tjU",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Девелопер",
        title: 'Что за профессия девелопер',
        videoLink: "https://www.youtube.com/embed/HgidJ8JmJh0",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Рисовать макеты или договариваться с заказчиком на словах",
          caseVideo: "https://www.youtube.com/embed/4Y7OeGgV0hA",
          caseScript: "скрипт видео кейса",
          solutionOfTheUser: 'сюда будет сохраняться решение пользователя',
          realSolution: 'тут будет выводиться решение профессионала'
        }
    },
    {
      profession: "Сисадмин",
        title: 'Что за профессия сисадмин',
        videoLink: "https://www.youtube.com/embed/4pMLWglfLB0",
        script: "Тут будет высвечиваться скрипт видео, возможно, мы подключим его к таймеру и запустим субтитрами во время видео, нужно будет человеку проверить скрипт, а не полагаться на автосоздание субтитров как, например, в ютубе, потому что там часто выпадают крайне транные слова, срамота, а не результат.", //или файл через fs reader???
        rating: 0,
        favourites: 0,
        case: {
          caseTitle: "Всё упало, всё сломалось, а я крайний.",
          caseVideo: "https://www.youtube.com/embed/4iXXEgFo1og",
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
