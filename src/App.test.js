// import { fireEvent, render, screen } from '@testing-library/react';
// import App from './App';

// test('minus button has correct text', () => {
//   render(<App />); // React Testing Library에서 act를 자동으로 처리
//   const counterElement = screen.getByTestId('minus-button'); // 테스트 ID로 요소를 선택
//   expect(counterElement).toHaveTextContent('-'); // '0' 문자열로 예상 값 확인
// });
// test('plus button has correct text', () => {
//   render(<App />); // React Testing Library에서 act를 자동으로 처리
//   const counterElement = screen.getByTestId('plus-button'); // 테스트 ID로 요소를 선택
//   expect(counterElement).toHaveTextContent('+'); // '0' 문자열로 예상 값 확인
// });
// test('when the + button is pressed, the counter changes to 1', ()=> {
//   render(<App />);
//   const buttonElement = screen.getByTestId('plus-button');
//   fireEvent.click(buttonElement);
//   const counterElement = screen.getByTestId('counter');
//   expect(counterElement).toHaveTextContent(1);
// })
// test('on/off button has blue color', ()=>{
//   render(<App />);
//   const buttonElement = screen.getByTestId('on/off-button');
//   expect(buttonElement).toHaveStyle({backgroundColor: 'blue'});
// });

// test('Prevent the -,+ button from being prssed when the on/off button is clicked',() => {
//   render(<App />);
//   const onOffButtonElement = screen.getByTestId('on/off-button');
//   fireEvent.click(onOffButtonElement);
//   const plusButtonElement = screen.getByTestId('plus-button');
//   expect(plusButtonElement).toBeDisabled();
// });