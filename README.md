# Init Instructions
- Clone Repo
- Run `$ npm install`
- Add to `.env.development.local` file (create if not exist)
  ```env
  NEXTAUTH_SECRET="[use `openssl rand -base64 32` to generate a secret]"
  NEXTAUTH_URL="[the link of your website such as `http://localhost:3000`]"
  DATABASE_URL="postgresql://[user]:[password]@localhost:5432/[your_project_name_here]"
  ```

# Prisma Migration
After adding/modifying your schema use the package script `migrate` to run the migration
- `$ npm run migrate-dev` (this is equivalent to `npx prisma migrate dev`)

# Vercel Deployment
## Supabase
- Create a Supabase account
- Create a new project with the region in `Singapore` (REMEMBER THE PASSWORD! YOU NEED THIS LATER!)
- Once the project has completed the setup, go to `Settings (the cog wheel) -> Database -> Connection info`
- Create and note down the following link:
  - `DATABASE_URL="postgresql://postgres:[the password you used to create the project]@[Host]:5432/postgres"`

## Vercel
- Create a Vercel account
- Create a new project by selecting the appropriate github repo.
- In the project setup screen, add `Environment Variables`
  - Add the `DATABASE_URL` that you generated from Supabase
  - and everything other things in `.env.development.local` except `NEXTAUTH_URL`
- Once it has deployed, add Integrations to the project
  - Go to `Settings -> Integrations -> Browse Market`
  - Integrate the following:
    - Supabase
    - Checkly
    - Logtails
- Migrations
  - Use the `$ npm run deploy` to deploy manually OR
  - Override vercel's `Settings -> General -> Build & Development Settings -> BUILD COMMAND` to `npm run vercel-build`

> You might need to redeploy for settings to take effect!

## Redeployment
- From your dashboard, go to `[Your project] -> Deployments -> Select the vertical ... of your desire deployment -> Redeploy`
