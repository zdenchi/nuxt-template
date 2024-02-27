import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const uk = await prisma.Locale.create({
    data: {
      code: 'uk',
      iso: 'uk-UA',
      name: 'Українська',
      file: 'uk-UA.json',
      content: {
        welcome: 'Ласкаво просимо',
        navigation: {
          home: 'Головна',
          about: 'Про нас',
          services: 'Послуги',
          contact: 'Контакти',
        },
      },
    },
  })

  const en = await prisma.Locale.create({
    data: {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en-US.json',
      content: {},
    },
  })
  console.log({ uk, en })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
