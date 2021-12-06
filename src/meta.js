// ==UserScript==
// @name        process.env.TITLE
// @description process.env.DESCRIPTION
// @author      process.env.AUTHOR
// @version     process.env.VERSION
// @homepageURL https://github.com/deepfriedmind/spoiler-free-tapology-userscript/
// @downloadURL https://github.com/deepfriedmind/spoiler-free-tapology-userscript/raw/main/dist/spoiler-free-tapology.user.js
// @supportURL  https://github.com/deepfriedmind/spoiler-free-tapology-userscript/issues
// @namespace   https://github.com/deepfriedmind
// @match       https://www.tapology.com/fightcenter/events/*
// @match       https://www.tapology.com/fightcenter/fighters/*
// @match       https://www.tapology.com/search*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACWCAMAAABNaSJ6AAAAYFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzK7FeAAAAIHRSTlMAKFBncUUVMV5ECzZ82/+xhecejfSizv6pmSqTuT+anIdJqcQAAALCSURBVHgB7dvXjqNAFIThIrWJhxzGhtn3f8sVk4NtTo9oLbOq77pk/SbdNeiYPD8Irwgig2tOcXh1nqQ28zjDT6V5ITeVPr4wVX1nHuGLpr097/oMH2XtMH5XlDE+i2sZ5Y7J4KOgk7v6FB+Fo9z1gDdpL7fUn6Ir2VKc8a6VLUODdxfZMA4Gz86F3NHiTS7bisbiD4oURl+8NqdYmULuqvDCF43Zbj7hRSwKY4/VJBt8PBtEJcCzQl7ofr3Wz5Ptu6G/DCvL+QysQot5L5sWrEpRyuzmDVazxbyWTTlWnSiFdvMYAFJRGmMY7StiROsBABrRqgDgLFo5POXz8zJUfwQy0XoEgEW0Wpz/efIfAEiYzGQmM5nJTGYyk5nMZCYzmclMZjKTmcxkJjOZyUxmMpOZzGQmM5nJTGYyk5nMZCYzmclMZjKTmcxkJjOZyUz+LcmNbCuPlYxOtTpU8iyb/IMlx7KlxsGSMciG8HDJi+blO1byxqMxpwdMRlQojrgeKxkIB7mm6xccNRkwWfTV4gE4YLLaf53cA8DJ7kTj4iLZ2P1oI1o5AHgWc71alGK7uY9Vp5/r9XZHfidRMliV+rmeLzqz3by0O7Y9wcYsKpHd4fjFbp7BRqb/Zuk/Ahe8iESjgp1Y/1isArt5uPtjoWueU9g0l4BNcw972Wx135LB6hvrF3JPF+JH/LKTG4rWw1fx7f9YVA2+Cm7Ph9zgx7wluiJrcFV6Sq7Ojc08OaUgIq0ovDzs55JHcMu0neytuzRwx69llP11MVwJxJUQbvjiTgwX0lrc6Ro4UIlLFzhQi0sd9peJW5Gzz8Vv+mjk4lbLZCYzmclMZjKTmewAk5nMZCYz2U4obuXYnS9u+didEbcM9jeJSzMcWMSlCC604s4j3CgdPhau9OJGmcKZoJb9dTmciqdilHE/dRmm+K3+AvT3Srj7wkCqAAAAAElFTkSuQmCC
// @grant       GM_addStyle
// @require     https://cdn.jsdelivr.net/combine/npm/@violentmonkey/dom@2,npm/@violentmonkey/ui@0.7
// @run-at      document-start
// ==/UserScript==

// "@run-at document-start" is needed to avoid FOUC that would briefly show spoilers

/**
 * The @grant's used in your source code will be added automatically by rollup-plugin-userscript.
 * However you have to add explicitly those used in required resources.
 */
