import * as noUiSlider from 'nouislider';

export function rangeInit() {
  const priceSlider = document.querySelector('#range');

  if (priceSlider) {
    noUiSlider.create(priceSlider, {
      start: [3000, 23000],
      connect: true,
      step: 100,
      tooltips: [wNumb({ decimals: 0, thousand: '' }), wNumb({ decimals: 0, thousand: ' ' })],
      range: {
        min: [3000],
        max: [40000],
      },
    });

    // ===== get the value from slider
    const outputData = (values) => {
      console.log(priceSlider.noUiSlider.get(true));
    };

    priceSlider.noUiSlider.on('change', outputData);
  }
}
rangeInit();
