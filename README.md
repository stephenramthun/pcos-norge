Monorepo for PCOS-Norge built with [Turborepo](https://turbo.build) and [Vercel](https://www.vercel.com)

## Apps

PCOS-Norge consists of the following apps:

- `site` - User-facing website hosted at www.pcosnorge.no. Built with [NextJS](https://nextjs.org)
- `admin` - Dashboard for admins of the website. Used for managing memberships and other administrative tasks. Built with [NextJS](https://nextjs.org).
- `cms` - Sanity Studio instance for managing content. Built with [Sanity](https://www.sanity.io).

In addition, the following modules contain functionality shared between the apps: 
- `db` - Shared datasource for the modules. Built with [Prisma](https://www.prisma.io) and [CockroachDB](https://www.cockroachlabs.com). 
- `emails` -  Email renderer and sender. Built with [Mailing](https://www.mailing.run)

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
