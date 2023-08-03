<p>
    <a href="https://flowbite.com" >
      <img alt="Flowbite Icons - Free and open-source SVG icons" width="350" src="https://flowbite.s3.amazonaws.com/github/flowbite-icons-logo-github.png">
    </a><br>
    Free and open-source collection of over 430+ SVG icons built for Tailwind CSS and Figma
</p>

<p>
    <a href="https://discord.com/invite/4eeurUVvTy"><img src="https://img.shields.io/discord/902911619032576090?color=%237289da&label=Discord" alt="Discord"></a>
<!--     <a href="https://www.npmjs.com/package/flowbite"><img src="https://img.shields.io/npm/dt/flowbite.svg" alt="Total Downloads"></a> -->
<!--     <a href="https://github.com/themesberg/flowbite/releases"><img src="https://img.shields.io/npm/v/flowbite.svg" alt="Latest Release"></a> -->
    <a href="https://flowbite.com/docs/getting-started/license/"><img src="https://img.shields.io/badge/license-MIT-blue" alt="Licenese"></a>
</p>

## Getting started

The quickest way of you can start using these icons is by going to the [Flowbite Icons](https://flowbite.com/icons/) page and copy-paste the icons as raw SVG or JSX (React) by selecting the "copy as" option. You can also configure the icon size and stroke width via our custom interface.

<a href="https://flowbite.com/icons/">
  <img src="https://flowbite.s3.amazonaws.com/github/flowbite-icons-github.png" alt="Flowbite Icons"/>
</a>

## Basic usage

The default examples are provided with raw SVG code source which is a flexible and efficient way of integrating icons into your web application regardless of what tech stack you're using.

Here is a solid and outline version of the same `notification-bell` icon:

```html
<!-- Notification bell solid -->
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
    <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
</svg>

<!-- Notification bell outline -->
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"/>
</svg>
```

You can copy and paste this into your project and you can set the color via `text-gray-500 dark:text-gray-400` and the size with the Tailwind CSS `w-{*}` width and `h-{*}` classes.

## JSX format (React)

To start using the icons inside a React or Next.js project you will need to update the attributes to use camelCase format and exchange `class` with `className`:

```jsx
// Notification bell solid JSX
<svg className="w-6 h-6 text-gray-800 dark:text-white" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
    <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
</svg>

// Notification bell outline JSX
<svg className="w-6 h-6 text-gray-800 dark:text-white" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"/>
</svg>
```

You can use our custom interface on [Flowbite Icons](https://flowbite.com/icons/) to select if you want the raw SVG or JSX (React) format and these changes will be applied automatically.

## Svelte

Thanks to the open-source community from Svelte - the Flowbite Icons collection is now also available to be used in Svelte projects by installing the official [Svelte icons package](https://github.com/themesberg/flowbite-svelte-icons) built by [shinokada](https://github.com/shinokada).

```sh
npm i -D flowbite-svelte-icons
```

To make sure the classes used by flowbite-svelte-icons are included by the Tailwindcss, add the following to tailwind.config.cjs.

```cjs
const config = {
  content: [
       // more lines
        "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
    ],
    // more lines
} 
```

Import the icons from the freshly installed package:

```html
<script>
  import { Icon } from 'flowbite-svelte-icons';
</script>

<Icon name="address-card-solid" />
```

Learn more about usage by going to the [Flowbite Svelte Icons](https://flowbite-svelte-icons.vercel.app/) repository on GitHub.

## Figma support

If you want to use Flowbite Icons inside your Figma project you can duplicate the following file from the community:

🎨 [Flowbite Icons in Figma](https://www.figma.com/community/file/1253280241668899805/Flowbite-Icons)

## Flowbite Blocks

Check out Flowbite Blocks to get access to over 330+ website sections coded in Tailwind CSS and Flowbite:

📦 [Check out Flowbite Blocks](https://flowbite.com/blocks/)

## Pro version

If you want to support this project you can consider purchasing the pro version of Flowbite which includes hundreds of advanced UI components, sections, pages, and a Figma design system:

💎 [Check out Flowbite Pro](https://flowbite.com/pro/)

## Community

If you need help or just want to discuss about the library join the community on Github:

⌨️ [Discuss about Flowbite on GitHub](https://github.com/themesberg/flowbite/discussions)

For casual chatting with others using the library:

💬 [Join the Flowbite Discord Server](https://discord.gg/4eeurUVvTy)

Video tutorials and presentations using Flowbite:

🎥 [Subscribe to our YouTube channel](https://www.youtube.com/channel/UC_Ms4V2kYDsh7F_CSsHyQ6A)

## Copyright and license

Flowbite Icons is free and open-source under the MIT License.

- 📝 [Read about the licensing terms](https://flowbite.com/docs/getting-started/license/)

The "Flowbite name" and logos are trademarks of Bergside Inc.

- 📀 [Brand guideline and trademark usage agreement](https://flowbite.com/brand/)

## Authors and credits

- designed by [Evelyne Krall](https://twitter.com/EvelyneKrall)
- integration in Figma by [Robert Tanislav](https://twitter.com/roberttanislav)
- coding the interface by [Zoltán Szőgyényi](https://twitter.com/zoltanszogyenyi)
