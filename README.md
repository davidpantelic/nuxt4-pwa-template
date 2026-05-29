## Getting Started with Native Mobile (Capacitor)

If you want to compile this template into native iOS and Android apps, run these steps inside your new project:

1. Initialize Capacitor with your custom app details:

   ```bash
   npx cap init "Your App Name" com.yourdomain.appname
   ```

2. Open `capacitor.config.json` and ensure the web directory points to the Nuxt static output:

   ```json
   "webDir": ".output/public"
   ```

3. Add the native project structures:

   ```bash
   npx cap add android
   npx cap add ios
   ```

4. Build your code and sync it into the native simulators:
   ```bash
   npm run build:mobile
   ```
