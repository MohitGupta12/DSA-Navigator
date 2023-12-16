/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors:{
        bkg:"hsl(var(--bkg))",
        textColor:"hsl(var(--text-color))",
        progressBar :"hsl(var(--progress-bar))",
        progressBarBorder :"hsl(var(--progress-bar-border))",
        scrollAnimation:"hsl(var(--scroll-animation))",
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
        bookmarkIconColorActive:"hsl(var(--bookmark-icon-color-active))",
        notesIconColor:"hsl(var(--notes-icon-color))",
        notesIconColorActive:"hsl(var(--notes-icon-color-active))",
        doneRowColor:"hsla(var(--done-row-color))",
        doneTag:"hsla(var(--done-tag))",
        doneTagText:"hsl(var(--done-tag-text))",
        pendingTag:"hsla(var(--pending-tag))",
        pendingTagText:"hsl(var(--pending-tag-text))",
        modelBkg:"hsl(var(--model-page))",
        modelPageBorder:"hsl(var(--model-page-border))",
        modelPageShadow:"hsla(var(--model-page-shadow))",
        aboutBorder:"hsla(var(--about-page-border))",
      },
      fontFamily: {
        sans: ['Ubuntu Mono', 'monospace'],
      },
      boxShadow: {
        'navbar-shadow': ' 0px 0px 32px 4px rgba(150,210,250,0.25)',
      },
      dropShadow:{
        '3xl':'0px 0px 8px rgba(245, 158, 11, 0.65',
      },
      textShadow:{
        'md-white':'0px 0px 8px rgba(255,255,255,0.65)'
      },
     
    },
  },
  plugins: [],
}

