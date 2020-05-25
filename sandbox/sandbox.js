import datepicker from '../src/datepicker'
import './sandbox.css'

// Enable us to play with datepicker in the console.
window.datepicker = datepicker

window.test = () => {
  window.start = datepicker('[data-cy="daterange-input-start"]', {
    id: 1,
    alwaysShow: 1,
  })
  window.end = datepicker('[data-cy="daterange-input-end"]', {
    id: 1,
    alwaysShow: 1,
  })
}
