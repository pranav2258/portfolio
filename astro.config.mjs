// // @ts-check
// import { defineConfig } from "astro/config";
// import tailwindcss from "@tailwindcss/vite";

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });
// import { defineConfig } from "astro/config";
// import tailwindIntegration from '@astrojs/tailwind';

// export default defineConfig({
//   integrations: [tailwindIntegration()],
// });
// @ts-check
// import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind"; // Preferred Astro integration
// // OR (alternative, but less recommended)
// // import tailwindVite from "@tailwindcss/vite"; 

// // Recommended: Use @astrojs/tailwind (official integration)
// export default defineConfig({
//   integrations: [tailwind()], 
// });

//@ts-check
// import { defineConfig } from "astro/config";
// import tailwindcss from "@tailwindcss/vite";

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss() as any],
//   },
// });
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind"; // Use the official integration

export default defineConfig({
  integrations: [tailwind()],
});


// import { defineConfig } from "astro/config";
// import tailwind from "@astrojs/tailwind";  // Changed import

// export default defineConfig({
//   integrations: [tailwind()],  // Use integration instead of Vite plugin
// });


