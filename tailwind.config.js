/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors:{
        // bkg:
        progressBar :"hsl(var(--progress-bar))",
        navBar :"hsl(var(--nav-bar))",
        topicCard:"hsl(var(--topic-card))",
        topicBorder:"hsl(var(--topic-border))",
        topicBtnColor:"hsl(var(--topic-btn-color))",
        topicTextColor:"hsl(var(--topic-text-color))",
        topicShadowColor:"hsla(var(--topic-shadow-color))",
        topicCardStarted:"hsl(var(--topic-card-started))",
        topicBorderStarted:"hsl(var(--topic-border-started))",
        topicBtnColorStarted:"hsl(var(--topic-btn-color))",
        topicShadowColorStarted:"hsla(var(--topic-shadow-started-color))",
        doneColor:"hsl(var(--done-color))",
        bookmarkBtnColor:"hsl(var(--bookmark-btn-color))",
        bookmarkBtnColorActive:"hsl(var(--bookmark-btn-active-color))",
        tableHeaderColor:"hsl(var(--table-header-color))",
        bookmarkIconColor:"hsl(var(--bookmark-icon-color))",
        notesIconColor:"hsl(var(--notes-icon-color))",
        doneRowColor:"hsla(var(--done-row-color))",
      },
      fontFamily: {
        sans: ['Ubuntu Mono', 'monospace'],
      },
      boxShadow: {
        'navbar-shadow': ' 0px 0px 32px 4px rgba(150,210,250,0.25)',
      },
      dropShadow:{
        '3xl':'0px 0px 8px rgba(245, 158, 11, 0.65',
        // 'bookmark': ,
      },
      textShadow:{
        'md-white':'0px 0px 8px rgba(255,255,255,0.65)'
      },
     
    },
  },
  plugins: [],
}

