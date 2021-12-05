import globalStyle from './style.compiled.css'

GM_addStyle(globalStyle)

let container: Element | null

const toggleAllResults = (event: React.ChangeEvent<HTMLInputElement>): void => {
  container?.classList.toggle('hide-results', event.target.checked)
}

const eventPage = (): void => {
  document.querySelectorAll('.fightCardBout').forEach(elem => {
    const fighterLeftName = elem.querySelector('.fightCardFighterName.left > a')?.textContent
    const fighterRightName = elem.querySelector('.fightCardFighterName.right > a')?.textContent
    if (fighterLeftName == null || fighterRightName == null) return

    let title = 'Click and hold to show result of\n'

    if (Math.round(Math.random()) === 1) {
      title += `${fighterRightName} vs. ${fighterLeftName}`
      elem.classList.add('flip')
    } else {
      title += `${fighterLeftName} vs. ${fighterRightName}`
    }

    elem.setAttribute('title', title)
  })

  container = document.querySelector('ul.fightCard')
  if (container === null) return

  container.classList.add('hide-results', 'was-flipped')

  container.insertAdjacentElement(
    'beforebegin',
    (
      <div className='results-toggle'>
        <label htmlFor='toggle-results' className='results-toggle_label'>
          <div className='results-toggle_label-text'>Hide all results</div>
          <div className='results-toggle_wrapper'>
            <input
              id='toggle-results'
              type='checkbox'
              className='results-toggle_input'
              onChange={toggleAllResults}
              checked
            />
            <div className='results-toggle_track' />
            <div className='results-toggle_knob' />
          </div>
        </label>
      </div>
    ) as any
  )
}

document.addEventListener('DOMContentLoaded', () => {
  if (location.pathname.includes('/events/')) {
    eventPage()
  }
})
