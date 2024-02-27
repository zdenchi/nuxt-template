import { mkdir, writeFile } from 'node:fs'
import path from 'path'
import { PrismaClient } from '@prisma/client'
import translate from 'translate'

const { TRANSLATE_ENGINE, TRANSLATE_ENGINE_KEY } = process.env

if (TRANSLATE_ENGINE) {
  translate.engine = TRANSLATE_ENGINE
  translate.key = TRANSLATE_ENGINE_KEY
}

translate.from = 'uk'

const prisma = new PrismaClient()

async function mergeAndTranslate(defaultLocale, locale, lang) {
  const result = {}

  async function compareAndTranslate(key, value) {
    if (typeof value === 'object' && value !== null) {
      result[key] = await mergeAndTranslate(value, locale[key] || {}, lang)
    } else {
      result[key] =
        locale[key] === undefined ? await translate(value, lang) : locale[key]
    }
  }

  const promises = Object.entries(defaultLocale).map(([key, value]) =>
    compareAndTranslate(key, value),
  )

  await Promise.all(promises)

  return result
}

function createLocaleFile(file, content) {
  const filePath = path.join(__dirname, 'lang', file)
  const data = JSON.stringify(content, null, 2)

  mkdir(path.dirname(filePath), { recursive: true }, (err) => {
    if (err) throw err

    writeFile(filePath, data, (err) => {
      if (err) throw err
      console.log(`File ${file} has been created`)
    })
  })
}

export default async function translator() {
  console.log('Running translation...')
  const [uk, en] = await prisma.Locale.findMany()
  const englishTranslated = await mergeAndTranslate(
    uk.content,
    en.content,
    'en',
  )
  await prisma.Locale.update({
    where: { id: en.id },
    data: { content: englishTranslated },
  })
  console.log('Translation done')
  createLocaleFile(en.file, englishTranslated)
  createLocaleFile(uk.file, uk.content)
}
