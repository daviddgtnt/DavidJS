import {
  RenderPage,
  GetElFromFirstDiv,
  GetElFromId,
  SetTitle,
  createEl,
  main,
  span,
  br,
  GetAttributes,
  State,
} from './davidjs/all.js';

var count = new State(0, render);

function render() {
  var website = main(
    span(count.read()) +
      br() +
      createEl(
        'button',
        'Increment Counter',
        GetAttributes({ id: 'incButton' })
      )
  );
  SetTitle('DavidJS');
  RenderPage(GetElFromFirstDiv(), website, '');

  GetElFromId('incButton').addEventListener('click', () => {
    count.update(count.read() + 1);
  });
}

render();
