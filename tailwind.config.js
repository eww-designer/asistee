module.exports = {
  // Your existing config
  plugins: [
    // Add a plugin for custom variants if needed
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('tab-active', '&.active')
    })
  ]
}