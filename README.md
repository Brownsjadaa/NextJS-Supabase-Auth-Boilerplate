<h1 align="center">⚡ Next JS & Supabase Auth Boilerplate ⚡</h1>
<p align="center">A super simple starting point for people learning how to authenticate users using latest NextJS 14 and Supabase SSR provided by DaveyReno.com</p>

## Includes

- ✅ Register
- ✅ Login
- ✅ Forgot Password (Incl. email)
- ✅ Update Password

## It is...

- ✅ Perfect for beginners
- ✅ Based on official Supabase docs

## It's not...

- ❌ Crazy advanced
- ❌ Difficult to understand

## Using

- ⚛️ React 18
- 📐 Shadcn UI
- 🎨 Tailwind
- 👷🏼 TypeScript
- 📋 Zod Form Validation

## Get auth'in!

1. You'll first need a Supabase project which can be made [via the Supabase dashboard](https://database.new)


2. Use `cd` to change into the app's directory

   ```bash
   cd name-of-new-app
   ```

3. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [your Supabase project's API settings](https://app.supabase.com/project/_/settings/api)

4. ## Features
   - Authentication flows (Sign up, Login, Forgot Password)
   - Supabase integration
   - Shadcn UI components
   - Toast notifications

   ## Setup
      1. Clone this repo
      2. Run `npm install`
      3. Create `.env.local` with your Supabase credentials

5. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:3000](http://localhost:3000/).

6. Push your new app to Github
   ## First you need to create a new repository on Github
       Then you copy the link and come and add this as your remote repository
       ```bash
       git remote add origin <your-repository-url>
       ```
       Then you can push your code to Github
       ```bash
       git push -u origin main
       ```

   Congratulations, You now have a working NextJs APp, with shadcn UI and authentication system with Supabase!
   