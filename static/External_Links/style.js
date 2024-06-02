document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('.heading');
    if (h1) {
      h1.addEventListener('click', () => {
        console.log('Button clicked!');
      });
    } else {
      console.error('Element not found');
    }
  });
  